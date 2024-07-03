const ItemCard = ({ name, description, imageId, price, id, defaultPrice }) => {
  return (
    <div
      className="card w-[200px] h-[270px] border-black p-[10px] m-[20px] bg-[#00361b] rounded-lg hover:scale-[1.1] transition-all duration-[0.5s]"
      id={id}
    >
      <img
        className="w-[100%] h-[150px] bg-cover rounded-lg mb-[10px] border-2 border-white"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />
      <h2 className="text-white font-extrabold">{name}</h2>
      {/* <h3 className="text-white">{description}</h3> */}
      {price ? (
        <h4 className="text-white">₹ {price / 100}</h4>
      ) : (
        <h4 className="text-white">₹ {defaultPrice / 100}</h4>
      )}
    </div>
  );
};

export default ItemCard;
