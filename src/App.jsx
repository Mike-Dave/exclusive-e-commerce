import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home";


const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />
}
