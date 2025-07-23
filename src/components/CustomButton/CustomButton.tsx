import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './customButton-styles';

type CustomButtonType = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function CustomButton({
  title,
  onPress,
  disabled,
  ...props
}: CustomButtonType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.container, disabled && styles.disabled]}
      disabled={disabled}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
