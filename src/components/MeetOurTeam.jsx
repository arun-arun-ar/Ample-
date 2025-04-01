import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const MeetOurTeam = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="w-full md:w-[30%]">
                        <img
                            src="team.jpg"
                            alt="Hari Bahadur"
                            className="h-96 w-full md:w-96 rounded-md hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-[65%]">
                        <h1 className="font-semibold text-xl py-3">Mr. Hari Bahadur</h1>
                        <p className="text-[#0A3971] py-2">Director-United Kingdom</p>
                        <p className="py-3">
                            Mr. Karki executes the position of Director who manages the overall operations of the business.
                            <br />
                            He holds a Master’s in Business and Marketing degree from Australian & UK Universities. Mr.
                            Karki is also a certified agent for British Council.
                        </p>
                        <div className="py-3">
                            <p className="text-md">
                                Contact No: <span className="font-semibold text-[#0A3971]">+447447627889</span>
                            </p>
                            <p className="text-md">
                                Email: <span className="font-semibold text-[#0A3971]">hari@ampleeducation.co.uk</span>
                            </p>
                        </div>
                        <div className="flex gap-3 py-3">
                            <a href="#" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
                                <Facebook />
                            </a>
                            <a href="#" className="hover:text-blue-400 hover:scale-110 transition-transform duration-300">
                                <Twitter />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-600 hover:scale-110 transition-transform duration-300">
                                <Instagram />
                            </a>
                            <a href="#" className="hover:text-blue-800 hover:scale-110 transition-transform duration-300">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='my-10'>
                    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md w-60 h-60'>
                        <img 
                            src="team.jpg" 
                            alt="team member" 
                            className='rounded-full h-32 w-32 my-2 hover:scale-105 transition-transform duration-300' 
                        />
                        <h1 className='text-center font-semibold py-2'>Ritika Shrestha</h1>
                        <p className='text-center text-[#0A3971] py-2 mb-2'>Director Nepal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetOurTeam
