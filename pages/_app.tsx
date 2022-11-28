import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/SearchBar";

function MyApp() {
  const queryClient = new QueryClient();
  return (
    <div className="p-3">
      <QueryClientProvider client={queryClient}>
        <SearchBar />
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
