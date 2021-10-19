/*
Credit - Web Dev Simplfied
Video URL - https://www.youtube.com/watch?v=0c6znExIqRw&t=557shttps://www.youtube.com/watch?v=0c6znExIqRw&t=557s
*/

import { useState } from 'react'

function useArray(input){

    // Createing a state for Array 
    const [array, setArray] = useState(input)

    // Let's create utility function for commonly used tasks

        // Pushes a new value into the array
    function push (ele) {
        setArray(old=>[...old, ele])
    }

        // Updates the value at a given index
    function update(index, ele){
        setArray(old=>[
            ...old.slice(0, index),
            ele, 
            ...old.slice(index+1, old.length)
        ])
    }

    // Uses the function provided as input to filter the array
    function filter(filterFunction){
        setArray(old=>old.filter(filterFunction))
    }

    // Removes the value at an index
    function remove(index){
        setArray(old=>[...old.slice(0, index), ...old.slice(index+1, old.length)])
    }

    // Clear the entire array 
    function clear(){
        setArray([])
    }

    return {array, set:setArray,push, filter, update, remove, clear}
}

export default useArray