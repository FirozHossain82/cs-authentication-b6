import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import React from "react";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster  position="top-center"></Toaster>
    </div>
  );
}

export default App;
