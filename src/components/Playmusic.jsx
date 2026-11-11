import { useEffect, useRef } from "react"

const Playmusic = () => {


    const musicbutton = useRef(null);



    useEffect(() => {
        musicbutton.current.focus();
    }, [])
    return (<>
        <div>
            <button >previous button </button>
            <button ref={musicbutton}> Play Button </button>
            <button>Next button</button>

        </div>

    </>)
}
export default Playmusic;