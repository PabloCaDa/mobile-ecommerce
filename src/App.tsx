import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { LayoutSwitcher } from "@/layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider, SearchProvider } from "@/contexts";
import { Navbar } from "./components/organisms";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <CartProvider>
            <Navbar />
            <LayoutSwitcher>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </LayoutSwitcher>
          </CartProvider>
        </SearchProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
