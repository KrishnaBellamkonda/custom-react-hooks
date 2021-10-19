// useFetch.js
/* Desc - 
This custom hook helps to fetch Data from APIs in a clean fashion. It returns 
a loadingState, errorState and dataState. Each of these can be very useful in
your application. 

In any react app using an API, you need to write a fetch function 
to get the data and store it. 
*/

// Writing the hook 
import {useState, useEffect } from 'react'

export function useFetch(URL="", options = null){
	// Creating a state for the data, error and loading
	const [data, setData] = useState(null) // Default value is null
	const [error, setError] = useState(null) // Defaults to null 
	const [loading, setLoading] = useState(false) // Defaults to not loading

	// We use useEffect to fetch as the data coming in is a side-effect. 
	useEffect(async ()=>{
		setLoading(old=>true) // Started loading
		try {
			const res = await fetch(URL)
			const dataJSON = res.json()
			// Chaning the values of data and error
			setData(old=> dataJSON)
			setError(old=>null)

		} catch(e) {
			// Set Error message to the Error State
			setError(old=>e)
			setData(old=>null)
		}

	// You can have a clean up which changes the mount Status 

	//  Changing the loading Status 
	setLoading(old=>false)
	}, [URL, *options])

	return ([loading, error, data])
}