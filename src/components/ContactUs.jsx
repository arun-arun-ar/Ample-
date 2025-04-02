import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
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
                            Message us to know more about  <span className='text-[#FA1303]'>Ample International Education</span>
                        </h1>
                        <p className='text-black/80 mb-6'>
                            We will response you within 4 hours through your email or phone.
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
                                        Message
                                    </label>
                                    <textarea
                                        {...register('message', { required: "Message is required" })}
                                        className='border border-[#2986D2] w-full h-28 rounded-sm pl-4 mt-2'
                                        placeholder='Enter your message here . . .'
                                    />
                                    {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
                                </div>


                                <div className='flex justify-center pt-4'>
                                    <button type="submit" className='bg-[#3D03FA] text-white w-full py-2 px-6 rounded-lg hover:bg-[#2d02c0] transition-colors'>
                                        Send Message
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

export default ContactUs;
