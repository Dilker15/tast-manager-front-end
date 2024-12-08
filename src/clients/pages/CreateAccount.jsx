import { useContext } from "react";
import { UserContext } from "../../users/context/UserContext";




export function CreateAccount(){
    const {userData,login,logout} = useContext(UserContext);
    const onLogin = ()=>{
        login();
    }

    const onLogout =()=>{
        logout();
    }
    return (<>
        <h1>Create Account Pages{JSON.stringify(userData)}</h1>
        <button onClick={onLogin}>
            Register
        </button>
        <button onClick={onLogout}>
            Exit
        </button>
    </>);
}