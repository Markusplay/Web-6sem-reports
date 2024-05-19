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
import Lab6 from './Lab6.tsx';
import Lab7 from './Lab7.tsx';
import Lab8 from './Lab8.tsx';
import Lab9 from './Lab9.tsx';
import Lab10 from './Lab10.tsx';

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
    {
        path: "/lab6",
        element: <Lab6/>,
    },
    {
        path: "/lab7",
        element: <Lab7/>,
    },
    {
        path: "/lab8",
        element: <Lab8/>,
    },
    {
        path: "/lab9",
        element: <Lab9/>,
    },
    {
        path: "/lab9",
        element: <Lab9/>,
    },
    {
        path: "/lab10",
        element: <Lab10/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
