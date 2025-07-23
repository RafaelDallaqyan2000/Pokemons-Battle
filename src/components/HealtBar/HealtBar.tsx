import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { theme } from '../../styles';
import { styles } from './healtBar-styles';

type HealthBarProps = {
  health: number;
  maxHealth: number;
  width?: number;
};

export const HealthBar: React.FC<HealthBarProps> = ({
  health,
  maxHealth = 100,
  width,
}) => {
  const healthAnim = useRef(new Animated.Value(health)).current;
  const lineColor = useMemo(() => {
    return health < maxHealth / 2 ? theme.colors.danger : theme.colors.success;
  }, [health]);

  useEffect(() => {
    Animated.timing(healthAnim, {
      toValue: health,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [health]);

  const widthInterpolate = healthAnim.interpolate({
    inputRange: [0, maxHealth],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container, { width: width ?? 50 }]}>
      <Animated.View
        style={[
          styles.healthBar,
          {
            width: widthInterpolate,
            backgroundColor: lineColor,
          },
        ]}
      />
    </View>
  );
};
