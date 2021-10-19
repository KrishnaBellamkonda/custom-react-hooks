// useDelay.js
/*Desc - 
This hook returns a Boolean Value that changes from 'false' to 'true' after 
'delay' number of seconds. 

This can be use for countdowns, to load something after sometime. 
*/

// Writing the Hook 
import { useState, useEffect } from 'react'

function useDelay(delay){
	const [state, setState] = useState(false)
	// Using a setTimeout and cleaning it up
	useEffect(()=>{
		const timeout = setTimeout(()=>{
			setState(old=>true)
		}, delay)
		return ()=> clearTimeout(timeout)
	}, [deal])
	return state
}

export function Wait({delay, placeholder, ui}){
	const waitStatus = useDelay(delay)
	// If wait is done show ui else show placeholder
	return waitStatus? ui : placeholder
}