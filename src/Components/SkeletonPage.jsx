import React from 'react'
import { FaEye, FaHeart, FaUser } from 'react-icons/fa'
import Category from './Category'

const SkeletonPage = () => {
    return (
        <div>
            <div className='bg-gray-800' >
                <div className=' lg:container mx-auto  p-4  gap-4 md:flex gap-4 text-white' >
                    <div className='flex items-center md:w-4/12 h-full '>
                        <iframe className='animate-skeletonLoading' width="100%" height="215"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className='md:w-8/12 grid'>
                        <h1 className='w-full h-4/6  my-2 animate-skeletonLoading'></h1>
                        <p className='sm:line-clamp-2 w-2/3 h-3/6  my-2 animate-skeletonLoading' dangerouslySetInnerHTML={{ __html: `` }} />
                        <p className='w-1/3 h-3/6  my-2 animate-skeletonLoading'></p>
                        <p className='w-1/3 h-3/6  my-2 animate-skeletonLoading'></p>
                        {/* <p className='flex items-center gap-1'>{singleBlog.artist}</p> */}

                    </div>
                </div>
            </div>
            <main className='lg:flex lg:container mx-auto  p-4 gap-4'>
                <section className='lg:w-9/12 w-full'>
                    <h2 className='mb-2 w-1/3 h-3/6  my-2 animate-skeletonLoading '></h2>
                    <div className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: `vvv` }} />
                    <div className='border-t-[1px] border-b-[1px] border-gray p-2 my-4 flex justify-end gap-4'>
                        <span className='flex items-center gap-2' ><FaEye /> vvv </span>
                        <span className='flex items-center gap-2' ><FaHeart /> vvv </span>
                    </div>
                    {/* <RelatedBlogs /> */}
                </section>
                <aside className='lg:w-3/12 w-full  bg-gray-100'>
                    <Category/>

                </aside>
            </main>
        </div>
    )
}


export default SkeletonPage