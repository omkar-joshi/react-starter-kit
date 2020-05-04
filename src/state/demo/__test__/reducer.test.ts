import { GET_DEMO_DATA_FAILURE, GET_DEMO_DATA_SUCCESS } from '../actions';
import reducers from '../reducer';

describe('Test for demo reducer', () => {
  it('Test for when action is GET_DEMO_DATA_SUCCESS', () => {
    const initialState: DemoStore = {
      data: [],
      mockData: [],
      error: null,
    };
    const mockPayLoadPage: DemoPayload = [
      {
        body: '',
        id: 2121,
        title: 'This is test title of payload',
        userId: 2121,
      },
    ];
    const actualState = reducers(initialState, { type: GET_DEMO_DATA_SUCCESS, payload: mockPayLoadPage });
    const expectedState = { ...initialState, data: mockPayLoadPage };
    expect(actualState).toEqual(expectedState);
  });

  it('Test for when action is GET_DEMO_DATA_FAILURE when payload is not passed', () => {
    const initialState: DemoStore = {
      data: [],
      mockData: [],
      error: null,
    };
    const actualState = reducers(initialState, { type: GET_DEMO_DATA_FAILURE });
    const expectedState = { ...initialState };
    expect(actualState).toEqual(expectedState);
  });

  it('Test for when action is GET_DEMO_DATA_FAILURE when payload is passed', () => {
    const initialState: DemoStore = {
      data: [],
      mockData: [],
      error: null,
    };
    const actualState = reducers(initialState, { type: GET_DEMO_DATA_FAILURE, payload: [] });
    const expectedState = { ...initialState };
    expect(actualState).toEqual(expectedState);
  });
});
