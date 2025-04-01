import { ChevronRight } from 'lucide-react'
import React from 'react'

const Blog = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6'>
                <div className=' w-96   border-[#3D03FA] border-2 rounded-md '>
                    <img src="/blog.jpg" alt="something" className='h-80 '  />
                    <div className='px-4'>
                        <h1 className='text-xl font-semibold py-2'>Title of Blog</h1>
                        <p className='text-black/80 py-2'>March 21, 2025</p>
                        <div className='flex items-center justify-center lg:items-center lg:justify-center md:justify-start w-36 my-2 py-1 border-black border-2 rounded-full'>
                            <a href="my-4" className=''>Learn More</a>
                            <ChevronRight className='h-5 w-5 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog