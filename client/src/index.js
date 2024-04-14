import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes.js";
import { UserProvider } from "./context/user.js";

// template provided //
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
);