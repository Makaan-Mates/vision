import { RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";

const Body = () => {
  const routes: RouteObject[] = [
    { path: '/home', element: <Home /> },
    { path: '/', element: <Landing /> },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={router}  />
    </div>
  );
};

export default Body;