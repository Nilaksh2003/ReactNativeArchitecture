import {UserController} from '@/controllers';
import {networkService} from '@/networking';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: {user},
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: {error},
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

export const login =
  ({userName, password}) =>
  async (dispatch) => {
    try {
      dispatch(loginRequest());
      const {data} = await UserController.login({userName, password});
      dispatch(loginSuccess(data.user));
    } catch ({data}) {
      dispatch(loginError(data?.error ?? 'Invalid credentials'));
    }
  };
export const logout = () => async (dispatch) => {
  try {
    await UserController.logout();
  } finally {
    networkService.clearAccessToken();
    dispatch(clearStore());
  }
};
