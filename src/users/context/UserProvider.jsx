import { useReducer } from "react";
import { UserContext } from "./UserContext";
import {UserReducer} from './UserReducer';



const initialFunction =()=>{
   const user = JSON.parse(localStorage.getItem("user"));
   return {
        isLogged:user?true:false,
        user,
   }
}

export function UserProvider({children}){
    
    const [userData,dispatch] = useReducer(UserReducer,{},initialFunction); 

    const login = (email,password,born_date)=>{
        const user = {
            nombre:"Dilker",
            age:"25",
        }
        const action = {
            type:'login',
            payload:user,
        }
        dispatch(action);
        localStorage.setItem("user",JSON.stringify(user));
    }


    const logout = ()=>{
        const action = {
            type:'logout',
            
        }
        dispatch(action)
        localStorage.clear();


    }

    

   return (<>
    <UserContext.Provider value={{ login,logout,userData }}>

        {children}

    </UserContext.Provider>
   </>);
}