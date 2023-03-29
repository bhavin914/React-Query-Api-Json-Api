import { QueryClient } from "@tanstack/react-query";

export const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000 * 10,
      retry: 0,
    },
  },
});

export const invalidateQuery = (queryKey) => {
  queryclient.invalidateQueries({ queryKey });
};
