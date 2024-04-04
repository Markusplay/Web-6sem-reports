import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lab1 from "./Lab1.tsx";
import Lab2 from './Lab2.tsx';
import Lab3 from './Lab3.tsx';
import Lab4 from './Lab4.tsx';
import Lab5 from "./Lab5.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/lab1",
        element: <Lab1/>,
    },
    {
        path: "/lab2",
        element: <Lab2/>,
    },
    {
        path: "/lab3",
        element: <Lab3/>,
    },
    {
        path: "/lab4",
        element: <Lab4/>,
    },
    {
        path: "/lab5",
        element: <Lab5/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
