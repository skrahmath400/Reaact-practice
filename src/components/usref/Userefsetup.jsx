import { useEffect, useRef, useState } from "react";
const Userefsetup = () => {
    const inputref = useRef();


    const [data, setdata] = useState();
    useEffect(() => {
        inputref.current.focus();
    }, [])

    return (<>
        <input type="text" ref={inputref} placeholder="write the data" />
        <button onClick={() => setdata(inputref.current.value)}>click</button>
        <p>Saved data: {data}</p>
    </>)
}
export default Userefsetup;