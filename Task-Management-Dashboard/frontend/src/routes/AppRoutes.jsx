import React from 'react';
import {Routes,Route} from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import Tasks from '../pages/Tasks';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>


        </Routes>
    );
}

export default AppRoutes;
