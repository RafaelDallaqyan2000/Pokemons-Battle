import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CustomButton } from '../CustomButton';
import { styles } from './winnerInfo-styles';

type WinnerInfoType = {
  show: boolean;
  userHealth: number;
  enemyHealth: number;
  handleUseMyPokemon: () => void;
  handleGetNewEnemyPokemon: () => void;
};

export function WinnerInfo({
  show,
  userHealth,
  enemyHealth,
  handleUseMyPokemon,
  handleGetNewEnemyPokemon,
}: WinnerInfoType) {
  const isUserWinn = userHealth > enemyHealth;

  const winner = isUserWinn ? 'You win!!!' : 'Game over';
  return (
    <Modal visible={show} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.bgContainer} />
        <View style={styles.contentContainer}>
          <Text
            style={[
              styles.title,
              isUserWinn ? styles.winnerStyle : styles.loseStyle,
            ]}
          >
            {winner}
          </Text>
          <View style={styles.footer}>
            <CustomButton
              title={isUserWinn ? 'Receive a new Pokémon' : 'Play again'}
              onPress={handleGetNewEnemyPokemon}
            />
            {isUserWinn ? (
              <CustomButton
                title="Continue with the same one"
                onPress={handleUseMyPokemon}
              />
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
}
