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
  CALL_API: {
    endpoint: string,
    method: string,
    params: Params,
    body?: Body,
    headers?: Headers,
    actions: {
      success: string,
      error: string,
    },
    authenticated: boolean,
    loadingPageType: string,
  };
}
