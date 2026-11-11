import { useEffect, useState } from "react"

const Handle=()=>{
    const[search,setsearch]=useState('');
        
    if(search.length<3){
    return 
    }
      
  
         useEffect(()=>{
     const handleseraching=setTimeout(() => {
        
    }, 5000);
         return clearTimeout(setsearch(''));

           
         },[search])


return(<>

<input type="text" placeholder="enter" value={search} onChange={()=>hand}
</>)
         
}