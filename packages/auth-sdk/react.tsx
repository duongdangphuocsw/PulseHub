import * as React from 'react';
import { createAuthClient } from './index';

const authClient = createAuthClient({});

export const useAuth = () => {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    setUser(authClient.getUser());
  }, []);

  return { user, token: authClient.getAccessToken() };
};

export const withAuthGuard = (Component: React.ComponentType) => {
  return (props: any) => {
    const { user } = useAuth();
    if (!user) {
      return React.createElement('div', null, 'Unauthorized');
    }
    return React.createElement(Component, props);
  };
};
