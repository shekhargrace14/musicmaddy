import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
    const {
        state: { products },
    } = useContext(ProductContext);

    console.log(products);
    return (
        <div>
            {products.map((item) => (
                <div key={item.id} className=" my-2 bg-gray-200 border-gray-100 border-2  flex gap-2 items-[space-between] justify-between">

                    <Link to={`/singleBlogPage/${item.id}`}>

                    <div className="w-full md:w-1/2 lg:w-full px-2">
                        <div className="">
                            <h4 className="line-clamp-2 text-xs mb-2 font-semibold">
                                {item.title}
                            </h4>

                        </div>
                        <div className="flex justify-between">
                            <p className="text-xs flex items-center gap-1"><FaUser /> {item.author}</p>
                            <p className="text-xs">{item.published_date}</p>
                        </div>
                    </div>
                    </Link>

                </div>
            ))}
        </div>
    );
};

export default Category;
