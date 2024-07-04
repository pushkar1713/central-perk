import imgPlaceholder from "../assets/placeholdre.png";

const ItemCard = ({ name, description, imageId, price, id, defaultPrice }) => {
  return (
    <div
      className="card w-[500px] h-[170px] bg-white p-[10px] m-[20px] mb-0  border-2 border-[#00361b] rounded-lg hover:scale-[1.1] transition-all duration-[0.5s] flex justify-between"
      id={id}
    >
      <div className="flex flex-col">
        <h2 className="text-[00361b] font-extrabold">{name}</h2>
        {/* <h3 className="text-white">{description}</h3> */}
        {price ? (
          <h4 className="text-[00361b]">₹ {price / 100}</h4>
        ) : (
          <h4 className="text-[00361b]">₹ {defaultPrice / 100}</h4>
        )}
      </div>
      {imageId ? (
        <img
          className="w-[150px] h-[150px] bg-cover rounded-lg border-2 border-[#00361b]"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
        />
      ) : (
        <img
          className="w-[150px] h-[150px] bg-cover rounded-lg mb-[10px] border-2 border-[#00361b]"
          src={imgPlaceholder}
        />
      )}
    </div>
  );
};

export default ItemCard;
