import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { maskUserName } from './user.actions';

export interface State extends AppState.State {
  user: UserState;
}

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: true
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
)

export const userReducer = createReducer<UserState>(
  initialState,
  on(maskUserName, (state): UserState =>
  {
    return {
      ... state,
      maskUserName: !state.maskUserName
    }
  })
)