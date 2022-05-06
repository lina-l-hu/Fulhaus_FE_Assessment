//Hook that stores and accesses values in local storage -- used for the Cart items


import {useState, useEffect} from "react";

const usePersistedState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);

        const parsedValue = (storedValue !== null) ? JSON.parse(storedValue) : defaultValue;
    
        return parsedValue;
    })    

    useEffect(() => {
    
        window.localStorage.setItem(key, JSON.stringify(value));
        
    }, [value])

    return [value, setValue];
}

export default usePersistedState;