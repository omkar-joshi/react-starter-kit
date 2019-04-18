declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: string;
}

declare interface ReduxAction<Payload = {}, Response = {}> {
  type: string;
  payload?: Payload;
  response?: Response;
  error?: Error;
}

declare interface APIAction<Params = {}, Body = {}, Headers = {}> {
  type: 'CALL_API'
  endpoint: string;
  method: string;
  params?: Params;
  body?: Body;
  headers?: Headers;
  actions: {
    success: string;
    error: string;
  };
  authenticated: boolean;
  loadingPageType: string;
}

declare interface MockAPIAction<Data = {}> {
  type: 'MOCK_CALL_API';
  actions: {
    success: string;
    error: string;
  };
  mockData: Data;
  loadingPageType: string;
};

declare interface Dispatch<A = {}> {
  <T extends A>(action: T): T
}
