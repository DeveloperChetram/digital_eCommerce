
import { useDispatch, useSelector } from "react-redux";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegMinusSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { asyncUpdateUser } from "../../store/actions/userActions";

const Cart = () => {

  const user = useSelector((state) => state.users.data);
  const dispatch = useDispatch()


const minusHandler = (id) => {
  const index = user.cart.findIndex((item) => item.product?.id === id);
 

  const copyUser = { ...user, cart: [...user.cart] };

  if (copyUser.cart[index].quantity >1) {
 copyUser.cart[index] = {
      product: copyUser.cart[index].product,
      quantity: copyUser.cart[index].quantity - 1,
    };
    
  } else {
    copyUser.cart.splice(index,1);
  }

  dispatch(asyncUpdateUser(copyUser, copyUser.id));
  console.log(id);
};
const removeHandler = (id) =>{
    const copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((item) => item.product?.id === id);
      copyUser.cart.splice(index,1);
      // console.log("clicked")
       dispatch(asyncUpdateUser(copyUser, copyUser.id));
}
const plusHandler = (id) => {
  const index = user.cart.findIndex((item) => item.product?.id === id);
 

  const copyUser = { ...user, cart: [...user.cart] };

  if (copyUser.cart[index].quantity >=1) {
 copyUser.cart[index] = {
      product: copyUser.cart[index].product,
      quantity: copyUser.cart[index].quantity + 1,
    };
    
  } else {
    copyUser.cart.splice(index,1);
  }

  dispatch(asyncUpdateUser(copyUser, copyUser.id));
  console.log(id);
};


//  console.log(finalCartProducts)

  const renderedFinalCart = user?.cart?.map((cartItem) => 
    <div
      key={cartItem.product.id}
      className=" w-full border-2 border-purple-500 rounded-xl p-4 flex items-center justify-between mb-4"
    >
      {/* Image */}
      <div className="flex w-full items-center gap-4">
        <div className="bg-gray-200 text-center text-sm w-16 h-16 flex items-center justify-center rounded-md">
          <img src={cartItem.product.imageUrl} className="object-cover w-full h-full rounded-md"  alt="" />
        </div>
        <p className="text-sm font-medium max-w-xs">{cartItem.product.productName}</p>
      </div>

     <div className="flex gap-10">
       {/* Quantity Controller */}
      <div className="flex items-center  gap-3">
       <FaRegMinusSquare className="select-none cursor-pointer text-xl" onClick={()=>minusHandler(cartItem.product.id,cartItem)}  />
        <input
          type="text"
          value={cartItem.quantity}
          readOnly
          className="w-10 border border-purple-500 rounded text-center"
        />
  <FiPlusSquare className="select-none cursor-pointer text-xl" onClick={()=>plusHandler(cartItem.product.id,cartItem)}  />
      </div>

      {/* Price */}
      <div  className="flex cursor-pointer  items-center gap-3 select-none font-semibold whitespace-nowrap">{cartItem.product.price} ₹<span className="text-[.6rem] bg-[#10b3a5] text-white rounded-xl px-2 py-1">per item</span><span onClick={()=>removeHandler(cartItem.product.id)}  className="text-[1.3rem]   text-[#d42730]    "><RxCross2 /></span></div>
     </div>
    </div>
 
);

  return (
    <div className="p-6 max-w-3xl w-full  mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products Cart</h1>
    
     {renderedFinalCart?.length>0 ? (
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
        <p className="text-xl font-bold">{user?.cart?.reduce((acc, val) => acc + val.product.price * val.quantity, 0).toFixed(2)}
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
