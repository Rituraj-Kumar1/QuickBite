// Class Based component for About us user
import React from "react";
class UserClass extends React.Component {
    //to use props we have to make construtor and make props super
    constructor(props) {
        super(props); //super keyword helps to use parent component methods and properties
        //using super so that this.props is available for constructor

        //state variable are defined in constructor only
        this.state = {
            // count: 0,
            // count2: 0
            userInfo: {
                name: "Dummy",
                contact: "9999"
            }
        }
        // console.log(this.props.name + " Constructor")

    }

    async componentDidMount() {
        // console.log(this.props.name + " Component Mounted");
        //API Call
        const data = await fetch(this.props.userLink)
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate() {
        console.log("component did update")
    }
    componentWillUnmount() {
        console.log("Component will unmount")
    }
    render() {
        // console.log(this.props.name + " Render")
        // const { name, contact } = this.props;
        const { count, count2 } = this.state;
        const { name, created_at, avatar_url } = this.state.userInfo
        return (
            <div className="user-card  flex flex-row gap-14 justify-center mt-10">
                {/* <h4>Count: {count}</h4> */}
                {/* <h4>Count2:{count2}</h4> */}
                {/* <button onClick={() => {
                    this.setState({ //we use this.setstate to change state variable . and it will change only that state variable that is written 
                        //when state variable is changes then react start reconsillation process(diff algo,etc)
                        count: count + 1,
                        // count2: count2 + 1,
                    })
                }}>Increase</button> */}
                <div ><img src={avatar_url} className="w-16" alt="" /></div>
                <div>
                    <h3>Name: {name}</h3>
                    <h4>Joined: {created_at}</h4>
                </div>
            </div>);

    }
}
export default UserClass


// REACT LIFECYCLE
/**
 --- Mounting ---
 Constructor (dummy)
 Render(dummy)
          <dom updates with dummy>
 Component didMount
    <api call>
    <this.set_state>      ---stare variable updates
 --- Update ---
    Render(api data)
           <dom update(api data)>
    component did updata called

 --- Unmounting ---
    if that element unmount (disappear from ui) component willunmount called
    in case we are moving to new page
 */