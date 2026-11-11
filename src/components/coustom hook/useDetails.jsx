import axios from "axios";
import { useEffect, useState } from "react";



const useDetails = () => {
    const [getacdc, setacdc] = useState([]);
    const [isloading, setloading] = useState(null);
    const [iserror, seterror] = useState(null);

    const getacademicyears = async () => {
        try {
            setloading(true);
            seterror(false);

            const acdcresult = await axios.get(`http://localhost:9000/common/get/academic-years`);
            const data = Array.isArray(acdcresult.data) ? acdcresult.data : acdcresult.data?.data ?? []
            setacdc(data);

        }
        catch (e) {

            seterror('Failed to load the data');


        }
        finally {
            setloading(false)
        }
    }

    useEffect(() => {
        getacademicyears();
    }, [])

    return { getacdc, isloading, iserror };

}



export default useDetails;