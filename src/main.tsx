import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainPage from "./MainPage.tsx";
import ShovPage from "./projects/ShovPage.tsx";
import PsychoPage from "./projects/PsychoPage.tsx";
import TogetherPage from "./projects/TogetherPage.tsx";
import BasaPage from "./projects/BasaPage.tsx";
import About from "./About.tsx";
import Contacts from "./Contacts.tsx";
import BlackApp from "./BlackApp.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio", Component: App,
        children:[
            { path: "", Component: MainPage },
            { path: "project/shov", Component: ShovPage },
            { path: "project/psycho", Component: PsychoPage },
            { path: "project/together", Component: TogetherPage },
            { path: "project/baza", Component: BasaPage },
            { path: "about", Component: About },
            { path: "contacts", Component: Contacts },
        ]
    },
    { path: "/portfolio/project/site", Component: BlackApp },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
