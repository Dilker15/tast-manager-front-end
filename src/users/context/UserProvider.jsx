import { UserContext } from "./UserContext";


const user = {
    nombre:"Dilker",
    age:"23"
}

export function UserProvider({children}){

   return (<>
    <UserContext.Provider values={user}>

        {children}

    </UserContext.Provider>
   </>);
}