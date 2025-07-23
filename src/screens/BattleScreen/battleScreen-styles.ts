import { StyleSheet } from 'react-native';
import { theme } from '../../styles';
import { screenHeight, screenWidth } from '../..';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: screenHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
  },

  vsText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    color: theme.colors.danger,
  },
  body: {
    width: screenWidth,
    padding: 20,
  },
  footer: {
    width: screenWidth,
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 15,
  },
  dices: {
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
