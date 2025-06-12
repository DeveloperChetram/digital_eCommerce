import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { asyncDeleteProduct } from "../store/actions/productActions";

const SingleProduct = () => {
  const navigate = useNavigate();
    const products = useSelector((state) => state.products.data);
    const users = useSelector((state) => state.users.data);
    const dispatch = useDispatch()
    const {id}=useParams()
    const product = products.find((e)=>e.id === id)
  // console.log(id)
  const DeleteHandler = ()=> {
    dispatch(asyncDeleteProduct(id))
    navigate("/products")
  }
  if (!product) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <h2 className="text-xl font-semibold">Product Not Found</h2>
      </div>
    );
  }
 return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border shadow-md space-y-4 mt-5">
      {/* Top Alerts */}
      {product?.addAlert && (
        <div className="w-full border rounded-full py-2 px-4 text-sm text-center text-pink-600 font-medium flex flex-wrap justify-center gap-4">
          <span>{product.alertMessage}</span>
        </div>
      )}
      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Product Image */}
      <div className="flex flex-col justify-between h-full">
      <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-52 h-52 object-contain rounded-lg bg-purple-100"
        />
          <div className="flex gap-4 mt-6">
    
    
          </div>
      </div>

        {/* Product Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">
            {product.productName} {product.fileType?.toUpperCase()} Code {product.fileType?.toUpperCase()}
          </h2>

          <p className="text-gray-600 text-sm mb-1">
            <strong>Owner:</strong> {product.owner}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            <strong>{new Date(product.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}</strong>
          </p>

          <p className="text-gray-700 mb-6">{product.productDescription}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <button className="bg-[#BF40BF] text-white px-6 py-2 rounded-lg text-sm font-medium">
                Buy Now
              </button>
              <button className="border border-[#BF40BF] text-[#BF40BF] px-6 py-2 rounded-lg text-sm font-medium">
                Add to Cart
              </button>
              {users && users.isAdmin && (
                <>
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
                    onClick={() => {navigate(`/admin/update-product/${product.id}`)}}
                  >
                    Update
                  </button>
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
                    onClick={DeleteHandler}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            <span className="text-[#BF40BF] font-semibold text-sm">
              {product.fileType?.toUpperCase()} | ₹{product.price}.00 Only
            </span>
          </div>
        </div>
      </div>
      {/* Admin Actions */}
    
    </div>
  );
}

export default SingleProduct