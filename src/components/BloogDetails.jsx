import React from 'react'

const BlogDetails = () => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row my-10 gap-10'>
          {/* Main Blog Image */}
          <div className='w-full md:w-[70%]'>
            <img src="/blog-details.png" alt="Blog details" className="w-full h-auto" />
            <div className='flex justify-between py-2 mt-3'>
              <h1 className='font-bold text-4xl'>Higest Paying Jobs in UK(2025)</h1>
              <p>March 21, 2025</p>
            </div>
            <div className='py-2'>
              <h5 className='font-semibold'>By Nisan Giri</h5>
              <p>4 Min Read |<span>Finance</span>| <span>Management</span></p>
            </div>
          </div>
          {/* Container for blogs */}
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md w-full md:w-[30%] h-fit">
            <div className="py-4 px-2">
              <h1 className="text-2xl font-semibold py-3">Other Related Blogs</h1>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div>
                    <img src="/mini-blog.png" alt="blog" className="h-20 w-20 object-cover rounded" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-lg line-clamp-2 w-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde omnis, modi voluptatibus sequi necessitatibus voluptates corporis nam dicta dolorum?.</h4>
                    <p className="text-black/50 text-sm">Date</p>
                  </div>
                </div>

                <div className='flex items-center justify-center'>
                  <a href="" className='bg-gradient-to-r from-blue-800 to-blue-950 via-blue-800  text-white rounded-md py-2 px-10'>
                    Load More
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogDetails
