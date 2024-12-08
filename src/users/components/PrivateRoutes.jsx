import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";





export function PrivateRoute({children}){
    const {userData} = useContext(UserContext);
    // aqui hay que validar los datos del local storage con el token , para ver si no se modifico el localstorage, si se modifico
    // y el token no es valido se debe volver al /login , caso contrario se debe mostrar los hijos.
    return userData.isLogged?children:<Navigate to={"/login"}/>
    
}