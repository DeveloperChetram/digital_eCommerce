import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrivateProducts from "./admin/PrivateProducts";


const Products = () => {
  const user = useSelector((state) => state.users)


  const navigate = useNavigate();
  const products = useSelector((state) => state.products.data);
  // console.log(products);
  const isPublic = products.findIndex((e)=>{return e.visibility==="Public" })
  console.log(isPublic)
  const filteredProducts = products.filter((e)=>e.visibility ==="Public")
  console.log(user)
  const renderedProducts = filteredProducts.map((products) => {
    return (
    <>
    
      <div key={products.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300 w-64">
      <div className="relative">
        <img 
          src={products.imageUrl} 
          alt={products.productName} 
          className="w-full h-48 object-cover rounded-md"
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
    
</>
    
    );
  });
  return (
    <div className="w-[90%] flex flex-col items-center justify-center my-10">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
       {isPublic==-1 && !user?.data?.isAdmin ? <>    <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">Currently No Products Available! </strong>
              <span className="block sm:inline">New Products will be added soon.</span>
            </div>
          </div></>:
          <>
          
          </>}
      {isPublic==-1 && user?.data?.isAdmin ? <>    <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">No Public Products Found! </strong>
              <span className="block sm:inline">Please add some products to view them here.</span>
            </div>
          </div></>:
          <>
          
          </>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" key={products.id}>
        {products.length > 0 ? renderedProducts : (
          <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">No Products Found! </strong>
              <span className="block sm:inline">Please add some products to view them here.</span>
            </div>
          </div>
        )}
      </div>
      {products.map((products)=>products?.visibility==="Private" )&& user?.data?.isAdmin ? <><h1 className="text-2xl font-bold mt-10 mb-5">Private Products</h1><PrivateProducts/></> : <></>}
    </div>
  );
};

export default Products;
