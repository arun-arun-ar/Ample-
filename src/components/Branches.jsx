import { ChevronRight, Phone } from 'lucide-react'
import React from 'react'

const Branches = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <h1 className='text-center text-xl md:text-2xl lg:text-3xl py-4'>In Nepal</h1>
                    <div className='flex flex-wrap gap-10 items-center justify-center'>
                        <div className='flex flex-col md:flex-row gap-5 px-5 md:border-r-2 border-black/50'>
                            <div>
                                <img src="/pokhara.png" alt="" className='transition-transform duration-300 hover:scale-105' />
                            </div>
                            <div>
                                <h1 className='py-2 text-lg md:text-xl'>Ample education Pokhara</h1>
                                <p className='text-sm md:text-base'>Siddhartha Chowk, Pokhara 33700</p>
                                <p className='flex gap-3 py-3 items-center text-sm md:text-base'>
                                    <Phone className='h-5 w-5' /> <span> +977 15354445 </span>
                                </p>
                                <div className='flex items-center justify-center text-sm md:text-base lg:text-sm w-fit px-1 my-2 py-1 border-black border-2 rounded-full'>
                                    <a href="" className=''>View in Google Maps</a>
                                    <ChevronRight className='h-5 w-5 ' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 px-5'>
                            <div>
                                <img src="/pokhara.png" alt="" className='transition-transform duration-300 hover:scale-105' />
                            </div>
                            <div>
                                <h1 className='py-2 text-lg md:text-xl'>Ample education Pokhara</h1>
                                <p className='text-sm md:text-base'>Siddhartha Chowk, Pokhara 33700</p>
                                <p className='flex gap-3 py-3 items-center text-sm md:text-base'>
                                    <Phone className='h-5 w-5' /> <span> +977 15354445 </span>
                                </p>
                                <div className='flex items-center justify-center text-sm md:text-base lg:text-sm w-fit px-1 my-2 py-1 border-black border-2 rounded-full'>
                                    <a href="" className=''>View in Google Maps</a>
                                    <ChevronRight className='h-5 w-5 ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branches
