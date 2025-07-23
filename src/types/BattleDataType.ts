import { PokemonType } from "./PokemonType"

export type BattleDataType = {
    myPokemon: PokemonType;
    enemyPokemon: PokemonType;
    winner: boolean;
    finishHealth: {
        my: number;
        enemy: number;
    }
}