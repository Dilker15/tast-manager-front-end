import {Routes,Route, Navigate} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { UpdateTask } from '../pages/UpdateTask';
import { UpdateInformation } from '../pages/UpdateInformation';
import { CreateTask } from '../pages/CreateTask';


export function UserRoutes(){
    return (<>
        <Routes>
            <Route path='/user/dashboard' element={<Dashboard/>}/>
            <Route paht="/user/updateTask" element={<UpdateTask/>}/>
            <Route path="/user/updateInformation" element={<UpdateInformation/>}/>
            <Route path="/user/createTask" element={<CreateTask/>}/>
        </Routes>
    </>);
}