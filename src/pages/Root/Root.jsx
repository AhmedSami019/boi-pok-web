import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';

const Root = () => {
    return (
        <div className='mx-10 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;