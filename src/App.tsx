import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { LayoutSwitcher } from "@/layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "@/contexts";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <LayoutSwitcher>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </LayoutSwitcher>
        </SearchProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
