import { Routes,Route, Navigate } from "react-router-dom";
import {Landing} from './clients/pages/Landing'
import {CreateAccount} from './clients/pages/CreateAccount'
import {Login} from './clients/pages/Login';
import {UserRoutes} from './users/routes/UserRoutes';
import { PrivateRoute } from "./users/components/PrivateRoutes";
import { NavBarPageLanding } from "./clients/components/NavPageLanding";


export function App(){
    return (<>
        <NavBarPageLanding/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/create" element={<CreateAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user/*" element={
                                    <PrivateRoute>
                                        <UserRoutes/>
                                    </PrivateRoute>
            }/>
            <Route path="/*" element={<Navigate to="/"/>}/>
           
        </Routes>
    </>);
}