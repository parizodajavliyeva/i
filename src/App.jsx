import React from "react";
import Restaurant from "../src/components/Resaturant/Resaturant";
import RestaurantIchi from "../src/components/RestaurantIchi/RestaurantIchi";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Restaurant />,
  },
  {
    path: "//restaurant/:id",
    element: <RestaurantIchi />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
