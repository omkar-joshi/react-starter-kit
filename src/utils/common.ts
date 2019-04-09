export const getAuthToken = () => localStorage.getItem('AUTH_TOKEN');
export const setAuthToken = (token: string) => localStorage.setItem('AUTH_TOKEN', token);
