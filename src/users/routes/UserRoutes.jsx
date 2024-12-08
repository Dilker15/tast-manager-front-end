import {Routes,Route, Navigate} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { UpdateTask } from '../pages/UpdateTask';
import { UpdateInformation } from '../pages/UpdateInformation';
import { CreateTask } from '../pages/CreateTask';


export function UserRoutes(){
    return (<>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route paht="/updateTask" element={<UpdateTask/>}/>
            <Route path="/updateInformation" element={<UpdateInformation/>}/>
            <Route path="/createTask" element={<CreateTask/>}/>
        </Routes>
    </>);
}