import { CDN_URL } from "../utils/constants"

const ResCard = (props) => {
    const { swiggyobj } = props;
    const { name, cloudinaryImageId, avgRating, cuisines } = swiggyobj?.info;
    return (<div className=" bg-no-repeat res-card flex  flex-col w-64 h-80 items-center p-2 font-normal  overflow-hidden m-2 bg-gray-100 shadow-m rounded-md hover:bg-gray-200" >
        <div className="bg-no-repeat">
            <img className="rounded-md resimg w-auto h-48 object-fill bg-no-repeat" src={CDN_URL + cloudinaryImageId} alt="" srcSet="" />
        </div>
        <p className="text-xs p-2">{name}</p>
        <p className=" font-semibold  text-xs">
            Rating: {avgRating}⭐
        </p>
        <div className="pt-2 desc font-thin text-xs text-center">{cuisines.join(", ")}</div>
    </div>)
}


// adding offer in rescard if available 
//higher order component takes component and returns enchanced version of that component
export const withOfferlabel = (ResCard) => {
    return (props) => {  //we are passing this props to this component
        const { swiggyobj } = props
        const { header, subHeader } = swiggyobj.info.aggregatedDiscountInfoV3;
        return (
            <div >
                <label className=" absolute bg-red-600 text-white p-2 font-thin text-xs  rounded-md opacity-80 hover:opacity-90 ">{header + " " + subHeader}</label>
                <ResCard {...props} /> {/*passing same props to ResCard using ... as props will come as object */}
            </div>
        )
    }

}
export default ResCard;