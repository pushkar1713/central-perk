import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItem } from "../utils/cartslice";
import { useDispatch } from "react-redux";
import PopUp from "./popup";
import ItemCard from "./itemCard";
const RestaurantMenu = () => {
  // how to read a dynamic url params
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantinfo();
  }, []);

  const [resInfo, setResInfo] = useState({});
  const [resMenu, setResMenu] = useState([]);
  const [resDishes, setResDishes] = useState([]);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  async function getRestaurantinfo() {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`,
    );

    const json = await data.json();

    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [],
    );
  }

  // console.log(resMenu);
  return (
    <div className="overflow-hidden">
      {/* <h1>restaurant id: {resId}</h1> */}
      <div className="flex justify-center items-center m-2 p-2">
        <div className=" flex w-[500px] h-[150px] border-2 border-white justify-between rounded">
          <div className="flex justify-center items-center w-[60%] bg-gradient-to-r from-emerald-500 to-emerald-900 border-r-white border">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-white">{resInfo.name}</h1>
              <h3 className="font-bold text-white">
                {resInfo.costForTwoMessage}
              </h3>
              <h3 className="font-bold text-white">
                {resInfo.avgRatingString} Stars
              </h3>
            </div>
          </div>
          <div className="justify-end">
            <img
              className="w-[200px] h-[146px] border-white border"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                resInfo.cloudinaryImageId
              }
              alt={resInfo.name}
            />
          </div>
        </div>
      </div>

      {resMenu.length > 0 ? (
        resMenu.map((category) => (
          <div key={category?.card?.card?.title}>
            <div className="flex justify-center items-center">
              {category?.card?.card?.title ? (
                <h1 className="text-3xl font-bold text-white bg-[#00361b] p-2 rounded-md">
                  {category?.card?.card?.title}
                </h1>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex flex-wrap justify-evenly">
              {category?.card?.card?.itemCards
                ? category?.card?.card?.itemCards?.map((item) => (
                    <div
                      className="text-[#00361b]  m-[10px]"
                      key={item?.card?.info?.id}
                    >
                      {/* <div>{item?.card?.info?.description}</div> */}
                      {/* <h3>{item?.card?.info?.name}</h3>
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        item?.card?.info?.imageId
                      }
                      alt=""
                      className="w-[100px]"
                    /> */}
                      <ItemCard {...item?.card?.info} />
                      <div className="ml-4">
                        <button
                          className="p-2 m-2 bg-[#00361b] text-white rounded-md font-bold uppercase text-sm"
                          onClick={() => handleAddItem(item)}
                        >
                          Add to Cart
                        </button>
                        <PopUp description={item?.card?.info?.description} />
                      </div>
                    </div>
                  ))
                : category?.card?.card?.categories?.map((item, index) => (
                    <div key={index} className="text-[#00361b] m-[20px]">
                      <div className="flex">
                        <h1 className=" font-extrabold text-2xl text-left ml-[120px] text-white bg-[#00361b] p-2 rounded-md">
                          {item?.title}
                        </h1>
                      </div>
                      <div className=" flex flex-wrap justify-evenly">
                        {item?.itemCards?.map((dishName, index) => (
                          <div key={index} className="text-[00361b] m-[10px]">
                            {/* {console.log(dishName?.card?.info?.description)} */}
                            {/* <div>{dishName?.card?.info?.description}</div> */}
                            {/* <h1>{dishName?.card?.info?.name}</h1>
                            <img
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                                dishName?.card?.info?.imageId
                              }
                              alt=""
                              className="w-[100px]"
                            /> */}
                            <ItemCard {...dishName?.card?.info} />
                            <div className="ml-4">
                              <button
                                className="p-2 m-2 bg-[#00361b] text-white rounded-md font-bold uppercase text-sm"
                                onClick={() => handleAddItem(dishName)}
                              >
                                Add to Cart
                              </button>
                              <PopUp
                                description={dishName?.card?.info?.description}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        ))
      ) : (
        <h1 className="h-screen">"not"</h1>
      )}
    </div>
  );
};

export default RestaurantMenu;
