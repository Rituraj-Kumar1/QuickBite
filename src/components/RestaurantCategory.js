import { useState } from "react"
import ItemList from "./ItemList"

const Down = ({ showItems }) => {
    if (showItems)
        return <span className=" rotate-180 select-none">🔻</span>
    else
        return <span className=" select-none">🔻</span>
}
const RestaurantCategory = ({ data, showItems, showIndFun, donotshowind }) => { //taking showItems as props from parent now it is CONTROLLED
    // const [showItems, setshowItems] = useState(false) //uncontrolled component because it is managing itself
    return (<div>
        {/* tailwindcss for accordian ui */}
        <div className="w-8/12 p-1 my-4 mx-auto bg-gray-100 rounded-xl  justify-between px-4  shadow-lg ">
            <div className="flex justify-between cursor-pointer" onClick={() => {
                if (showItems == false)
                    showIndFun();//on click we are basically setting state variable of parent by using function
                else {
                    donotshowind();
                }
            }}>
                <span className="  font-medium select-none">{data.title} ({data.itemCards.length})</span>
                <Down showItems={showItems} />
            </div>

            {showItems && < ItemList items={data.itemCards} />}  {/* returns ItemList if showItems true */}
        </div>


    </div>)
}
export default RestaurantCategory