import { useEffect, useRef, useState } from "react"

const TrackPreviouslocation = () => {
    const [CountQueui, setCountQueui] = useState(0);
    const usereftracker = useRef(0);

    useEffect(() => {
        usereftracker.current = CountQueui
    }, [CountQueui])
    return (<>
        <input type="text" value={CountQueui} onChange={(e) => setCountQueui(e.target.value)} />
        <p>the previous value: {usereftracker.current}</p>
    </>)
}

export default TrackPreviouslocation;