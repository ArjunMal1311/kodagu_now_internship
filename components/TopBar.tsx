"use client"
import { iconsWithNotification } from '@/data/data'
import React, { useState } from 'react'
import { FaArrowDown, FaSquare } from 'react-icons/fa'
import { FiMenu, FiSearch } from "react-icons/fi"

const TopBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className='h-[80px] bg-[#15132B] w-full flex lg:flex-row pl-8 justify-around items-center p-0 m-0 text-white'>
            <div className="relative lg:w-[300px] w-1/2">
                <input
                    className="w-full bg-[#211A75] rounded-2xl flex h-[40px] items-center px-4 text-white pl-10"
                    placeholder="Search Here"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                </div>
            </div>

            <div className='text-[#6418C3] underline font-bold select-none hidden lg:flex'>
                OTHER MENUS
            </div>

            <div className="hidden lg:flex space-x-6 ">
                {iconsWithNotification.map((iconData, index) => (
                    <div key={index} className="relative">
                        {iconData.count ?
                            <div className="absolute select-none bottom-3 left-3 rounded-full bg-[#5ECFFF] text-black w-5 h-5 font-semibold flex items-center justify-center text-xs">
                                {iconData.count}
                            </div> :
                            <>
                                <div className="absolute select-none bottom-3 left-3 rounded-full bg-[#E328AF] text-black w-5 h-5 font-semibold flex items-center justify-center text-xs">
                                    !
                                </div> </>
                        }

                        <iconData.Icon className="text-2xl text-gray-600 hover:text-[#464366]" />
                    </div>
                ))}
            </div>

            <div className='lg:flex space-x-4 items-center bg-[#15132b] px-4 py-2 rounded-3xl hidden  hover:bg-[#0D0B21]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <g clipPath="url(#clip0_3072_13)">
                        <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#F0F0F0" />
                        <path d="M13.3913 14H28C28 12.7364 27.8316 11.5122 27.5177 10.3478H13.3913V14Z" fill="#D80027" />
                        <path d="M13.3913 6.69571H25.9452C25.0882 5.29724 23.9924 4.06114 22.7148 3.04352H13.3913V6.69571Z" fill="#D80027" />
                        <path d="M14 28.0001C17.2949 28.0001 20.3233 26.8613 22.7148 24.9567H5.28522C7.6767 26.8613 10.7051 28.0001 14 28.0001Z" fill="#D80027" />
                        <path d="M2.05484 21.3044H25.9452C26.6332 20.1817 27.1668 18.9545 27.5177 17.6522H0.4823C0.83323 18.9545 1.36682 20.1817 2.05484 21.3044Z" fill="#D80027" />
                        <path d="M6.48506 2.1863H7.76087L6.57415 3.04845L7.02745 4.44347L5.84079 3.58132L4.65412 4.44347L5.04569 3.23832C4.00083 4.10867 3.08503 5.12838 2.33034 6.26456H2.73913L1.98373 6.81335C1.86605 7.00968 1.75317 7.20912 1.645 7.41152L2.00572 8.52173L1.33273 8.03277C1.16545 8.3872 1.01243 8.74962 0.874891 9.11958L1.2723 10.3428H2.73913L1.55241 11.205L2.00572 12.6L0.819055 11.7379L0.108227 12.2543C0.0370781 12.8262 0 13.4088 0 14H14C14 6.26806 14 5.35653 14 0C11.2343 0 8.65621 0.802266 6.48506 2.1863ZM7.02745 12.6L5.84079 11.7379L4.65412 12.6L5.10743 11.205L3.92071 10.3428H5.38754L5.84079 8.94781L6.29404 10.3428H7.76087L6.57415 11.205L7.02745 12.6ZM6.57415 7.12671L7.02745 8.52173L5.84079 7.65959L4.65412 8.52173L5.10743 7.12671L3.92071 6.26456H5.38754L5.84079 4.86954L6.29404 6.26456H7.76087L6.57415 7.12671ZM12.0492 12.6L10.8625 11.7379L9.67586 12.6L10.1292 11.205L8.94244 10.3428H10.4093L10.8625 8.94781L11.3158 10.3428H12.7826L11.5959 11.205L12.0492 12.6ZM11.5959 7.12671L12.0492 8.52173L10.8625 7.65959L9.67586 8.52173L10.1292 7.12671L8.94244 6.26456H10.4093L10.8625 4.86954L11.3158 6.26456H12.7826L11.5959 7.12671ZM11.5959 3.04845L12.0492 4.44347L10.8625 3.58132L9.67586 4.44347L10.1292 3.04845L8.94244 2.1863H10.4093L10.8625 0.791273L11.3158 2.1863H12.7826L11.5959 3.04845Z" fill="#0052B4" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3072_13">
                            <rect width="28" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h3 className='font-bold select-none'>
                    ENGLISH
                </h3>

                <div className='hover:text-[#464366]  text-[#6418C3]'>
                    <FaArrowDown />
                </div>
            </div>

            <div className='lg:flex space-x-5 items-center hidden hover:bg-[#0D0B21] px-3 py-1 rounded-lg'>
                <div>
                    <FaSquare size={32} />
                </div>

                <div>
                    <h4 className='text-md font-bold'>Instructor Day</h4>
                    <p className='text-sm font-semibold text-[#7879F1]'>Super Admin</p>
                </div>

                <div className='hover:text-[#464366] text-[#6418C3]'>
                    <FaArrowDown />
                </div>
            </div>

            {
                showMenu && (
                    <div className='absolute rounded-xl w-[40vw] mx-10 shadow-md bg-[#211A75] overflow-hidden right-0 top-12 text-sm hover:cursor-pointer'>
                        <div>
                            <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer' >Menus</div>
                            <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer' >Icons</div>
                            <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer' >Language</div>
                            <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer' >Instructor</div>
                        </div>
                    </div>
                )
            }

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-[#6418C3] hover:text-[#464366]">
                    <FiMenu size={32} />
                </button>
            </div>
        </div >
    )
}

export default TopBar