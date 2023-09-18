import { informationArray } from "@/data/data"
import { FaClock, FaDotCircle, FaPlus } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

const LastBody = () => {
    return (
        <div className="lg:flex lg:flex-row flex-col justify-center">
            {
                informationArray.map((element: any) => (
                    <div className={`mx-8 my-4 lg:w-1/5`} key={element.mainHeading}>
                        <div className="flex justify-between items-center text-white">
                            <h4 className="font-bold">{element.mainHeading}</h4>
                            <FaPlus />
                        </div>

                        {element.bottomThings.map((element: any) => (
                            <div className={`w-full h-[229px] bg-[#211A75] my-10 rounded-lg px-4 hover:bg-[#15132b] ${getHeadingColor(element.heading)}`} key={element.heading}>
                                <div className="flex justify-between items-center py-6">
                                    <div className="flex items-center space-x-2">
                                        <FaDotCircle />
                                        <h4 className="font-bold">{element.heading}</h4>
                                    </div>
                                    <FiMenu />
                                </div>

                                <div className="text-white">
                                    {element.information}
                                </div>

                                <div className='w-full h-[6px] bg-[#1E1C3A] rounded-lg mb-6 mt-4'>
                                    <div className={`h-full rounded-lg w-[60%] ${getBgColor(element.heading)}`}></div>
                                </div>

                                <div className='flex relative'>
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

                                <div className="flex justify-end font-semibold text-sm mt-2 text-[#A5A5A5]"> <FaClock size={24} /> <h4 className="ml-2">Due in {element.due} Days</h4></div>
                            </div>

                        ))}

                        {element.bottomThings.length === 0 &&
                            <div className="my-10 text-white text-center rounded-lg h-[107px] flex items-center justify-center border-[20px] font-bold border-[#211A75]">
                                Move Card here
                            </div>}


                    </div>

                ))
            }
        </div>
    )
}

const getHeadingColor = (mainHeading: string) => {
    switch (mainHeading) {
        case 'Important':
            return 'text-yellow-500';
        case 'Bugs Fixing':
            return 'text-red-500';
        case 'Database':
            return 'text-green-500';
        case 'Instructor Meeting':
            return 'text-purple-500'
        default:
            return 'text-blue-500';
    }
};
const getBgColor = (mainHeading: string) => {
    switch (mainHeading) {
        case 'Important':
            return 'bg-yellow-500';
        case 'Bugs Fixing':
            return 'bg-red-500';
        case 'Database':
            return 'bg-green-500';
        case 'Instructor Meeting':
            return 'bg-purple-500'
        default:
            return 'bg-blue-500';
    }
};

export default LastBody