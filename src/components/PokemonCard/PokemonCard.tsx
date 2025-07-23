import { View, Text, Image } from 'react-native';
import React, { useMemo } from 'react';
import { PokemonType } from '../../types';
import { styles } from './pokemonCard-styles';
import { UserIcon } from '../../icons';
import { HealthBar } from '../HealtBar';

type PokemonCardType = {
  data: PokemonType | undefined;
  isEnemy?: boolean;
  health: number;
  maxHealth: number;
};

export function PokemonCard({
  data,
  isEnemy,
  health,
  maxHealth,
}: PokemonCardType) {
  if (!data) {
    return <Text style={styles.name}>No Data</Text>;
  }

  return isEnemy ? (
    <View style={styles.enemyContainer}>
      <Image
        source={{ uri: data?.sprites?.front_default || data.imageUrl }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.healthContainer}>
          <HealthBar maxHealth={maxHealth} health={health} />
          <Text style={styles.healt}>
            {health} / {maxHealth} XP
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.sprites?.front_default || data.imageUrl }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{data.name} (You)</Text>
        <View style={styles.healthContainer}>
          <HealthBar maxHealth={maxHealth} health={health} />
          <Text style={styles.healt}>
            {health} / {maxHealth} XP
          </Text>
        </View>
      </View>
    </View>
  );
}
