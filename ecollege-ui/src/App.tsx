import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "./shared/layout/header/header";
import Footer from "./shared/layout/footer/footer";
import ErrorBoundary from "./shared/error/error-boundary";
import Login from "./modules/login/login";
import { login } from "./shared/reducers/authentication";

export const App = () => {
  const paddingTop = "0px";
  const currentLocale = "";
  const isAuthenticated = false;
  const isAdmin = false;
  const ribbonEnv = "";
  const isInProduction = false;
  const isOpenAPIEnabled = false;

  if (!isAuthenticated) {
    return (
      <div className="app-container" style={{ paddingTop }}>
        <Login />
      </div>
    );
  } else {
    return (
      <div className="app-container" style={{ paddingTop }}>
        <ToastContainer
          position={toast.POSITION.TOP_LEFT}
          className="toastify-container"
          toastClassName="toastify-toast"
        />
        <ErrorBoundary>
          <Header
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
            currentLocale={currentLocale}
            ribbonEnv={ribbonEnv}
            isInProduction={isInProduction}
            isOpenAPIEnabled={isOpenAPIEnabled}
          />
        </ErrorBoundary>
        <div className="container-fluid view-container" id="app-view-container">
          This is the content page
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
