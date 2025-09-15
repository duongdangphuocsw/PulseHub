export type Product = {
  id: string;
  name: string;
  price: number;
};

// This would be generated from the OpenAPI spec
export const apiClient = {
  getProducts: async (): Promise<Product[]> => {
    return Promise.resolve([
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 200 },
    ]);
  },
};
