import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
