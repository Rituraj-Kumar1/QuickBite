import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlinestatus, setonlinestatus] = useState(true);
    // console.log("in online body")
    useEffect(() => {
        console.log("in effect online body")
        window.addEventListener("online", () => [ //using browser event listener
            setonlinestatus(true)
        ])
        window.addEventListener("offline", () => [
            setonlinestatus(false)
        ])
    }, [])
    return onlinestatus;
}
export default useOnlineStatus;