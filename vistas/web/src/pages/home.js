import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const teatro = require('../assets/teatro1.jpg');
const facebook =require('../assets/facebook.png')
const Home = () => {
    return (
        <div>
            <Sidebar />,
        <Header />,
        <div className="ml-64">
                <hr />
                <main className="my-8">
                    <div className=" mx-auto w-full lg:flex">
                    <img className="h-700 mx:w-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={teatro} alt="Sunset in the mountains"/>
                        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                
                                <div className="text-black font-bold text-xl mb-2">Administrador del cine </div>
                                <p className="text-grey-darker text-base" text-align ="center">Derechos reservados Lord Byron</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;