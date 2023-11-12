import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Main /> }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
