import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import CarUpdate from "./Pages/Home/CarUpdate/CarUpdate";
import Home from "./Pages/Home/Home";
import Inventories from "./Pages/Inventories/Inventories";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import ManageProduct from "./Pages/ManageProduct/ManageProduct";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventories></Inventories>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/carUpdate/:id"
          element={
            <PrivateRoute>
              <CarUpdate></CarUpdate>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manageProduct"
          element={
            <PrivateRoute>
              <ManageProduct></ManageProduct>
            </PrivateRoute>
          }
        ></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
