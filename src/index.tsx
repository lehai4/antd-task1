import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { permistor } from "./redux/store";
import "./index.css";
import "./sass/index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import ContextProvider from "./Context/ContextProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={permistor}>
          <ContextProvider>
            <App />
          </ContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
