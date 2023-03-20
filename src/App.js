import Registration from "./pages/Registration";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Login from "./pages/Login";


const route= createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Registration/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </>
  )
)


function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
