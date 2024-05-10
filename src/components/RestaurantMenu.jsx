import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  // how to read a dynamic url params
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantinfo();
  }, []);

  const [resInfo, setResInfo] = useState({});
  const [resMenu, setResMenu] = useState([]);

  async function getRestaurantinfo() {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );

    const json = await data.json();

    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
    );
  }

  console.log(resMenu);
  return (
    <div>
      <h1>restaurant id: {resId}</h1>
      <h2>{resInfo.name}</h2>
      <img
        className="w-[150px]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resInfo.cloudinaryImageId
        }
        alt={resInfo.name}
      />
      <h3>{resInfo.costForTwoMessage}</h3>
      <h3>{resInfo.avgRatingString} Stars</h3>
      {resMenu.length > 0 ? (
        resMenu.map((category) => (
          <div key={category?.card?.card?.title}>
            <h1>{category?.card?.card?.title}</h1>
            {category?.card?.card?.itemCards &&
              category?.card?.card?.itemCards.map((item) => (
                <div className=" menu text-red-600">
                  <h3>{item?.card?.info?.name}</h3>
                </div>
              ))}
          </div>
        ))
      ) : (
        <h1>"not"</h1>
      )}
    </div>
  );
};

export default RestaurantMenu;
