export function getCurrentHealth(rolls: number[], initialCount: number) {
  if (initialCount - rolls.reduce((acc, num) => acc + num, 0) >= 0) {
    return initialCount - rolls.reduce((acc, num) => acc + num, 0);
  }

  return 0;
}
