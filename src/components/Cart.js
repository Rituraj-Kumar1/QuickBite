import { useSelector } from "react-redux";
import { DISH_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import { removeItem } from "../utils/redux/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
    // useSelector
    let totalsum = 0;
    const Cartitems = useSelector((store) => {
        return store.cart.items;
    })
    const dispatch = useDispatch();
    const clearCartf = () => {
        dispatch(clearCart());
    }
    const removeItems = (i) => {
        dispatch(removeItem(i))
    }
    useEffect(() => {
        setTotalamt(totalsum)
    })
    const [TotalAmt, setTotalamt] = useState(0);
    if (Cartitems?.length == 0)
        return <div className=" text-center text-3xl font-semibold my-12">Cart is Empty</div>

    return (<div>
        <h1 className=" text-center font-bold text-3xl">Cart</h1>
        <div className="relative my-3 p-2 w-6/12 m-auto">
            <ul>
                {Cartitems.map((i, index) => {
                    totalsum = totalsum + (i?.card?.info?.price ? i?.card?.info?.price / 100 : i?.card?.info?.defaultPrice / 100)
                    return (<li className=" border-gray-400 border-b-2" key={i?.card?.info?.id + index}>
                        <div className="dish-card flex justify-between items-center">
                            <div className="w-9/12">
                                <div className=" text-s ">
                                    <div>
                                        {i?.card?.info?.name}
                                    </div>
                                    <div className="text-xs my-1">
                                        {i?.card?.info?.price ? i?.card?.info?.price / 100 : i?.card?.info?.defaultPrice / 100}₹
                                    </div>
                                </div>

                            </div>
                            <div className="w-1/12  relative border-transparent rounded-lg">
                                <img className=" object-contain border-transparent rounded-lg overflow-hidden" src={DISH_IMG + i?.card?.info?.imageId} alt="" />
                            </div>
                            <button onClick={() => removeItems(i)
                            }>❌</button>
                        </div>

                    </li>)
                })}
            </ul>

            <div className=" my-6 flex justify-between">
                <button className=" border-solid b-2" onClick={() => {
                    return clearCartf()
                }}>Clear Cart</button>
                <div className=" ">Total Amount: {TotalAmt} ₹</div>
            </div>
        </div>



    </div>)
}
export default Cart;