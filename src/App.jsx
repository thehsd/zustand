import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 30000,
        gcTime: 15000,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
