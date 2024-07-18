import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: ,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
