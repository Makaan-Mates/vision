import { RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import { useAuth0 } from '@auth0/auth0-react'

const Body = () => {

  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div> 
  }

  const routes: RouteObject[] = [
    { path: '/', element: isAuthenticated ? <Home /> : <Landing />},
  ];

  const router = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={router}  />
    </div>
  );
};

export default Body;