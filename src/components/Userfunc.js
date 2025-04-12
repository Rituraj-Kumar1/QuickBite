import { useEffect, useState } from "react";

//funtional component for about us
const Userfunc = ({ name, contact }) => { //destructuring props
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Calling interval NReact OP")
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    });
    const [count1, setcount1] = useState(1);
    return (<div className="user-card">
        <h4>Count = {count1}</h4>
        <h3>Name: {name}</h3>
        <h4>Contact: {contact}</h4>
    </div>
    );
}
export default Userfunc