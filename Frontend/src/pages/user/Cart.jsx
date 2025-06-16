
import { useSelector } from "react-redux";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegMinusSquare } from "react-icons/fa";

const Cart = () => {

  const user = useSelector((state) => state.users.data);
  const products = useSelector((state) => state.products.data);

  // Merge products with cart quantities
  const finalCartProducts = user?.cart
    ? products
        .map((product) => {
          const matchedCartItem = user.cart.find((item) => item.productId === product.id);
          if (matchedCartItem) {
            return {
              ...product,
              quantity: matchedCartItem.quantity,
            };
          }
          return null;
        }).filter(Boolean)
        
    : [];

const minusHandler = ()=>{

}

 console.log(finalCartProducts)

  const renderedFinalCart = finalCartProducts.map((cartItem) =>
    <div
      key={cartItem.id}
      className=" w-full border-2 border-purple-500 rounded-xl p-4 flex items-center justify-between mb-4"
    >
      {/* Image */}
      <div className="flex w-full items-center gap-4">
        <div className="bg-gray-200 text-center text-sm w-16 h-16 flex items-center justify-center rounded-md">
          <img src={cartItem.imageUrl} alt="" />
        </div>
        <p className="text-sm font-medium max-w-xs">{cartItem.productName}</p>
      </div>

     <div className="flex gap-10">
       {/* Quantity Controller */}
      <div className="flex items-center  gap-3">
       <FaRegMinusSquare className="cursor-pointer text-xl" onClick={minusHandler}  />
        <input
          type="text"
          value={cartItem.quantity}
          readOnly
          className="w-10 border border-purple-500 rounded text-center"
        />
  <FiPlusSquare className="cursor-pointer text-xl"  />
      </div>

      {/* Price */}
      <div className="font-semibold whitespace-nowrap">{cartItem.price} ₹</div>
     </div>
    </div>
 
);

  return (
    <div className="p-6 max-w-3xl w-full  mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products Cart</h1>
    
     {finalCartProducts.length > 0 ? (
  renderedFinalCart
) : (
  <div className="col-span-full flex justify-center items-center">
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
      role="alert"
    >
      <strong className="font-bold">Cart is empty! </strong>
      <span className="block sm:inline">Please add some products to see them here.</span>
    </div>
  </div>
)}


      {/* Divider */}
      <hr className="border-t-2 border-purple-300 my-6" />

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">Total -</p>
        <p className="text-xl font-bold">{finalCartProducts.reduce((acc, val) => acc + val.price * val.quantity, 0).toFixed(2)}
 ₹</p>
      </div>

      {/* Buy Now Button */}
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg w-full max-w-sm mx-auto block">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
