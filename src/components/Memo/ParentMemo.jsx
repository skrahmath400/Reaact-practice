import { useState } from "react";
import Memoconcept from "./Child2";
import Child from "./Child";
import Child2 from "./Child2";

const ParentMemo = () => {
    const [data, setdata] = useState(0);

    return (<>

        <button onClick={() => setdata(data + 1)}>click</button>
        <Child data={data} />
        <Child2 />
    </>)
}
export default ParentMemo;