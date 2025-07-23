import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  AnimatedDiceIcon,
  CustomButton,
  DiceIcon,
  PokemonCard,
  WinnerInfo,
} from '../../components';
import { getCurrentHealth, rollDiceForBattleWithBonus } from '../../helpers';
import { useRandomPokemon } from '../../hooks';
import { battleActions, useAppDispatch } from '../../store';
import { theme } from '../../styles';
import { DiceType } from '../../types';
import { styles } from './battleScreen-styles';

const maxHealth = 100;

export function BattleScreen() {
  const [myDiceResult, setMyDiceResult] = useState<any>([]);
  const [enemyDiceResult, setEnemyDiceResult] = useState<any>([]);
  const [myHealth, setMyHealth] = useState<number>(maxHealth);
  const [enemyHealth, setEnemyHealth] = useState<number>(maxHealth);
  const [showWinnerModal, setShowWinnerModal] = useState<boolean>(false);
  const [isMyTurn, setIsMyTurn] = useState<boolean>(true);
  const [diceLoading, setDiceLoading] = useState({
    myDiceLoading: false,
    enemyDiceLoading: false,
  });
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {
    data: myPokemonData,
    error: myPokemonError,
    refetch: refetchMyPokemon,
  } = useRandomPokemon('my');

  const {
    data: enemyPokemonData,
    isLoading,
    error: enemyPokemonError,
    refetch: refetchEnemyPokemon,
  } = useRandomPokemon('enemy');

  const handlePressAttack = useCallback(() => {
    const { playerRolls } = rollDiceForBattleWithBonus();

    setMyDiceResult(playerRolls);

    setEnemyHealth(prev => getCurrentHealth(playerRolls, prev));

    setIsMyTurn(false);
  }, []);

  useEffect(() => {
    if (!isMyTurn && enemyHealth > 0) {
      const { enemyRolls } = rollDiceForBattleWithBonus();
      setDiceLoading({ myDiceLoading: false, enemyDiceLoading: true });
      const interval = setTimeout(() => {
        setEnemyDiceResult(enemyRolls);
        setIsMyTurn(true);

        setMyHealth(prev => getCurrentHealth(enemyRolls, prev));
        setDiceLoading({ myDiceLoading: false, enemyDiceLoading: false });
      }, 2000);
      return () => clearTimeout(interval);
    }
  }, [isMyTurn]);

  useEffect(() => {
    if (enemyHealth <= 0 || myHealth <= 0) {
      setShowWinnerModal(true);
      dispatch(
        battleActions.setBattleHistory({
          myPokemon: {
            name: myPokemonData?.name ?? '',
            imageUrl: myPokemonData?.sprites?.front_default,
          },
          enemyPokemon: {
            name: enemyPokemonData?.name ?? '',
            imageUrl: enemyPokemonData?.sprites?.front_default,
          },
          winner: myHealth > enemyHealth,
          finishHealth: { my: myHealth, enemy: enemyHealth },
        }),
      );
    }
  }, [enemyHealth, myHealth]);

  const handleUseMyPokemon = useCallback(() => {
    refetchEnemyPokemon();
    setMyHealth(maxHealth);
    setEnemyHealth(maxHealth);
    setShowWinnerModal(false);
    setIsMyTurn(true);
    setEnemyDiceResult([]);
    setMyDiceResult([]);
    navigation.navigate('StatisticsScreen' as never);
  }, []);

  const handleGetNewEnemyPokemon = useCallback(() => {
    refetchMyPokemon();
    refetchEnemyPokemon();
    setMyHealth(maxHealth);
    setEnemyHealth(maxHealth);
    setShowWinnerModal(false);
    setIsMyTurn(true);
    setEnemyDiceResult([]);
    setMyDiceResult([]);
    dispatch(battleActions.clearBattleHistory());
  }, []);

  if (enemyPokemonError || myPokemonError) {
    return (
      <View style={styles.container}>
        <Text>{String(enemyPokemonError ?? myPokemonError)}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.text} />
      </View>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <PokemonCard
            data={enemyPokemonData}
            isEnemy
            health={enemyHealth}
            maxHealth={maxHealth}
          />
          {diceLoading.enemyDiceLoading ? (
            <View style={styles.dices}>
              <AnimatedDiceIcon diceCount={6} />
            </View>
          ) : (
            <FlatList
              keyExtractor={key => key.toString()}
              data={enemyDiceResult}
              horizontal
              contentContainerStyle={styles.dices}
              renderItem={({ item }: { item: DiceType }) => (
                <DiceIcon diceCount={item} />
              )}
            />
          )}
        </View>

        <Text style={styles.vsText}>VS</Text>

        <View style={styles.body}>
          {isMyTurn ? (
            <FlatList
              keyExtractor={key => key.toString()}
              data={myDiceResult}
              horizontal
              contentContainerStyle={styles.dices}
              renderItem={({ item }: { item: DiceType }) => (
                <DiceIcon diceCount={item} />
              )}
            />
          ) : (
            <View style={styles.dices}>
              <AnimatedDiceIcon diceCount={6} />
            </View>
          )}
          <PokemonCard
            data={myPokemonData}
            health={myHealth}
            maxHealth={maxHealth}
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            title="Attack"
            onPress={handlePressAttack}
            disabled={!isMyTurn}
          />
        </View>
      </ScrollView>

      <WinnerInfo
        enemyHealth={enemyHealth}
        userHealth={myHealth}
        show={showWinnerModal}
        handleUseMyPokemon={handleUseMyPokemon}
        handleGetNewEnemyPokemon={handleGetNewEnemyPokemon}
      />
    </>
  );
}
