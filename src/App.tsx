import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { LayoutSwitcher } from "@/layouts";

function App() {
  return (
    <Router>
      <LayoutSwitcher>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </LayoutSwitcher>
    </Router>
  );
}

export default App;
