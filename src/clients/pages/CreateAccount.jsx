import {useRef, useState } from "react";
import '../styles/createAccount.css'
import { MdBorderColor } from "react-icons/md";




export function CreateAccount(){
    const buttonRef = useRef(null);
    const [confirm,setConfirm] = useState('');
    const [data,setData] = useState({
        email:'',
        password:'',
        born_date:null,
    });

    const onUpdateData =({target})=>{
       const {value,name} =target;
        setData({...data,[name]:value});
            
    }

  
      const verifyPassword = ({ target }) => {
        const { value } = target; 
        const passwordValue = data.password; 
        setConfirm(value);
        if (buttonRef.current) {
          if (passwordValue === value) {
            buttonRef.current.style.borderColor = "green"; 
          } else {
            buttonRef.current.style.borderColor = "red"; 
          }
        }
      };

      const sendData = (event)=>{
        event.preventDefault();
        if(confirm === data.password){
            console.log("sending data");
        }else{
            console.log("verify your password,something was Wrong");
        }
      }

  
    return (<>
       <div className="container-image-create">
            <div className="empty-form">
                <h1 className="text-create-form">Crea una cuenta y Organiza tus Tareas</h1>
            </div>
            <form className="form-register" onSubmit={sendData}>
                <div className="form-container-title">
                    <h5>Todo App</h5>
                </div>
                <div className="form-container-inputs">
                    <input type="email" placeholder="email" name="email" id="email" className="form form-control"  onChange={onUpdateData} required/>
                    <input type="password" name="password" id="password" placeholder="Password" className="form form-control" onChange={onUpdateData} required/>
                    <input type="password" ref={buttonRef} name="check_password" id="check_password" placeholder="Confirm password" className="form form-control" onChange={verifyPassword}  required/>
                    <label htmlFor="bord_date">Born Date</label>
                    <input type="date" name="born_date" id="born_date" className="form form-control" onChange={onUpdateData} placeholder="Born Data" required/>
                </div>
                <div className="container-button-signup">
                    <button type="submit" className="sign-up-button">
                        Sign-Up
                    </button>
                </div>
                
               
            </form>
       </div>
       
    </>);
}