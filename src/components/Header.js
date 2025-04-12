import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";// This hook
export const Header = () => {
    //subscribing to store using selector
    const cartItems = useSelector((store) => {
        return store.cart.items; //return the portion that we have to subscribe
    })
    const LoggedInfo = useContext(UserContext);

    const [btnName, setbtnName] = useState("Login")
    useEffect(() => {
        console.log("Use Effect Header is Called")
    }, [])
    console.log("Header Rendered")
    return (<div className="nav flex justify-between m-1 p-2 items-center border-solid border-2 border-black">
        <div className="logo w-16">
            <Link to="/">
                <img src={LOGO_URL} alt="" srcSet="" />
            </Link>
        </div>
        <div className="navcontent ">
            <ul className="navbar flex">
                <li className="pr-10">
                    Online Status:{useOnlineStatus() ? " 🟢" : " 🔴"}
                </li>
                <li className="pr-5">
                    <Link to="/">Home</Link>
                </li>
                <li className="pr-5">
                    <Link to="grocery">Grocery</Link>
                </li>
                <li className="pr-5">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="pr-5">
                    <Link to="/contact">Contact Us </Link>
                </li>
                <li className="pr-5 w-20">
                    <Link to="/cart" className="w-10">🛒 {cartItems?.length}</Link>
                </li>

                <button className=" w-20 border-solid border-2 bg-red-600   font-thin text-white  rounded-2xl hover:bg-red-700" id="login-btn" onClick={() => {
                    if (btnName == "Login") {
                        id = "logout-btn"
                        setbtnName("Logout");
                    }
                    else {
                        setbtnName("Login");
                    }

                }}>{btnName}</button>
                <li className="pl-4">User-{LoggedInfo.loggedInUser}</li>
            </ul>
        </div>
    </div >)
}
export default Header;