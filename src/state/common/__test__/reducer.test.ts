import { SET_LOADING } from 'src/state/common/actions';
import reducers from '../reducer';

test('reducers', () => {
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
