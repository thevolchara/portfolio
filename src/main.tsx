import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainPage from "./MainPage.tsx";
import NoizePage from "./NoizePage.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio", Component: App,
        children:[
            { path: "", Component: MainPage },
            { path: "project/shov", Component: MainPage },
            { path: "project/psycho", Component: MainPage },
            { path: "project/together", Component: MainPage },
            { path: "project/baza", Component: MainPage },
            { path: "about", Component: MainPage },
            { path: "contacts", Component: MainPage },
        ]
    },
    { path: "/portfolio/project/site", Component: NoizePage },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
