import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const resmenu = useResmenu(resId); //custom hook now this component job is to only show menu not fetching
    if (resmenu == null)
        return <Shimmer />
    const items = resmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
    const { name, cuisines, avgRating, totalRatingsString } = resmenu.cards[2]?.card?.card?.info;
    // const dishes = resmenu.cards[4]?.groupedCard
    const category = items.filter((c) => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className="restaurant-menu text-center">
            <p className="text-3xl m-10 ">
                {name}</p>
            <p className="font-semibold">{avgRating}⭐ ({totalRatingsString})</p>
            <p className=" opacity-70 font-medium">
                {cuisines.join(",  ")}
            </p>
            <p className="m-3 font-bold">Menu</p>
            {category.map((c, index) => {
                return <RestaurantCategory key={c?.card?.card?.title} data={c.card.card}
                    showItems={index === showIndex ? true : false}
                    showIndFun={() => {
                        setShowIndex(index);
                    }}
                    donotshowind={() => {
                        setShowIndex(null)
                    }}
                />
            })}

        </div >
    )
}
export default RestaurantMenu;



