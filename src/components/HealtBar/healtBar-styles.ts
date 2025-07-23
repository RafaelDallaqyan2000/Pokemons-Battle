import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '80%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
  },
  healthBar: {
    height: '100%',
    backgroundColor: theme.colors.danger,
  },
  text: {
    position: 'absolute',
    top: 0,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
