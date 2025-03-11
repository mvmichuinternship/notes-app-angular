import { User, LoginType } from './../interfaces/user';
import { createAction, props } from '@ngrx/store';

export const LoginAction = createAction(
  '[User] Login User',
  props<LoginType>()
);
export const LoginSuccess = createAction(
  '[User] Login Success',
  props<{ user: User; token: string }>()
);
export const LoginError = createAction(
  '[User] Login Error',
  props<{ error: string }>()
);
export const LogoutAction = createAction(
  '[User] Logout User',
  props<{ id: string }>()
);
