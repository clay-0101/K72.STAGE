import React, { useEffect, useState } from "react"; // React aur uske hooks (useState, useEffect) ko use karne ke liye import kiya.
import { Globe } from "lucide-react"; 
function MontrealClock() {
  // 1. State: Time ko store karne ke liye ek 'time' variable banaya aur shuru mein ise khali ("") rakha.
  const [time, setTime] = useState(""); 

  // 2. Side Effect: Jab component screen par load hota hai, tab ye function chalta hai.
  useEffect(() => {
    // Har 1000ms (1 second) baad ye code baar-baar chalega.
    const interval = setInterval(() => {
      
      // Clock ka format aur timezone set karne ke liye settings (Options).
      const options = {
        timeZone: "America/Toronto", // Montreal aur Toronto ka timezone same hota hai, isliye ye use kiya.
        hour: "2-digit",             // Ghante (Hours) 2 digits mein dikhe (e.g., 05).
        minute: "2-digit",           // Minutes 2 digits mein dikhe.
        second: "2-digit",           // Seconds 2 digits mein dikhe.
        hour12: false                 // (Optional) AM/PM format ke liye.
      };

      // Intl.DateTimeFormat: Ye line naya Date object leti hai aur use Montreal ke time aur hamare options ke hisaab se format karti hai.
      const formattedTime = new Intl.DateTimeFormat("en-GB", options).format(new Date());

      // Jo naya time mila, use 'time' state mein update kar diya taaki screen par dikh sake.
      setTime(formattedTime); 
      
    }, 1000); // 1000 milliseconds ka matlab hai har 1 second.

    // Cleanup: Jab user page se jayega, ye 'setInterval' ko band kar dega taaki system slow na ho (Memory leak se bachata hai).
    return () => clearInterval(interval);
    
  }, []); // [] ka matlab hai ye sirf ek baar chalega jab component load hoga.

  // 3. UI: Jo time state mein save hua hai, use HTML (JSX) ke andar display kar rahe hain.
  return (
    <div className="hidden md:flex uppercase font-[fontBold] text-xl h-10  items-end gap-3 absolute  text-white bottom-[3px] left-0">
      <Globe size={40} strokeWidth={1} />
      <p className="self-center">Montréal_{time} </p>
    </div>
  );
}

export default MontrealClock; // Is component ko dusri files mein use karne ke liye export kiya.