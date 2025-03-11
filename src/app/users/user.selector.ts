import { Token } from './../../../node_modules/yaml/dist/parse/cst.d';
import { createSelector } from '@ngrx/store';
import { LoginAction } from './user.action';
import { AppState } from '../app.state';
import { UserState } from './user.reducer';
const selectLogin = (state: AppState) => state.user;

export const selectLoginUser = createSelector(
  selectLogin,
  (state: UserState) => state?.user
);
export const selectAuthToken = createSelector(
  selectLogin,
  (state: UserState) => state?.token
);

export const selectIsAuthenticated = createSelector(
  selectLogin,
  (state: UserState) => !!state.user && !!state.token
);
