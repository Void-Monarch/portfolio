import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import TechStack from "./pages/techstack/TechStack";
import Contact from "./pages/contact/Contact";
import Error from "./components/Error";
import Project from "./pages/project/Project";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error /> ,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/techstack",
        element: <TechStack />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
