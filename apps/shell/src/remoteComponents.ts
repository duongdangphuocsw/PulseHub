import React from 'react';

// Create a wrapper component for lazy loading with error handling
const createLazyComponent = (
  importFn: () => Promise<{ default: React.ComponentType<any> }>
) => {
  return React.lazy(() =>
    importFn().catch(() => {
      // Return a fallback component if the module fails to load
      return {
        default: () =>
          React.createElement('div', null, 'Failed to load remote module'),
      };
    })
  );
};

// Export the remote components
export const Catalog = createLazyComponent(() => import('catalog/App'));
export const Checkout = createLazyComponent(() => import('checkout/App'));
export const Account = createLazyComponent(() => import('account/App'));
export const Admin = createLazyComponent(() => import('admin/App'));
