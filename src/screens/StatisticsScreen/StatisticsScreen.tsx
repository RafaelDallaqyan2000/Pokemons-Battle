import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../store';
import { BattleDataType, PokemonType } from '../../types';
import { styles } from './statisticsScreen-styles';
import { PokemonCard } from '../../components';
import { PokemonInfo } from './components';

export function StatisticsScreen() {
  const statistics = useAppSelector(state => state.battle.battleHistory);
  console.log(statistics);

  return (
    <ScrollView>
      {statistics.map((e: BattleDataType) => {
        const isWin = e.finishHealth.my > e.finishHealth.enemy;
        return (
          <View
            style={[
              styles.container,
              isWin ? styles.winContainer : styles.loseContainer,
            ]}
          >
            <PokemonInfo data={e.myPokemon} health={e.finishHealth.my} />
            <View>
              <Text style={styles.winText}>You</Text>
              <Text style={styles.winText}>{isWin ? 'WIN' : 'Lose'}</Text>
            </View>

            <PokemonInfo
              data={e.enemyPokemon}
              health={e.finishHealth.enemy}
              isEnemy
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
