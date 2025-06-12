import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.data);
  console.log(products);

  const renderedProducts = products.map((products) => {
    return (
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
    
    );
  });
  return (
    <div className="w-[90%] flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? renderedProducts : (
          <div className="col-span-full flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
              <strong className="font-bold">No Products Found! </strong>
              <span className="block sm:inline">Please add some products to view them here.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
