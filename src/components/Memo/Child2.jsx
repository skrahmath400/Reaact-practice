import { memo } from "react";

const Child2 = memo(() => {
    console.log("Child 2 is rendering! (Has memo)");
    return (<>
        <h1>hello this is second child is calling</h1>
    </>)
})
export default Child2;