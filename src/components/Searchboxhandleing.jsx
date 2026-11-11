import { useEffect, useState } from "react";
import React from "react";
const Searchboxhandleing = () => {
    const [search, setsearch] = useState("");


    useEffect(() => {


        if (search.length < 3)
            return;
        const setsearching = setTimeout(() => {
            console.log("calling")
            alert("calling");
        }, 500);




        return () => (clearTimeout(setsearching));

    }, [search]
    )

    return (<>
        <div>

            <input type="text" placeholder="enter " value={search} onChange={(e) => setsearch(e.target.value)} />


        </div>
    </>)
}



export default Searchboxhandleing;
