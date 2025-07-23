import { DiceType } from '../types';

type DiceResult = {
  playerRolls: DiceType;
  enemyRolls: DiceType;
};

export const rollDiceForBattle = (): DiceResult => {
  const getRandomDice = () => (Math.floor(Math.random() * 6) + 1) as DiceType;

  const playerRolls = getRandomDice();
  const enemyRolls = getRandomDice();

  return {
    playerRolls,
    enemyRolls,
  };
};
