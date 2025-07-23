import React from 'react';
import { Image } from 'react-native';
import { styles } from './diceIcon-styles';

const diceImages: { [key: number]: any } = {
  1: require('../../assets/img/dice-1.jpg'),
  2: require('../../assets/img/dice-2.jpg'),
  3: require('../../assets/img/dice-3.jpg'),
  4: require('../../assets/img/dice-4.jpg'),
  5: require('../../assets/img/dice-5.jpg'),
  6: require('../../assets/img/dice-6.jpg'),
};

type DiceType = {
  diceCount: 1 | 2 | 3 | 4 | 5 | 6;
};

export function DiceIcon({ diceCount }: DiceType) {
  return <Image source={diceImages[diceCount]} style={styles.diceImage} />;
}
