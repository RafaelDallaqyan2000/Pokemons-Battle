import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.colors.backgroundSecondary,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: theme.colors.card,
  },
  winContainer: {
    backgroundColor: theme.colors.success,
  },
  loseContainer: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.background,
    borderWidth: 0,
    borderColor: theme.colors.primary,
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  winText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.primary,
    letterSpacing: 3,
  },
  loseText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.danger,
    letterSpacing: 3,
  },
});
