import React from "react";
import 'bootstrap';
import './scss/styles.scss';
import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log(111111111111)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);