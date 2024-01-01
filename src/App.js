import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { privateRoutes } from "~/routes";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {privateRoutes.map((route, index) => {
            let Layout = AdminLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
