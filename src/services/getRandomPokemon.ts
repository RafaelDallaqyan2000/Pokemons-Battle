import axios from 'axios';
import { getRandomId } from '../helpers';
import { API_DOMAIN } from '../index';
import { PokemonType } from '../types';

interface GetPokemonOptions {
  id?: number;
}

export const getRandomPokemon = async (
  options?: GetPokemonOptions,
): Promise<PokemonType> => {
  try {
    const id = options?.id ?? getRandomId();
    const response = await axios.get(`${API_DOMAIN}/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении противника:', error);
    throw new Error('Не удалось загрузить противника');
  }
};
