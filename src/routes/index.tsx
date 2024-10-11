import { Route, Routes } from "react-router-dom"
import Cashier from "../pages/cashier"
import CashHistory from "../pages/cashHistory";

const RouteApp = () => {
    return(
        <Routes>
            <Route element={<Cashier/>} path="/cashier" ></Route>
            <Route element={<CashHistory/>} path="/cash-history"></Route>
        </Routes>
    )
    
}

export default RouteApp;