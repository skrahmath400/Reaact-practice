import useDetails from "./useDetails"

const useDetailsuseage = () => {
    const { getacdc, isloading, iserror } = useDetails();
    if (isloading)
        return <p> ⏳it was loding</p>
    if (iserror)
        return <p>oops Something went wrong ❌ </p>

    return (<>

        {getacdc.map((val, index) => (
            <ul key={index} >

                <li>{val.academicYear}</li>
            </ul>

        ))}

    </>


    )

}
export default useDetailsuseage;