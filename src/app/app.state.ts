import { User } from './interfaces/user';
import { UserState } from './users/user.reducer';

export interface AppState {
  user: UserState;
}
