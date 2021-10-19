// useLocalStorage.js
/* Desc -
	This hook checks if a value exists in local storage. If it exists, 
	it updates the value as per the arguments else it creates a new 
	value and updates it. 

	Very useful and handy to crete data that persists. 
*/

import {useState} from 'react';

export function useLocalStorage(key='', defaultValue=''){
	const [localState, setLocalState] = useState(function readLocalStorage(){
	try {
		const keyValuePair = window.localStorage.getItem(key)
		return keyValuePair? JSON.parse(keyValuePair): defaultValue
	} catch (e) {
		return defaultValue
	}
})

	// setLocalStorage - saves data in local Storage
	function setLocalStorage(newValue){
		try {
			const newValueType = typeof newValue
			const value = newValueType === 'function'? newValue(state) : newValue
			setState(value)
			window.localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.error(`Not able to store value for ${key} in localStorage.`)
		}
	}	

	return [localState, setLocalStorage];
}