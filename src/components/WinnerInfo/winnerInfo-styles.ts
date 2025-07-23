import { StyleSheet } from 'react-native';
import { screenHeight, screenWidth } from '../..';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgContainer: {
    backgroundColor: `${theme.colors.backgroundSecondary}90`,
    height: screenHeight,
    width: screenWidth,
    position: 'absolute',
    zIndex: 0,
  },
  contentContainer: {
    backgroundColor: theme.colors.card,
    width: screenWidth - 30,
    borderRadius: theme.borderRadius.md,
    zIndex: 1,
    boxShadow: `0 5px 25px ${theme.colors.textSecondary}`,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 30,
  },
  loseStyle: {
    color: theme.colors.danger,
  },
  winnerStyle: {
    color: theme.colors.success,
  },
  footer: {
    gap: 10,
    padding: 10,
  },
});
