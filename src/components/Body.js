import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard, { withOfferlabel } from "./Rescard";
import Shimmercomp from "./Shimmer"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    console.log("body rendered")
    let [searchtxt, setserachtxt] = useState("");
    const [listofres, setlistofres] = useState([]);
    let [globallistofres, setgloballistofres] = useState([]);
    const contextData = useContext(UserContext);
    const { loggedInUser, setuserName } = contextData;
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        console.log("fetching data")
        const tdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonconverted = await tdata.json();
        setlistofres(jsonconverted.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setgloballistofres(jsonconverted.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(listofres)
    };

    //using higher order component
    const OfferCard = withOfferlabel(ResCard);//this function returns a component and  we are passing props to this (OfferCard) component


    const onlinestatus = useOnlineStatus();
    if (!onlinestatus) {
        return <div className=" text-center font-medium text-2xl m-10 gray">You are Offline !!!</div>
    }

    if (listofres?.length == 0) {
        return <Shimmercomp />
    }
    return (
        <div className="body">
            <div className="funcbtns flex justify-between mr-2">
                <div className="search-bar">
                    <input type="text" className=" border-solid border-2 border-gray-400 ml-3 text-gray-500 rounded-md" value={searchtxt} onChange={(e) => {
                        setserachtxt(e.target.value)
                    }} />
                    <button id="search-btn " className="border-solid border-2 pr-2 pl-2 border-gray-800 rounded-md" onClick={() => {
                        setlistofres(globallistofres.filter((res) => {
                            if (res.info.name.toLowerCase().includes(searchtxt.toLowerCase()))
                                return true;
                            return false;
                        }))

                    }} >Search</button>
                    {/* changing value inside context by taking it from input box */}
                    <input type="text" className=" mx-2 border border-black p-1" value={loggedInUser} onChange={(e) => {
                        setuserName(e.target.value)
                    }} ></input>
                </div>
                <button className="filter-btn  w-44 border-solid border-2 bg-red-600   font-thin text-white rounded-md hover:bg-red-700" onClick={() => {
                    const filteredlist = listofres?.filter((res) => res.info.avgRating >= 4.2)
                    setlistofres(filteredlist);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container flex flex-wrap ">
                {
                    listofres?.map(res => {
                        return <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                            {res.info.aggregatedDiscountInfoV3 === undefined ?
                                < ResCard key={res.info.id} swiggyobj={res} />
                                :
                                <OfferCard key={res.info.id} swiggyobj={res} />
                            }
                        </Link>
                    })
                }
            </div>
        </div >);
}

export default Body;