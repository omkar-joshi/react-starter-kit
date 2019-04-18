import { Dispatch, MiddlewareAPI } from 'redux';

import { LOADING_COMPLETED, SET_LOADING } from 'src/state/common/actions';

export const MOCK_CALL_API = 'MOCK_CALL_API';

export default (store: MiddlewareAPI) => (next: Dispatch<ReduxAction>) => (action: MockAPIAction & ReduxAction) => {
  if (action.type !== MOCK_CALL_API) {
    return next(action);
  }

  const { actions, mockData, loadingPageType } = action;
  const { success } = actions;

  if (loadingPageType) {
    store.dispatch({ type: SET_LOADING, payload: { page: loadingPageType } });
  }

  const apiResponse = () => {
    if (loadingPageType) {
      store.dispatch({
        type: LOADING_COMPLETED,
        payload: { page: loadingPageType },
      });
    }

    return next({
      type: success,
      payload: mockData,
    });
  };

  // Set a random timeout between 1 and 2 seconds.
  const randomTimeout = 500 + Math.floor(Math.random() * 1000);
  setTimeout(apiResponse, randomTimeout);
};
