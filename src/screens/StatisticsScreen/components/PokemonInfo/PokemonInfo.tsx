import { View, Text, Image } from 'react-native';
import React from 'react';
import { PokemonType } from '../../../../types';
import { styles } from './pokemonInfo-styles';

type PokemonInfoType = {
  data: PokemonType;
  health: number;
  isEnemy?: boolean;
};

export function PokemonInfo({ data, health, isEnemy }: PokemonInfoType) {
  return isEnemy ? (
    <View style={styles.enemyContainer}>
      <Image
        source={{ uri: data?.sprites?.front_default || data.imageUrl }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.health}>{health} XP</Text>
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
        <Text style={styles.health}>{health} XP</Text>
      </View>
    </View>
  );
}
