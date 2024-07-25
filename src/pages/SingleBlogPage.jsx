import React, { useContext, useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { FaEye, FaHeart, FaUser } from 'react-icons/fa'
import RelatedBlogs from '../Components/RelatedBlogs'
import { Helmet } from 'react-helmet'
import Skeleton from '../Components/Skeleton'
import SkeletonPage from '../Components/SkeletonPage'
import Category from '../Components/Category'

const singleBlogPage = () => {
    const { state: { products } } = useContext(ProductContext);
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState(null);
  
    useEffect(() => {
      if (products) {
        const blog = products.find(item => item.id === parseInt(id));
        setSingleBlog(blog);
      }
    }, [id, products]);
  
    if (!singleBlog) {
      return <div><SkeletonPage/></div>;
    }

    console.log(id); // Debug: Logs the id from the URL
    console.log(singleBlog); // Debug: Logs the found product



    return (
        <div>
            <Helmet>
                <title>Home - Your Website Name</title>
                <meta name="description" content={singleBlog.title} />
                <meta name="keywords" content={singleBlog.title} />
            </Helmet>
            <div className='bg-gray-800' >
                <div className=' lg:container mx-auto  p-4  gap-4 md:flex gap-4 text-white' >
                    <div className='flex items-center md:w-4/12 h-full '>
                        <iframe width="100%" height="215" src={singleBlog.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className='md:w-8/12 grid'>
                        <h1 className='md:text-2xl text-xl my-2 font-semibold'>{singleBlog.title}</h1>
                        <p className='sm:line-clamp-2' dangerouslySetInnerHTML={{ __html: singleBlog.artist }} />
                        <p className='flex items-center gap-1 '><FaUser /> {singleBlog.author}</p>
                        <p>Published: {singleBlog.published_date}</p>
                        {/* <p className='flex items-center gap-1'>{singleBlog.artist}</p> */}

                    </div>
                </div>
            </div>
            <main className='lg:flex lg:container mx-auto  p-4 gap-4'>
                <section className='lg:w-9/12 w-full'>
                    {/* <img src={singleBlog.image} alt={singleBlog.title} className='w-full h-auto' /> */}



                    <h2 className='text-xl mb-2 font-semibold'>{singleBlog.title}</h2>
                    <div className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: singleBlog.lyrics }} />
                    <div className='border-t-[1px] border-b-[1px] border-gray p-2 my-4 flex justify-end gap-4'>
                        <span className='flex items-center gap-2' ><FaEye /> {singleBlog.views} </span>
                        <span className='flex items-center gap-2' ><FaHeart /> {singleBlog.likes} </span>
                    </div>
                    <RelatedBlogs />
                </section>
                <aside className='lg:w-3/12 w-full  '>
                    <Category/>
                </aside>
            </main>
        </div>
    )
}

export default singleBlogPage