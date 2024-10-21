import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);


    // const handleChange = e =>{
    //     setValue(e);
    // }
    // return[value, handleChange];
    
    const onchange= e =>{
        setValue(e);
    }
    return{
        value,
        onchange
    }
}


export default useInputState;