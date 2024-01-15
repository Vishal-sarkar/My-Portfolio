import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {


    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");


    // Function to check if there is any user seting or configuration available in local storage and media query
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                

                    document.documentElement.classList.add("dark")
                }else {
                    document.documentElement.classList.remove("dark")
                }
            }else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                }else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }


        handleChange();
        
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    // Function to update the values in the local storage
    useEffect(() => {
      
        if (mode === "dark") {
            console.log("1", mode);

            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        if(mode === "light"){
            console.log("2", mode);
            window.localStorage.setItem('theme', "light");
            document.documentElement.classList.remove("dark");
        }
    }, [mode])
    

  return [mode, setMode]
}

export default useThemeSwitcher