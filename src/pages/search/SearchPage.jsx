import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/search';
import { useCart } from '../../context/cart';
import axios from 'axios';
import toast from 'react-hot-toast';

const SearchPage = () => {
    const navigate = useNavigate();
  const [values, setValues] = useSearch();
  const [name, setName] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useCart();

   // get all category
   const getAllCategory = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_URL
      }/api/v1/category/get-all-categories`;
      const { data } = await axios.get(url);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // get search Name
  console.log(values.keyword);
  return (
    <Layout>
    <div className="">
      {/* heading -----------------------------*/}
      <h1 className="mt-28 text-center text-4xl font-bold mb-8">
        Results for "{values.keyword}"
      </h1>
      {/* product length ------------------------------- */}
      <h6 className="text-center">
        {values?.results.length < 1
          ? "No Product Found"
          : `Products ${values?.results.length}`}
      </h6>

          {/*  */}
      <div className="home_content w-[86%] m-auto pt-10 max-md:w-[96%] max-lg:w-[94%]">
        <div className="product_content ">
          {/* {JSON.stringify(radio, null, 4)} */}

          <div className="all_products_show_cont max-md:gap-8 max-lg:gap-8">
            {values?.results.map((p) => (
              <div
                key={p._id}
                className="product_cont items-center justify-center p-3 mb-8 max-md:w-40 max-lg:mb-0"
              >
                <div className="product_img cursor-pointer max-sm:w-36 max-lg:w-36">
                  <img
                    src={p.photos[0]}
                    className=""
                    alt={p.name}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  />
                </div>
                <div className="max-md:hidden max-md:text-sm">{p.name}</div>
                <div className="flex flex-col">
                  {/* <p className="">{p.description.substring(0, 30)}</p> */}
                  <p className="">$ {p.price}</p>
                </div>

                <button
                  className="bg-[#222] text-white w-24 rounded h-8"
                  onClick={() => {
                    setCart([...cart, p]);
                    toast.success("Item Add to Cart");
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                    <span>add</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default SearchPage