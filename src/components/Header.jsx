import React from 'react';
import {Link} from 'react-router-dom';
import {FaAngellist, FaListAlt} from 'react-icons/fa';
import {RiAddCircleFill} from 'react-icons/ri';

const Header = () => {
    return (
        <div className="w-100 bg-gray-800 text-white p-3 flex justify-between items-center px-2">
            <Link to="/" className="flex space-x-1 items-center">
                <h2 className="font-bold">Hola Header</h2>
                <FaAngellist/>
            </Link>
            <nav className="font-semibold flex">
                <Link className="flex items-center space-x-1 transition-color duration-200  bg-red-700 hover:bg-red-800 hover:text-gray-400 p-2 rounded-l-md" to="/add">
                    <span>Form</span>
                    <RiAddCircleFill/>
                </Link>
                <Link className="flex items-center space-x-1 transition-color duration-200  bg-yellow-700 hover:bg-yellow-800 hover:text-gray-400 p-2 rounded-r-md" to="/">
                    <span>List</span>
                    <FaListAlt/>
                </Link>
            </nav>
        </div>
    )
};

export default Header;