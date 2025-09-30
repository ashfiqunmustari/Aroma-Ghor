const WishlistProduct = ({perfumes,handleWishlistButton}) => {

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm p-5 flex items-center">
        <img
          className="w-20 h-20 rounded-xl border-2 object-cover"
          src={perfumes.image}
          alt="Perfume"
        />
        <div className="px-5">
          <h2 className="font-semibold text-lg">{perfumes.name}</h2>
        </div>
        <button
        title="Remove from wishlist"
        style={{ backgroundColor: "white", border: "none", padding: "0.25rem"}}
        onClick={() => handleWishlistButton(perfumes, perfumes.size)}
        >x</button>
      </div>
    </div>
  );
};

export default WishlistProduct;
