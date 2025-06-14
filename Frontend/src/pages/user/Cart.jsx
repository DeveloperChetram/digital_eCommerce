
const products = [
  { id: 1, title: "Trishonna's Worthy 30 Bundle PDF Code PDF", quantity: 1, price: 99.99 },
  { id: 2, title: "Trishonna's Worthy 30 Bundle PDF Code PDF", quantity: 5, price: 500.99 },
  { id: 3, title: "Trishonna's Worthy 30 Bundle PDF Code PDF", quantity: 9, price: 1000.99 },
];

const Cart = () => {
  const total = 50550;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products Cart</h1>

      {products.map((product) => (
        <div
          key={product.id}
          className="border-2 border-purple-500 rounded-xl p-4 flex items-center justify-between mb-4"
        >
          {/* Image */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 text-center text-sm w-16 h-16 flex items-center justify-center rounded-md">
              image
            </div>
            <p className="text-sm font-medium max-w-xs">{product.title}</p>
          </div>

          {/* Quantity Controller */}
          <div className="flex items-center gap-3">
            <button className="px-2 text-lg font-bold">-</button>
            <input
              type="text"
              value={product.quantity}
              readOnly
              className="w-10 border border-purple-500 rounded text-center"
            />
            <button className="px-2 text-lg font-bold">+</button>
          </div>

          {/* Price */}
          <div className="font-semibold whitespace-nowrap">{product.price} ₹</div>
        </div>
      ))}

      {/* Divider */}
      <hr className="border-t-2 border-purple-300 my-6" />

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">Total -</p>
        <p className="text-xl font-bold">{total} ₹</p>
      </div>

      {/* Buy Now Button */}
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg w-full max-w-sm mx-auto block">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
