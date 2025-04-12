import UserClass from "./UserClass"
import Userfunc from "./Userfunc"
import { Component } from "react"
import UserContext from "../utils/UserContext";
class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        //make api calls here
        console.log("Parent didmount")
    }
    render() {
        return (<div>
            {console.log("Parent Render")}
            <div className=" font-bold text-center text-3xl p-3">Team Members</div>
            <UserClass userLink="https://api.github.com/users/GCell-droid" />

            <UserContext.Consumer>
                {/*using context in class based component write callback function inside */}
                {(data) => <h3 className="text-center ">User:-{data.loggedInUser}</h3>}
            </UserContext.Consumer>
        </div>)
    }
}

export default About

//phases of react component

// Parent Constructor
// Parent Render

//     - First Child Constructor
//     - First Child Render                  //batching of multiple child render phase
//     - Second Child Constructor
//     - Second Child Render

/// <DOM updated  - in a single batch>

//     - First Child Component Mounted        //batching of multiple child commit phase
//     - Second Child Component Mounted

// Parent didmount