import React from "react";
import UserHome from '../components/UserHome';
import {Navigate} from 'react-router-dom';

const Home = () =>{
    
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    var component = <Navigate to ="/" />;
    if (user != undefined){
        component = <UserHome />;
    }
    return (
    <div>
        {component}
    </div>
    )
};

export default Home;