import { Route, Routes } from "react-router-dom"
import Cashier from "../pages/cashier"
import CashHistory from "../pages/cashHistory";
import { MenuRegistration } from "../pages/menuRegistration";
import { GenerateOrder } from "../pages/generateOrder";
import { StockManagement } from "../pages/StockManagement";

const RouteApp = () => {
    return(
        <Routes>
            <Route element={<Cashier/>} path="/cashier" ></Route>
            <Route element={<CashHistory/>} path="/cash-history"></Route>
            <Route element={<MenuRegistration/>} path="/menu-registration">
            
            </Route>
            <Route element={<GenerateOrder/>} path="/generate-order"></Route>
            <Route element={<StockManagement/>} path="/stock-management"></Route>
        </Routes>
    )
    
}

export default RouteApp;