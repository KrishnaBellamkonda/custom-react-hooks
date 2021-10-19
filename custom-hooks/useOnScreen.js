// useOnScreen.js - 
/* Desc -  
This hook detects when an element is visible on the screen. It returns true if 
the element is visible and false otherwise. You can also 
mention a margin / padding space as the secod argument to the Hook. With this 
you can customize in which cases should an element be considered as visible on 
the screen. For example, by mentioning -50 as the second argument, you are 
asing the hook to return True when the element is 50 pixels out of the screen. 

This hook is very useful in lazy loading (where the loading of elements is delayed to 
improve performance), triggering animations and to check if the user has scrolled
down to a particular section.  

*/ 



// Writing the Hook 
import { useState, useEffect } from 'react'

export function useOnScreen(ref, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => {setIntersecting(entry.isIntersecting)}, {rootMargin}
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }, [])
  
    return isIntersecting
  }
