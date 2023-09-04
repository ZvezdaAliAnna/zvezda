import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NotFoundPage from "./components/NotFound/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Catalog from "./pages/Catalog/Catalog";
import Partnership from "./pages/Partnership/Partnership";
import GlobalStyle from "./styles/globalStyles";

import "./lib/i18n"
import ContactForm from "./pages/ContactForm/ContactForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutUs /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'partnership', element: <Partnership /> },
            { path: 'contactus', element: <ContactForm /> },
        ]
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
