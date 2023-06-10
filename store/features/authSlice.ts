import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
  username: string;
  isModerator: boolean;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isAuth: false,
    username: '',
    isModerator: false,
  } as AuthState,
} as InitialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          isModerator: false,
        },
      };
    },
    toggleModerator: state => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export default authSlice;
