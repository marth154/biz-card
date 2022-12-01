import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page/404";
import User from "./page/User";
import UserbyId from "./page/UserbyId";
import reportWebVitals from "./service/reportWebVitals";
import * as serviceWorkerRegistration from "./service/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Index() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/:id" element={<UserbyId />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
root.render(<Index />);

serviceWorkerRegistration.register();

reportWebVitals();
