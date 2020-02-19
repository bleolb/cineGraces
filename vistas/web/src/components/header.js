
import React from'react';
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
           <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"></div>
            <ul>
                <Link to="/">
                    <button className="bg-red-900 hover:bg-blue-1500 text-white font-bold py-2 px-4 ">
                      Salir
                    </button>
                </Link>
              
            </ul>   
            </div>         
        </nav>)

export default Header;