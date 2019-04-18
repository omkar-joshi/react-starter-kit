import { LOADING_COMPLETED, SET_LOADING } from './actions';

const initialState: PageLoadingStore = {
  demoLoading: false,
};

type CommonPayload = { page: string };

export default (state = initialState, action: ReduxAction<CommonPayload>): PageLoadingStore => {
  const { type, payload } = action;
  if (!payload) {
    return state;
  }

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        [`${payload.page}Loading`]: true,
      };

    case LOADING_COMPLETED:
      return { ...state, [`${payload.page}Loading`]: false };

    default:
      return state;
  }
};
