import { Search } from 'lucide-react'
import React from 'react'

const TopUniversities = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap py-10 px-4'>
                    {/* Text Section */}
                    <div className='flex flex-col w-full sm:w-1/2 justify-center'>
                        <div className=''>
                            <h1 className='text-3xl sm:text-5xl text-[#3D03FA] font-bold my-4 text-center sm:text-left'>
                                Discover top Universities Represented by Ample Education
                            </h1>
                            <p className='text-black/80 py-4 text-center sm:text-left'>
                                We work with the top ranked universities. 4th of the World’s top 6 universities and 19th out World’s Top 100 Universities are in the UK as per QS World Rankings. We provide researchers, educators and students excellent research opportunities. A handful of research centric universities forms an elite group called the Russell Group.
                            </p>
                        </div>
                        <div className='relative flex items-center'>
                            <input
                                type="text"
                                placeholder="Search Universities . . . "
                                className='rounded-full border border-black p-2 pl-10 w-92'
                            />
                            <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                <Search />
                            </span>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='w-full sm:w-1/2 flex justify-center items-center order-first sm:order-none'>
                        <div className='relative'>
                            <img
                                src="/Students-at-graduation-ceremony.png"
                                alt="Important Documents"
                                className='w-full'
                            /> 
                        </div>
                    </div>
                </div>

                <div className='my-10 py-10'>
                    {/* Document components */}
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-4 mx-2 flex flex-col sm:items-center sm:justify-center w-fit'>
                        <div className='relative'>
                            <img src="/uni_card.png" alt="" />
                            <h3 className='absolute bottom-4 left-4 text-white text-2xl font-semibold  bg-opacity-60 p-2 rounded-md'>
                                Name of University
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUniversities
