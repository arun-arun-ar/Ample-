import { Search } from 'lucide-react'
import React from 'react'

const ImportentDocs = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap py-10 px-4'>
                    {/* Text Section */}
                    <div className='flex flex-col w-full sm:w-1/2 justify-center'>
                        <div className=''>
                            <h1 className='text-3xl sm:text-5xl text-[#3D03FA] font-bold my-4 text-center sm:text-left'>
                                Important Documents that you must have.
                            </h1>
                            <p className='text-black/80 py-4 text-center sm:text-left'>
                                These documents are necessary for your visa and application process.
                                Range of documents may vary according to the situation of the applicant.
                            </p>
                        </div>
                        <div className='relative flex items-center'>
                            <input
                                type="text"
                                placeholder="Search Document . . . "
                                className='rounded-full border border-black p-2 pl-10 w-92'
                            />
                            <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                <Search />
                            </span>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='w-full sm:w-1/2 flex justify-center items-center order-first sm:order-none'>
                        <img
                            src="/sample_doc_hero_image.png"
                            alt="Important Documents"
                            className=''
                        />
                    </div>
                </div>

                <div className='my-10 py-10'>
                    <h1 className='py-4 my-4'>Sudy In UK</h1>
                    {/* Document components */}
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 mx-2 flex flex-col sm:items-center sm:justify-center w-fit'>
                        <img src="/Transcript.png" alt="" />
                        <h3 className='text-2xl font-semibold py-3 text-center'>Grade 10 Transcript</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportentDocs
