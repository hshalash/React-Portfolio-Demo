import "./App.css";
import Layout from "./Components/Layout/Layout.jsx";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
