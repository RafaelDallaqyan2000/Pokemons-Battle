import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.text,
    width: '100%',
    alignItems: 'center',
    padding: 15,
    borderRadius: theme.borderRadius.sm,
  },
  title: {
    color: theme.colors.background,
    fontSize: 16,
    letterSpacing: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
