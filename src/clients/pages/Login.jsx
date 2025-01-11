import { useState} from "react";



export function Login(){

        const [data,setData] = useState({
            email:'',
            password:'',
        });
    
        const onUpdateData =({target})=>{
           const {value,name} =target;
            setData({...data,[name]:value});
                
        }
          const sendData = (event)=>{
            console.log("sending data");      
          }
    
    return (<>
         <form className="form-login" onSubmit={sendData}>
                <div className="form-container-title">
                    <h5>Welcome - Todo App</h5>
                </div>
                <div className="form-container-inputs">
                    <input type="email" placeholder="email" name="email" id="email" className="form form-control"  onChange={onUpdateData} required/>
                    <input type="password" name="password" id="password" placeholder="Password" className="form form-control" onChange={onUpdateData} required/>
                </div>
                <div className="container-button-signup">
                    <button type="submit" className="sign-up-button">
                     Login
                    </button>
                </div>
                
               
            </form>
    </>);
}