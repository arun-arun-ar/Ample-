import React from 'react'

const Certification = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full max-w-7xl mx-auto'>
                <div>
                    <h1 className='text-center text-2xl font-semibold text-[#3D03FA]'>PROFESSIONAL CERTIFICATION</h1>
                    <div className='flex flex-wrap justify-center items-center my-10'>
                        <div className='w-1/3 sm:w-1/4 lg:w-1/6 p-4'>
                            <img src="/British_Council_logo.svg.png" alt="British Council" className="w-full h-auto" />
                        </div>
                        <div className='w-1/3 sm:w-1/4 lg:w-1/6 p-4'>
                            <img src="/ctevt.svg" alt="CTEVT" className="w-full h-auto" />
                        </div>
                        <div className='w-1/3 sm:w-1/4 lg:w-1/6 p-4'>
                            <img src="nepal.svg" alt="Nepal" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification
