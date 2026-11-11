import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const Usecontextuseage = () => {
    const user = useContext(AuthContext);

    return (<>
        <p>{user?.userId}</p>
        <p>{user?.userName}</p>
    </>)
}
export default Usecontextuseage;