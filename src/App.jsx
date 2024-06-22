
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: ,

    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
