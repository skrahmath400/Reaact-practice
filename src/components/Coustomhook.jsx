import { useEffect, useState } from "react";
import axios from "axios";

const useCustomHook = () => {
    const [data, setdata] = useState(null);
    const [isloading, setloding] = useState(false); // ✅ false not null
    const [error, seterror] = useState(null);

    const getapicalling = async () => {
        try {
            setloding(true);
            seterror(null);  // ✅ null not false

            const studentroute = await axios.get(
                `http://localhost:8086/api/student-routes/get-student-route-assign-data?studentAdmissionId=${1674}&academicYearId=${27}`
            );

            setdata(studentroute.data); // ✅ .data not whole response!

        } catch (error) {
            seterror(error);
        } finally {
            setloding(false); // ✅ Use finally — always runs!
        }
    };

    useEffect(() => {
        getapicalling();
    }, []);

    return { data, isloading, error };
};

export default useCustomHook;