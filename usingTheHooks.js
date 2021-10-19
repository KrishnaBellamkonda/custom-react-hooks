// This file contains how to use all the different hooks

// useOScreen.js
import {useRef} from react;
import {useOnScreen} from './useOnScreen'

function App() {
	// Declare the ref and give it to an element
	const elementRef = useRef()
	const isElementVisible = useOnScreen(elementRef)
	// Returns True if visible else returns False

	return (
		<div className="App">
			// This is where we assign the ref to an element
			<div className="element-to-observe" ref = {elementRef}></div> 
		</div>
	)

}


// useDelay.js
import {Wait} from './useDelay.js'

function App() {
	// Declare the ref and give it to an element
	const delay = 3; // 3 seconds

	return (
		<div className="App">
			// Load this element after some delay
			<Wait 
			delay = {delay}
			ui = {<div className="element-to-wait"></div> }
			placeholder = {<p>othing has loaded yet</p>}
			/>
			

		</div>
	)

}

// useInput.js 

import {useInput} from './useInput.js'

function App() {
	// Declaring the default Value
	const defaultValue = ''
	const [field, bind, resetFunction] = useInput(defaultValue); 

	// Handlers
	function submitHandler(){
		e.preventDefault()
		resetFunction()
	}

	return (
		<div className="App">
		{/* // Reset the state when form is submitted */}
			<form onSubmit = {submitHandler}>
			{/* // Easy way to build an input field */}
				<input 
					value = {bind.value}
					onChange = {bind.onChange}
				/>

			</form>
		</div>
	)

}

// useFetch.js 

import {useFetch} from './useFetch.js'

function App() {
	// Using the useFetch Hook to get data from URL 
	const URL = 'https://jsonplaceholder.typicode.com/todos/1'
	const [loading, error, data] = useFetch(URL)

	// Handing Loading and Errors
	if(loading) return <p>Loading</p>
	if(error) return <p>There is some Error </p>

	// If no error and is not loading, this will run 
    // Just prints the key and value pairs
	return (
		<div className="App">
		{
			Object.keys(data).map((key)=>{
				return (
				<p>{data[key]}</p>
				)
			})
		}
		</div>
	)

}

// useLocalStorage.js
import {useLocalStorage} from 'react'

function App() {
	// Config Settings
	const config = {
		name:'', 
		year:'2021'
	}


	// Declaring a localStorage State
	const [config, setConfig] = useLocalStorage('config', config)

	// You can easily se the Local Storage using setConfig (in this case)
	return (
		<div className="App">
		{
			Object.keys(config).map((key)=>{
				return (
				<p>{config[key]}</p>
				)
			})
		}
		</div>
	)

}

/* Using the UseArray function*/
import useArray from 'useArray';

function App(){
	const { array, set, push, remove, filter, update, clear } = useArray([5, 7, 9, 12, 16])
	
	// Pushes a new element
	push(5)

	// Removes the element at index  
	remove(2) // Removes 9

	// Sets a new value to the state
	set([1, 2, 3])

	// Clears the entire array 
	clear()

	// Update 
	update(0, 3) // Updates the value at 0 index with 3 

	// Filter 
	filter((value)=>value!==12) // Filters according to the callback function 
 
}