import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./page/App";
import User from "./page/User";
import UserbyId from "./page/UserbyId";
import reportWebVitals from "./service/reportWebVitals";
import * as serviceWorkerRegistration from "./service/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserbyId />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
root.render(<Index />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
