import { CALL_API } from 'src/middleware/apiMiddleware';
import { MOCK_CALL_API } from 'src/middleware/mockApiMiddleware';
import { LoadingPageType } from 'src/state/common/actions';

export const GET_DEMO_DATA_SUCCESS = 'demo/GET_DEMO_DATA_SUCCESS';
export const GET_DEMO_DATA_FAILURE = 'demo/GET_DEMO_DATA_FAILURE';

export const GET_MOCK_DATA_SUCCESS = 'demo/GET_MOCK_DATA_SUCCESS';
export const GET_MOCK_DATA_FAILURE = 'demo/GET_MOCK_DATA_FAILURE';

export const getDemoData = (): APIAction => ({
  type: CALL_API,
  endpoint: '/posts',
  method: 'get',
  authenticated: false,
  actions: {
    success: GET_DEMO_DATA_SUCCESS,
    error: GET_DEMO_DATA_FAILURE,
  },
  loadingPageType: LoadingPageType.DEMO,
});

export const getMockData = (): MockAPIAction => ({
  type: MOCK_CALL_API,
  actions: {
    success: GET_MOCK_DATA_SUCCESS,
    error: GET_MOCK_DATA_FAILURE,
  },
  loadingPageType: LoadingPageType.DEMO,
  mockData: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem ',
    },
  ],
});
