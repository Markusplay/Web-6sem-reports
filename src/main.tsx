import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lab1 from "./Lab1.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/lab1",
        element: <Lab1/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
