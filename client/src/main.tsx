import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contack from './pages/Contack.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contack />
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(

  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)