import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { styles } from './animatedDIce-styles';

const diceImages: { [key: number]: any } = {
  1: require('../../assets/img/dice-1.jpg'),
  2: require('../../assets/img/dice-2.jpg'),
  3: require('../../assets/img/dice-3.jpg'),
  4: require('../../assets/img/dice-4.jpg'),
  5: require('../../assets/img/dice-5.jpg'),
  6: require('../../assets/img/dice-6.jpg'),
};

type DiceCountType = 1 | 2 | 3 | 4 | 5 | 6;

type DiceType = {
  diceCount: DiceCountType;
};

export function AnimatedDiceIcon({ diceCount }: DiceType) {
  const [currentDice, setCurrentDice] = useState<DiceCountType>(diceCount);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      const randomDice = (Math.floor(Math.random() * 6) + 1) as DiceCountType;
      setCurrentDice(randomDice);
      count++;
      if (count === 5) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentDice(diceCount);
        }, 100);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [diceCount]);

  return <Image source={diceImages[currentDice]} style={styles.diceImage} />;
}
