import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/app/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* to make the data stored in store available to all the components */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
