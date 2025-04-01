import React from 'react'

const Services = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto'>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-[140px]'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-[#3D03FA] text-4xl font-bold my-6 text-left lg:text-end ml-4 lg:ml-0'>
                            Career Counseling & Course Selection
                        </h1>
                        <p className='text-black/80 my-8 text-left lg:text-end ml-4 lg:ml-0'>
                            Ample Education Consultancy offers expert career counseling and course selection services to help students make the right academic and professional choices. Our experienced counselors assess your interests, skills, and career goals to recommend the best UK universities and programs. Whether for undergraduate or postgraduate studies, we provide personalized guidance to align your education with future opportunities. With our support, you can confidently choose a path that leads to success.
                        </p>
                        <div>
                            <h2 className='font-bold text-xl my-3 text-left lg:text-end ml-4 lg:ml-0'>
                                English Test Preparation
                            </h2>
                            <div className='flex gap-4'>
                                <div className='flex gap-4'>
                                    <img src="/ielts.svg" alt="ielts" className="ml-4 h-32 sm:h-32" />
                                    <img src="pte.svg" alt="Pearson" className="ml-4 h-32 sm:h-32" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last'>
                        <img src="/books.png" alt="Books Image" className="w-full h-auto ml-4 lg:ml-0" />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 my-10'>
                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                        <img src="/stack-of-books.png" alt="Stack of books" className="w-full h-auto ml-4 lg:ml-0" />
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-[#3D03FA] text-4xl font-bold my-6 text-left lg:text-end ml-4 lg:ml-0'>
                            Study Abroad Guidance through Professionals
                        </h1>
                        <p className='text-black/80 my-8 text-left lg:text-end ml-4 lg:ml-0'>
                            Ample Education Consultancy provides expert study abroad guidance through experienced professionals. Our team offers personalized support in selecting the right university, course, and country based on your goals and aspirations. From application assistance to visa processing, we ensure a smooth journey to studying in the UK. With our in-depth knowledge and professional expertise, we help students make informed decisions for a successful international education experience.
                        </p>
                        <div>
                            <h2 className='font-bold text-xl my-3 text-left lg:text-end ml-4 lg:ml-0'>
                                Meet Our Professionals
                            </h2>
                            <div className='flex flex-wrap gap-4 justify-center lg:justify-end'>
                                <div className='flex flex-col items-center justify-center'>
                                    <img src="/team.jpg" alt="team-member" className='rounded-full h-20 w-20 ml-4 lg:ml-0' />
                                    <p>Yogesh Shrestha</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <img src="/team.jpg" alt="team-member" className='rounded-full h-20 w-20 ml-4 lg:ml-0' />
                                    <p>Nisan Giri</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <img src="/team.jpg" alt="team-member" className='rounded-full h-20 w-20 ml-4 lg:ml-0' />
                                    <p>Shishir Sharma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-[140px]'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-[#3D03FA] text-4xl font-bold my-6 text-left lg:text-end ml-4 lg:ml-0'>
                            Our Partner Universities in UK
                        </h1>
                        <p className='text-black/80 my-8 text-left lg:text-end ml-4 lg:ml-0'>
                            Ample Education Consultancy offers expert career counseling and course selection services to help students make the right academic and professional choices. Our experienced counselors assess your interests, skills, and career goals to recommend the best UK universities and programs. Whether for undergraduate or postgraduate studies, we provide personalized guidance to align your education with future opportunities. With our support, you can confidently choose a path that leads to success.
                        </p>
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last'>
                        <img src="/books.png" alt="Books Image" className="w-full h-auto ml-4 lg:ml-0" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;
