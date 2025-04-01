import React from 'react'

const About = () => {
    return (
        <div className='w-full'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-10 items-center justify-center my-10 px-4 sm:px-8 md:px-16'>
                    {/* Left Section: Text */}
                    <div className='w-full md:w-1/2 flex flex-col'>
                        <h3 className='text-xl font-semibold'>Welcome to Ample Education,</h3>
                        <h1 className='font-bold text-[#3D03FA] text-2xl sm:text-3xl md:text-4xl mt-2'>About Ample Education</h1>
                        <p className='mt-4 text-sm sm:text-base md:text-lg text-black/80'>
                            Ample Education Consultancy offers expert career counseling and course selection services to help students make the right academic and professional choices. Our experienced counselors assess your interests, skills, and career goals to recommend the best UK universities and programs. Whether for undergraduate or postgraduate studies, we provide personalized guidance to align your education with future opportunities. With our support, you can confidently choose a path that leads to success.
                        </p>
                    </div>

                    {/* Right Section: Video */}
                    <div className='w-full md:w-1/2 px-10 flex justify-center'>
                        <iframe
                            src="https://www.youtube.com/embed/xP2n_Z5ft1Y?si=19ky-lGU0Mlk79Js"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className='h-60 w-full md:w-96 rounded-lg'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
