import React, { useState } from 'react';
const First = () => {
  const [on, setoff] = useState(false);
  return (
    <>


      <div>
        <button onClick={() => (on == false) ? setoff(true) : setoff(false)}>
          {on == true ? "click to off" : "click to on"}

        </button>
      </div>
    </>

  );
};

export default First;
