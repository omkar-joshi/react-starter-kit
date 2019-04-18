import { GET_DEMO_DATA_FAILURE, GET_DEMO_DATA_SUCCESS, GET_MOCK_DATA_FAILURE, GET_MOCK_DATA_SUCCESS } from './actions';

const initialState: DemoStore = {
  data: [],
  mockData: [],
  error: null,
};

type DemoPayload = DemoData[] & Error;

export default (state = initialState, action: ReduxAction<DemoPayload>): DemoStore => {
  const { type, payload, error } = action;
  if (!payload) {
    return state;
  }

  switch (type) {
    case GET_DEMO_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
      };

    case GET_DEMO_DATA_FAILURE:
      return { ...state, data: [], error };

    case GET_MOCK_DATA_SUCCESS:
      return {
        ...state,
        mockData: payload,
        error: null,
      };

    case GET_MOCK_DATA_FAILURE:
      return { ...state, mockData: [], error };

    default:
      return state;
  }
};
