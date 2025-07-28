import {Route,Routes } from "react-router-dom";

import { ROUTES } from "./routes";
export const AppRoutes=()=>{
    return <Routes>
    
        {ROUTES.map((route,key)=>(
            <Route path={route.path} element={route.element}  key={key}/>
        ))}
       
    </Routes>

}