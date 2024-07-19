import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
function filterData(searchInput, allRestaurant) {
  const filterData = allRestaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()),
  );
  return filterData;
}

const Body = () => {
  // searchInput is a local state variable
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=32.726601&lng=74.857025",
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setAllRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  // empty dependency array => once after initial render
  // dependency array [searchInput] => initial render + every time value of searchInput changes

  // conditional rendering
  // if restaurants is empty => shimmer ui
  // if restaurants have data => actual ui

  // early return / not render components
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>check your internet connection</h1>;
  }

  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* <div className="m-10">
        <input
          type="text"
          className="search-input justify-center  border-2 border-black"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn border-2 border-black"
          onClick={() => {
            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchInput, allRestaurant);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div> */}

      <div className="max-w-md mx-auto mt-5 mb-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-[#00361b] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for restaurants"
            required
          />
          <button
            onClick={() => {
              // need to filter the data
              // update the state - restaurants
              const data = filterData(searchInput, allRestaurant);
              setFilteredRestaurants(data);
            }}
            className="text-white absolute end-2.5 bottom-2.5 bg-[#00361b] hover:bg-[#00290a] focus:ring-4 focus:outline-none focus:ring-[#00290a] font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-list flex flex-wrap justify-evenly">
        {/* <RestaurantCard restaurant={restaurantList[0]} />
        <RestaurantCard restaurant={restaurantList[1]} />
        <RestaurantCard restaurant={restaurantList[2]} />
        <RestaurantCard restaurant={restaurantList[3]} />
        <RestaurantCard restaurant={restaurantList[4]} />
        <RestaurantCard restaurant={restaurantList[5]} />
        <RestaurantCard restaurant={restaurantList[6]} />
        <RestaurantCard restaurant={restaurantList[7]} />
        <RestaurantCard restaurant={restaurantList[8]} />
        <RestaurantCard restaurant={restaurantList[9]} />
        <RestaurantCard restaurant={restaurantList[10]} /> */}
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurants found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={`/restaurants/${restaurant.info.id}`}>
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
