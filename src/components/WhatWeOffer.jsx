import { ChevronRight } from 'lucide-react'
import React from 'react'

const WhatWeOffer = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between gap-6 mx-4'>
                <div className='flex-1'>
                    <img src="/edu.svg" alt="" className='my-4' />
                    <h1 className='font-semibold text-2xl text-left'>Career Counseling & Course Selection</h1>
                    <p className='my-4 text-black/80 text-left'>Not sure which course or career path to choose? Our expert counselors assess your interests, skills, and future job market trends to guide you toward the best educational opportunities.</p>
                    <div className='flex items-center justify-center lg:items-center lg:justify-center md:justify-start w-36 py-1 border-black border-2 rounded-full'>
                        <a href="my-4" className=''>Learn More</a>
                        <ChevronRight className='h-5 w-5 ' />
                    </div>
                </div>
                
                <div className='flex-1'>
                    <img src="/Vector.svg" alt="" className='my-4' />
                    <h1 className='font-semibold text-2xl text-left'>Study Abroad Guidance through Professionals</h1>
                    <p className='my-4 text-black/80 text-left'>Dreaming of studying in the USA, UK, Canada, or Australia? We help you pick the best university, course, and country based on your goals, budget, and career prospects.</p>
                    <div className='flex items-center justify-center lg:items-center lg:justify-center  md:justify-start w-36 py-1 border-black border-2 rounded-full'>
                        <a href="my-4" className=''>Learn More</a>
                        <ChevronRight className='h-5 w-5 ' />
                    </div>
                </div>
                
                <div className='flex-1'>
                    <img src="/uni.svg" alt="" className='my-4' />
                    <h1 className='font-semibold text-2xl text-left'>University Application & Visa Assistance</h1>
                    <p className='my-4 text-black/80 text-left'>Applying to universities can be overwhelming. We streamline the process by handling paperwork, SOPs, scholarships, and visa applications.</p>
                    <div className='flex items-center justify-center lg:items-center lg:justify-center md:justify-start w-36 py-1 border-black border-2 rounded-full'>
                        <a href="my-4" className=''>Learn More</a>
                        <ChevronRight className='h-5 w-5 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
