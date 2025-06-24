
    import { useState, useEffect } from "react";
     import InfiniteScroll from 'react-infinite-scroll-component';
// import {useSelector} from "react-redux"
import axios from '../../api/axiosconfig'
import { useNavigate } from "react-router-dom";
    const PrivateProducts = () => {
        const [hasMore, sethasMore] = useState(true)
  const [products, setproducts] = useState([])
  const fetchProducts = async () =>{
    try {
      const {data} = await axios.get(`/products?_start=${products.length}&_limit=8`)
      setproducts([...products, ...data])
     if(data.length == 0) {
      sethasMore(false)
     }
     else{
      sethasMore(true)
     }
    } catch (error) {
      
    }
    console.log(hasMore)
  }
  useEffect(() => {
    fetchProducts()
  

  }, [])
        const navigate = useNavigate()
        // const products = useSelector((state) => state.products.data);
        const privateFilteredProducts= products?.filter((e)=>e.visibility ==="Private")
        const RenderedPrivateProducts= privateFilteredProducts.map((products)=>
        
        <div key={products.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300 w-64 ">
        <span className= "font-medium text-[.8rem] text-[#FF4545]">Product Visibility : Private</span>
        <div className="relative">
            <img 
            src={products.imageUrl} 
            alt={products.productName} 
            className="w-full h-48 object-cover rounded-md mt-2"
            />
        </div>
        
        <div className="mt-4">
            <h2 className="text-sm font-medium text-gray-800 truncate">{products.productName}</h2>
            <div className="text-gray-600 text-sm mt-1">
            ₹{products.price.toFixed(2)} <span className="ml-2">PDF</span>
            </div>
        </div>
        
        <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-pink-600 text-white text-sm py-1.5 rounded-md hover:bg-pink-700 transition">
            Add to Cart
            </button>
            <button onClick={()=>{
        navigate(`/product/${products.id}`);
    }} className="flex-1 border border-pink-600 text-pink-600 text-sm py-1.5 rounded-md hover:bg-pink-50 transition">
            See Details
            </button>
        </div>
        </div>

        
        )
        // console.log(privateFilteredProducts)
    return (
         <InfiniteScroll 
              dataLength={products.length} 
              next={fetchProducts}
                hasMore={hasMore}
                  loader={<div className="flex items-center justify-center h-screen ">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>}
                  endMessage={
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-10  text-center" role="alert">
                  <strong className="font-bold">No More Privat  Products Available! </strong>
                </div>
          }
              >
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

    {RenderedPrivateProducts?.length > 0 ? RenderedPrivateProducts : <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">No Private Products Found! </strong>
              <span className="block sm:inline">Please make some products' visibility private to view them here.</span>
            </div>
          </div> }
    </div>
    </InfiniteScroll>
    )
    }

    export default PrivateProducts
