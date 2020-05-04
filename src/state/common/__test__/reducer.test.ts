import { SET_LOADING } from 'src/state/common/actions';
import { GET_DEMO_DATA_SUCCESS } from 'src/state/demo/actions';
import { LOADING_COMPLETED } from '../actions';
import reducers from '../reducer';

describe('Test reducer', () => {
  it('Test for when action is SET_LOADING', () => {
    const initialState: PageLoadingStore = {
      demoLoading: false,
    };
    const mockPayLoadPage = {
      page: 'somePage',
    };
    const actualState = reducers(initialState, { type: SET_LOADING, payload: mockPayLoadPage });
    const expectedState = { ...initialState, demoLoading: false, [`${mockPayLoadPage.page}Loading`]: true };
    expect(actualState).toEqual(expectedState);
  });

  it('Test for when action is LOADING_COMPLETED', () => {
    const initialState: PageLoadingStore = {
      demoLoading: false,
    };
    const mockPayLoadPage = {
      page: 'somePage',
    };
    const actualState = reducers(initialState, { type: LOADING_COMPLETED, payload: mockPayLoadPage });
    const expectedState = { ...initialState, demoLoading: false, [`${mockPayLoadPage.page}Loading`]: false };
    expect(actualState).toEqual(expectedState);
  });
});
