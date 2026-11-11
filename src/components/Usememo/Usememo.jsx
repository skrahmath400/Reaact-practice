import { useMemo, useState } from "react";

const UseMemoDemo = () => {

    const [background, setBackground] = useState(false); // Unrelated state
    const [number, setNumber] = useState(10);            // Related state

    // useMemo depends on "number" NOT "background"
    // When background changes → useMemo SKIPS (shows cache!)
    // When number changes    → useMemo RECALCULATES!
    const calculate = useMemo(() => {
        console.log("🔢 Calculating..."); // Watch this in console!
        return number * 89;
    }, [number]); // Only recalculate when number changes!

    return (
        <div style={{
            background: background ? "black" : "white",
            color: background ? "white" : "black",
            padding: "20px"
        }}>

            {/* Clicking this changes background but NOT number
                → useMemo will NOT recalculate! Check console! */}
            <button onClick={() => setBackground(!background)}>
                Toggle Theme (useMemo should NOT recalculate!)
            </button>

            {/* Clicking this changes number
                → useMemo WILL recalculate! Check console! */}
            <button onClick={() => setNumber(number + 1)}>
                Change Number (useMemo WILL recalculate!)
            </button>

            <p>Number: {number}</p>
            <p>Result: {calculate}</p>
        </div>
    );
};

export default UseMemoDemo;