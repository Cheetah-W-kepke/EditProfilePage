import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {EditProfilePage} from "./pages/EditProfilePage/EditProfilePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
