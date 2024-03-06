import React from 'react';
import HeaderOne from '../Components/Header/HeaderOne';
import HeaderTwo from '../Components/Header/HeaderTwo';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <HeaderOne></HeaderOne>
            <HeaderTwo></HeaderTwo>
            <Outlet></Outlet>



        </div>
    );
};

export default Main;