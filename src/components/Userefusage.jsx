import { useRef, useEffect } from 'react';

const AddVehicleForm = () => {

    // STEP 1: Create the ref (like an empty pointer — points to nothing yet!)
    const inputRef = useRef(null);
    //                       ↑ null means "not connected to anything yet"


    // STEP 3: Use it to control the element directly!
    useEffect(() => {
        // By the time useEffect runs, the HTML is already on screen
        // So inputRef.current is now the ACTUAL <input> element!
        inputRef.current.focus(); // Auto-focus when page loads!
    }, []);


    return (
        <div>
            <h2>Add New Vehicle</h2>

            {/* STEP 2: Connect the ref to this specific input element */}
            <input
                ref={inputRef}    // ← This is the CONNECTION!
                type="text"
                placeholder="Vehicle Reg No"
            />

            <div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Route Name"
                // No ref here — useRef not connected to this one!

                />
            </div>

            <div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Route Id"
                // No ref here — useRef not connected to this one!

                />
            </div>
        </div>
    );
};

export default AddVehicleForm;