import React from 'react';
import { BiTime } from 'react-icons/bi';
import { FaToolbox } from 'react-icons/fa';
import { BsGrid1X2Fill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { IoIosClose, IoIosArrowUp } from 'react-icons/io';

const Sidebar = ({ openSidebarToggle, openSidebar }) => {
    const [isInventoryOpen, setIsInventoryOpen] = React.useState(true);

    const toggleInventory = () => {
        setIsInventoryOpen(!isInventoryOpen);
    }

    return (
        <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive p-4" : ""}
        >
            <div className="sidebar-title">
                <div className="sidebar-brand flex items-center space-x-2 text-slate-300 ">
                    <BiTime size={26} className="icon_head mr-2" /> 2:15
                </div>
                <span className="icon close_icon" onClick={openSidebar}>
          <IoIosClose size={32} className="text-slate-100 ml-4" />
        </span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item ">
          <span className="flex items-center space-x-2">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </span>
                </li>
                <li className="sidebar-list-item">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={toggleInventory}
                    >
                        <div className="flex items-center">
                            <BsFillGrid3X3GapFill className="icon" /> Inventory
                        </div>

                        {/* Icon for the parent item in the nested list */}
                        {isInventoryOpen ? (
                            <IoIosArrowUp className="icon ml-2" />
                        ) : (
                            <IoIosArrowUp className="icon ml-2 rotate-90" />
                        )}
                    </div>
                        {isInventoryOpen && (
                            <ul className="nested-list ml-8 space-y-3 mt-2">
                                <li className="">
                                    <a href="/warehouse" className="flex items-center">
                                        <FaToolbox size={24} color="white" className="icon mr-2" />
                                        Warehouse
                                    </a>
                                </li>
                            </ul>
                        )}
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;