import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useResmenu = (resId) => {
    const [resmenu, setresmenu] = useState();
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let data = await fetch(MENU_API + resId);
        let json = await data.json();
        setresmenu(json?.data)
    }
    return resmenu;
}

export default useResmenu;