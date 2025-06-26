import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import AppLayout from "./components/AppLayout";
import { CountryDetails } from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
