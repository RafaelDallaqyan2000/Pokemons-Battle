import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row',
    gap: 15,
  },
  healthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  enemyContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,
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
  name: {
    fontSize: 18,
    color: theme.colors.text,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  health: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.danger,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});
