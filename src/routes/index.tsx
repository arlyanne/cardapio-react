import { Route, Routes } from "react-router-dom"
import Cashier from "../pages/cashier"

const RouteApp = () => {
    return(
        <Routes>
            <Route element={<Cashier/>} path="/cashier" ></Route>
        </Routes>
    )
    
}

export default RouteApp;