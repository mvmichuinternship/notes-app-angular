import { createReducer, on } from '@ngrx/store';
import { LoginType, User } from '../interfaces/user';
import {
  LoginAction,
  LoginError,
  LoginSuccess,
  LogoutAction,
} from './user.action';

export interface UserState {
  user: User | null;
  token: string | null | undefined;
  loading: boolean;
  error: string | null;
}
export const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginAction, (state, { username, password, token }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginSuccess, (state, { user, token }) => ({
    ...state,
    user: user,
    token: token,
    loading: false,
    error: null,
  })),
  on(LoginError, (state, { error }) => ({
    ...state,
    loading: false,
    user: null,
    token: null,
    error: error,
  })),
  on(LogoutAction, () => initialState)
);
