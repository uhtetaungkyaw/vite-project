import React, { useState } from 'react'

const SwitchTheme = () => {
const [isDark, setIsDark] = useState(true)

    const changeThemeHandler = ()=>{
        if(isDark === true)
        {
            console.log("Theme is Dark ");
            document.body.style.backgroundColor = "black"
            setIsDark(false);
        }else{
            console.log("Theme is white ");
            document.body.style.backgroundColor = "white"
            setIsDark(true)
        }
    }
  return (
    <>
        <button onClick={changeThemeHandler}>
            Change
             {
                isDark ? `Drak` : `White`
             }
        </button>
        {/* {
            isTrue ? true : false
        } */}
        {/* {
            isDark && <p>Theme is white</p>
        } */}
    </>
  )
}

export default SwitchTheme


// isTrue ? true : false  
// isTrue && true