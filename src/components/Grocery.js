import { useContext } from "react"
import UserContext from "../utils/UserContext"
const Grocery = () => {
    const user = useContext(UserContext);
    return (<div>
        <h1>User: {user.loggedInUser}</h1>
        Assume it is big grocery store with lot of items</div>)
}
export default Grocery