import { Route, Routes } from "react-router-dom"
import Cashier from "../pages/cashier"
import CashHistory from "../pages/cashHistory";
import { MenuRegistration } from "../pages/menuRegistration";

const RouteApp = () => {
    return(
        <Routes>
            <Route element={<Cashier/>} path="/cashier" ></Route>
            <Route element={<CashHistory/>} path="/cash-history"></Route>
            <Route element={<MenuRegistration/>} path="/menu-registration"></Route>
        </Routes>
    )
    
}

export default RouteApp;