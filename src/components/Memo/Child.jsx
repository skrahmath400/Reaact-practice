const Child = ({ data }) => {
    console.log("Child 1 is rendering! (No memo)");
    return (<>
        <p>the first child component is calling{data}</p>
    </>)
}
export default Child;