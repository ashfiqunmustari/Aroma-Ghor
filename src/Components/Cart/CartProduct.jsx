const CartProduct = ({perfume, handleRemoveFromCart}) => {

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm p-5 flex items-center">
        <img
          className="w-20 h-20 rounded-xl border-2 object-cover"
          src={perfume.image}
          alt="Perfume"
        />
{/* Product Info */}
      <div className="flex-1 px-4">
        <h2 className="font-semibold text-lg">{perfume.name}</h2>
        <p className="text-gray-600">{perfume.size.label}</p>
        <p className="font-semibold text-pink-400"
        style={{fontFamily: "'Poppins', sans-serif", fontWeight: 400}}>BDT {perfume.size.price}/-</p>
      </div>

      {/* Remove Button */}
      <button
        title="Remove from Cart"
        className="text-red-500 hover:text-red-700 font-bold text-xl px-3 py-1 rounded"
        style={{ backgroundColor: "white", border: "none" }}
        onClick={() => handleRemoveFromCart(perfume, perfume.size)}
      >
        ×
      </button>
      </div>
    </div>
  );
};

export default CartProduct;
