import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainPage from "./MainPage.tsx";
import NoizePage from "./projects/NoizePage.tsx";
import ShovPage from "./projects/ShovPage.tsx";
import PsychoPage from "./projects/PsychoPage.tsx";
import TogetherPage from "./projects/TogetherPage.tsx";
import BasaPage from "./projects/BasaPage.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio", Component: App,
        children:[
            { path: "", Component: MainPage },
            { path: "project/shov", Component: ShovPage },
            { path: "project/psycho", Component: PsychoPage },
            { path: "project/together", Component: TogetherPage },
            { path: "project/baza", Component: BasaPage },
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
