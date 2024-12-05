import { Routes,Route, Navigate } from "react-router-dom";
import {Landing} from './clients/pages/Landing'
import {CreateAccount} from './clients/pages/CreateAccount'
import {Login} from './clients/pages/Login';
import {UserRoutes} from './users/routes/UserRoutes';


export function App(){
    return (<>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/create" element={<CreateAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Navigate to={"/"}/>}/>
            <Route path="/user/*" element={<UserRoutes/>}/>
        </Routes>
    </>);
}