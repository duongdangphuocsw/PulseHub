import React from 'react';

// Create a wrapper component for lazy loading with error handling
const createLazyComponent = (
  importFn: () => Promise<{ default: React.ComponentType<unknown> }>
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
export const HabitTracking = createLazyComponent(
  () => import('habitTracking/App')
);
export const QuoteGeneration = createLazyComponent(() => import('quoteGeneration/App'));
export const DecisionJournal = createLazyComponent(() => import('decisionJournal/App'));
export const Admin = createLazyComponent(() => import('admin/App'));
