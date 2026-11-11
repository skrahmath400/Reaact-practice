import axios from "axios";
import { useEffect, useState } from "react";
import useCustomHook from "./Coustomhook";

const StudentRoute = () => {

    const { isloading, data, error } = useCustomHook()

    const [adms, setadms] = useState(null);
    const [academicYearId, setacademicYearId] = useState(null);



    const fetchrouteassigned = async () => {
        const studentroute = await axios.get(`http://localhost:8086/api/student-routes/get-student-route-assign-data?studentAdmissionId=${adms}&academicYearId=${academicYearId}`);
        if (studentroute != null) {
            console.log(studentroute)
        }
    };

    useEffect(() => {
        if (adms != null && academicYearId != null) {
            fetchrouteassigned()
        }
    }, [adms, academicYearId])





    return (<>

        <div>

            <label>admission number</label>

            <input type="text" value={adms} onChange={(e) => setadms(e.target.value)} />
        </div>



        <div>

            <label>academicyearid </label>

            <input type="text" value={academicYearId} onChange={(e) => setacademicYearId(e.target.value)} />
        </div>

        <button onClick={fetchrouteassigned}>
            click to fetch data

        </button>

    </>)



}
export default StudentRoute;
