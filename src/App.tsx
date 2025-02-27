import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { LayoutSwitcher } from "@/layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <LayoutSwitcher>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </LayoutSwitcher>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
