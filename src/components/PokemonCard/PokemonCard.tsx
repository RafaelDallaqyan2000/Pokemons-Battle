import React from 'react';
import { Image, Text, View } from 'react-native';
import { PokemonType } from '../../types';
import { HealthBar } from '../HealtBar';
import { styles } from './pokemonCard-styles';

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
          <Text style={styles.health}>
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
          <Text style={styles.health}>
            {health} / {maxHealth} XP
          </Text>
        </View>
      </View>
    </View>
  );
}
