"use client"
import React, { useState } from 'react';
import { dashboard } from '@/data/data';
import { FaArrowRight, FaBars } from 'react-icons/fa';
import { SiSquare } from 'react-icons/si';

const SideNavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    // 
    return (
        <div
            className={`w-${isCollapsed ? '50' : '250'}px   bg-[#15132B] text-white fixed z-50 ${isCollapsed? "h-[10px]" : "h-screen"} mr-5`}
            style={{ width: isCollapsed ? '50px' : '250px' }}
        >
            <div className="my-6 flex justify-center items-center">
                <p className={`mx-12 ${isCollapsed ? 'hidden' : ''}`}>weframetech</p>
                <p className='text-[#7879F1] hover:cursor-pointer mt-1' onClick={toggleSidebar}>
                    <FaBars size={24} />
                </p>
            </div>

            {!isCollapsed && (
                <>
                    <h4 className='font-sans text-white font-semibold mx-5'>MAIN MENU</h4>

                    {dashboard.map((element) => (
                        <div
                            key={element.name}
                            className='mx-5 my-5 justify-between flex text-[#464366] hover:text-[#6418C3] select-none items-center'
                        >
                            <div className='flex items-center'>
                                {element.icon && <element.icon />}
                                <div className='ml-2'>{element.name}</div>
                            </div>

                            <div className='flex items-center'>
                                {element.name === 'Contact' && (
                                    <div>
                                        <h4 className='px-1 mx-2 text-white text-sm rounded-lg bg-[#E328AF]'>New</h4>
                                    </div>
                                )}

                                {element.name === 'Email' && (
                                    <div>
                                        <h4 className='px-1 mx-2 text-white text-sm rounded-2xl bg-blue-500'>17</h4>
                                    </div>
                                )}

                                {element.extension && (
                                    <div className=''>
                                        <FaArrowRight />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}

            <div className="my-10 flex justify-center items-center">
                <div className={`h-[170px] w-[200px] rounded-2xl bg-blue-400 flex flex-col mx-5 justify-around ${isCollapsed ? 'hidden' : ''}`}>
                    <div className='mx-5'>
                        <SiSquare />
                    </div>
                    <div className='mx-5 '>
                        <h4 className='mb-4 font-bold'>Increase your work with Kanban</h4>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavBar;
