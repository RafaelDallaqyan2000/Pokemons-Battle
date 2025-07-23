import { DiceType } from '../types';

const rollDice = (): DiceType =>
  (Math.floor(Math.random() * 6) + 1) as DiceType;

function rollWithBonuses(): number[] {
  const rolls: number[] = [];
  let roll = rollDice();
  rolls.push(roll);

  while (roll === 6) {
    roll = rollDice();
    rolls.push(roll);
  }

  return rolls;
}

export function rollDiceForBattleWithBonus() {
  const playerRolls = rollWithBonuses();
  const enemyRolls = rollWithBonuses();

  return {
    playerRolls,
    enemyRolls,
  };
}
