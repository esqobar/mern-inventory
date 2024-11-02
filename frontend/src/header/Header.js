import React from 'react';
import { BsJustify } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

const Header = ({ openSidebar }) => {
    return (
        <header className="header">
           <div className="" onClick={openSidebar}>
               <BsJustify size={24} />
           </div>
            <div className="headerr-left">
                <h3 className="text-lg sm:ml-3 md:text-2xl text-slate-100">Inventory System</h3>
            </div>
            <div className="flex items-center space-x-2">
                <p>user name</p>
                <button className="flex items-center space-x-1">
                    <BiLogOut size={24} />
                    <span className="">Logout</span>
                </button>
            </div>
        </header>
    );
};

export default Header;