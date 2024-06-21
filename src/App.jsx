
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: ,

    children: [
      {
        path: '/',
        // element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
