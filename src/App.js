import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from "~/routes";

import AdminLayout from "./layout/AdminLayout/AdminLayout";
import DefaultLayout from "./layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* {privateRoutes.map((route, index) => {
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
          })} */}
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
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
