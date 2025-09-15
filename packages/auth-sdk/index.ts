export const createAuthClient = (config: any) => {
  console.log('Auth client created with config:', config);
  return {
    getAccessToken: () => 'mock-token',
    getUser: () => ({ name: 'John Doe' }),
  };
};
