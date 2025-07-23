import { useQuery } from '@tanstack/react-query';
import { getRandomPokemon } from '../services';

export const useRandomPokemon = (queryKey?: string) => {
  return useQuery({
    queryKey: ['pokemon', queryKey],
    queryFn: () => getRandomPokemon(),
    staleTime: 1000 * 60 * 5,
  });
};
