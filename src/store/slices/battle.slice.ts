import { createSlice } from '@reduxjs/toolkit';
import { BattleDataType } from '../../types';

interface InitState {
  loading: boolean;
  error: any;
  battleHistory: BattleDataType[];
}

const initialState: InitState = {
  loading: false,
  error: '',
  battleHistory: [],
};

const slice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    setBattleHistory: (
      state,
      action: {
        payload: BattleDataType;
      },
    ) => {
      state.battleHistory = [...state.battleHistory, action.payload];
    },
    clearBattleHistory: state => {
      state.battleHistory = [];
    },
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;
