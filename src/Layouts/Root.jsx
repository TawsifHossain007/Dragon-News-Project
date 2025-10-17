import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatesNews from '../Components/LatesNews/LatesNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftUp from '../Pages/Home/LeftUp';
import RightAside from '../Pages/Home/RightAside';

const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-10'>
                    <LatesNews></LatesNews>
                </section>
                <nav className='w-11/12 mx-auto mt-10'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto mt-10 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftUp></LeftUp>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;