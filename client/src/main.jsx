import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./assets/css/index.css";
import axios from "axios";
import customFetch from "./utils/customFetch.jsx";

/*
fetch("/api/v1/test")
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

/*
const response = await customFetch.get("/test");
console.log(response.data);
*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </StrictMode>
);
