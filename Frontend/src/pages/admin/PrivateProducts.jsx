
    import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
    const PrivateProducts = () => {
        const navigate = useNavigate()
        const products = useSelector((state) => state.products.data);
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
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

    {RenderedPrivateProducts.length > 0 ? RenderedPrivateProducts : <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">No Private Products Found! </strong>
              <span className="block sm:inline">Please make some products' visibility private to view them here.</span>
            </div>
          </div> }
    </div>
    )
    }

    export default PrivateProducts
