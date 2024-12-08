



export function UserReducer(initialValues,action){
        if(action.type == 'login'){
            return {
             
                isLogged:true,
                user:action.payload
                
            }
        }
        if(action.type == 'logout'){
            return {
              
                isLogged:false,
                
            }
        }
    return initialValues;
}