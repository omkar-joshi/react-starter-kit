import reducers from '../reducer';

test('reducers', () => {
  let state;
  state = reducers(
    { common: { demoLoading: false }, demo: { data: [], mockData: [], error: null } },
    { type: 'common/SET_LOADING', payload: { page: 'demo' } }
  );
  expect(state).toEqual({ common: { demoLoading: true }, demo: { data: [], mockData: [], error: null } });
});
