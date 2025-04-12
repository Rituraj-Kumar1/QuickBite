import { DISH_IMG } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/redux/cartSlice"
const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    // we can't write hooks inside function
    const handleAddItems = (item) => {
        // it dispatches an action
        dispatch(addItem(item));
    }
    return (
        <div className=" text-left">
            <div className="text-gray-700 my-3 border-b-2">Category Items</div>
            <ul>
                {items.map((i) => {
                    return (<li className="my-3 p-2 border-gray-400 border-b-2" key={i?.card?.info?.id}>
                        <div className="dish-card flex justify-between items-center">
                            <div className="w-9/12">
                                <div className=" text-s ">
                                    <div>
                                        {i?.card?.info?.name}
                                    </div>
                                    <div className="text-xs my-1">
                                        {i?.card?.info?.price ? i?.card?.info?.price / 100 : i?.card?.info?.defaultPrice / 100} ₹
                                    </div>
                                </div>
                                <div className=" text-xs">
                                    {i?.card?.info.description}
                                </div>
                            </div>
                            <div className="w-3/12  relative">
                                <div className="absolute bottom-0 right-0 rounded-lg bg-red-900 text-sm  text-white p-1"><button onClick={() => handleAddItems(i)}>Add +</button></div>
                                {/*not using onClick={handleAddItems(i)} as it already calls fn whether btn is clicked or not */}
                                <img className=" object-contain" src={DISH_IMG + i?.card?.info?.imageId} alt="" />
                            </div>

                        </div>
                    </li>)
                })}
            </ul>
        </div>)
}
export default ItemList