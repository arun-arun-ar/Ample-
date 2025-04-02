import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-[#3D03FA] text-3xl sm:text-4xl font-bold mb-4'>
                            Check Your Eligibility for <span className='text-[#FA1303]'>International</span> Study
                        </h1>
                        <p className='text-black/80 mb-6'>
                            We work with the top-ranked universities. 4th of the World’s top 6 universities and 19th out of World’s Top 100 Universities are in the UK as per QS World Rankings. We provide researchers, educators, and students excellent research opportunities. A handful of research-centric universities form an elite group called the Russell Group.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-2'>
                                <MapPin className='h-5 w-5' /> <p>Ramshah Path, Kathmandu</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MapPin className='h-5 w-5' /> <p>Siddhartha Chowk, Pokhara 33700</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Mail className='h-5 w-5' /> <p>nepal@ampleedu.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Phone className='h-5 w-5' /> <p>nepal@ampleedu.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src="/whatsapp.svg" alt="Whatsapp" className='h-5 w-5' /> <p>nepal@ampleedu.com</p>
                            </div>
                            <div className='space-y-2'>
                                <p>+447403444728</p>
                                <p>+447403444728</p>
                                <p>+447403444728</p>
                            </div>
                            <div className="flex gap-4 py-4">
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
                    <div className='w-full md:w-1/2'>
                        <div className='border-2 border-[#3D03FA] p-14 rounded-lg'>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Name <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('name', { required: "Name is required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Your Name . . .'
                                    />
                                    {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Email <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', { 
                                            required: "Email is required", 
                                            pattern: {
                                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                                message: "Invalid email address"
                                            } 
                                        })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Your Email . . .'
                                    />
                                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Phone Number <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('phone', { required: "Phone number is required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Your Phone Number . . .'
                                    />
                                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        City <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('city', { required: "City is required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Your City . . .'
                                    />
                                    {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Street <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('street', { required: "Street is required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Your Street . . .'
                                    />
                                    {errors.street && <p className="text-red-600 text-sm">{errors.street.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Select a Branch <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('branch', { required: "Branch is required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                        placeholder='Enter Branch . . .'
                                    />
                                    {errors.branch && <p className="text-red-600 text-sm">{errors.branch.message}</p>}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold'>
                                        Appointment Date and Time <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        {...register('appointment', { required: "Appointment date and time are required" })}
                                        className='border border-[#2986D2] w-full h-10 rounded-sm pl-4 mt-2'
                                    />
                                    {errors.appointment && <p className="text-red-600 text-sm">{errors.appointment.message}</p>}
                                </div>
                                <div className='flex justify-center pt-4'>
                                    <button type="submit" className='bg-[#3D03FA] text-white w-full py-2 px-6 rounded-lg hover:bg-[#2d02c0] transition-colors'>
                                        Book An Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
