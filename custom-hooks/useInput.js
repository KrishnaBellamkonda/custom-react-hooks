// useInput.js 
/*Desc - 
This hook lets to handle an input field very easily. It returns 
an object that specifies default value, an OnChange Handler (function) and a 
reset function (if in any case you want to reset the value) 
*/

// Writing the Hook 
import { useState, useEffect } from 'react'

export function useInput(defaultValue, ){
	const [value, setValue] = useState(defaultValue)
	const resetFunction = ()=>{
		setValue(old => defaultValue)
	}

	// This object returns the value and onChange functions for 
	// an input field
	const bind = {
		value: defaultValue, 
		onChange: (e)=>setValue(old=>e.target.value)
	}

	return [value, bind, resetFunction]
}