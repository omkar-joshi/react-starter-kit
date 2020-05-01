import reducers from '../reducer';

test('reducers', () => {
  let state;
  state = reducers({ data: [], mockData: [], error: null }, { type: 'common/SET_LOADING' });
  expect(state).toEqual({ data: [], mockData: [], error: null });
});
