import React from 'react'
import { FaArrowLeft, FaComments, FaShareSquare, FaSquare } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { IoMdContact } from 'react-icons/io'

const MainBody = () => {
    return (
        <div className='my-10 bg-[#15132B] rounded-lg px-10 py-10 mx-8 text-white lg:justify-between lg:flex lg:flex-row flex-col'>
            <div className='lg:flex flex-col lg:flex-row'>
                <div className='mx-4 mt-2 hidden lg:flex'>
                    <FaArrowLeft />
                </div>

                <div>
                    <h3 className='text-2xl font-bold'>School November Tasks</h3>
                    <p className='text-sm mt-2'>Created By Instructor Day on November 31, 2022</p>

                    <div className='sm:flex mt-4'>
                        <div className='lg:flex relative hidden mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="absolute">
                                <circle cx="22" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="absolute" style={{ left: '15px' }}>
                                <circle cx="22" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="absolute" style={{ left: '30px' }}>
                                <circle cx="22" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="absolute" style={{ left: '45px' }}>
                                <circle cx="22" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="absolute" style={{ left: '60px', zIndex: '1' }}>
                                <circle cx="22" cy="22" r="21" fill="#E328AF" stroke="#15132B" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className='flex lg:ml-32 ml-0 mr-4 items-center hover:bg-[#0D0B21] justify-center bg-[#6418C3] px-2 py-1 rounded-2xl lg:mb-0 mt-4 h-[40px]'>
                            <IoMdContact size={32} />
                            <h4 className='ml-2 select-none'>Invite People</h4>
                        </div>


                        <h4 className='border flex items-center justify-center hover:bg-[#0D0B21] select-none px-2 py-1 rounded-xl mr-4 lg:max-w-full lg:mb-0 mt-4 h-[40px] '>Private</h4>
                        <h4 className='flex items-center px-4 py-1 justify-center hover:bg-[#0D0B21] select-none rounded-xl mr-4 bg-[#7879F1] text-white lg:mb-0 lg:max-w-full  mt-4 h-[40px] '>Edit</h4>

                        <div className='flex ml-0 mr-4 items-center justify-center hover:bg-[#0D0B21] select-none border-2 lg:mb-0 mb-4 px-2 py-1 rounded-2xl mt-4 h-[40px]'>
                            <FaComments />
                            <h4 className='ml-2'>Comments</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-col flex justify-between lg:items-end mt-10 lg:mt-0'>
                <div className='flex justify-between pr-4'>
                    <div className='mx-3'>
                        <h3 className='font-bold'>Centered Martial Arts</h3>
                        <p className='text-[#A5A5A5]'>SunnyVala, Ca</p>
                    </div>

                    <div className='mx-1 '>
                        <FaSquare size={50} />
                    </div>

                    <div className='mx-1 items-center hidden lg:flex'>
                        <FiMoreVertical />
                    </div>
                </div>

                <div className='flex items-center m-4'>
                    <h4 className='mx-4 hidden lg:flex select-none'>Total Progress 60%</h4>
                    <div className='w-[258px] h-[14px] bg-[#1E1C3A] rounded-lg'>
                        <div
                            style={{ width: '60%', backgroundColor: '#6418C3' }}
                            className='h-full rounded-lg'
                        ></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainBody