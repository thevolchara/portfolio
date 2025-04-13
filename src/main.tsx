import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: "/portfolio", Component: App,
        children:[
            { path: "", Component: App },
            { path: "project/shov", Component: App },
            { path: "project/site", Component: App },
            { path: "project/psycho", Component: App },
            { path: "project/together", Component: App },
            { path: "project/baza", Component: App },
            { path: "about", Component: App },
            { path: "contacts", Component: App },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
