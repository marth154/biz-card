import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page/404";
import ShareQRCOde from "./page/ShareQRCode";
import User from "./page/User";
import UserbyId from "./page/UserbyId";
import reportWebVitals from "./service/reportWebVitals";
import * as serviceWorkerRegistration from "./service/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Index() {
  const themePreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: themePreference ? "dark" : "light",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/:id" element={<UserbyId />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/share" element={<ShareQRCOde />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
root.render(<Index />);

serviceWorkerRegistration.register();

reportWebVitals();
