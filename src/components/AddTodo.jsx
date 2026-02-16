import React from "react"
import {useState} from "react"
//toh hume useDispatch milta hain react redux se
import {useDispatch} from "react-redux"
import {addTodo} from "../feautres/todos/todoSlice"

//abh joh addtodo ha usme ayega simple ek form 
//Syntax joh abh hum krne wale hain => Addtodo store me kuch add krna hain aur add kese hota hain dispatch se toh kuch nah kuch event dispatch krna hoga 
function AddTodo() {
   
   const[input , setInput] = useState("")
   //syntax for dispatch 
   const dispatch = useDispatch()

   const addTodoHandler = (e)=> {
    //preventdefault as ki form automatically submit nah ho 
      e.preventDefault()

      //dispatch kya krta ha ek reducer ko use krke store me changes krta hain value mein its a method abh konsa method use kroge so u need to import ur individual methods joh humne declare kre reducers me toh hum apne individual reducer ko le ayenge on top abh jabh import krdiya so dispatch ke andar hi reducer ko call krna padta hain 

      //but humne apne addTodo me ek action.payload bhi dena ha humne likha tha todoSlice.js file me voh tha input ke liye aur humari yaha state ha input jisme text hai toh usse bhejdenge direct abh syntax change hogya hain
      dispatch(addTodo(input))
      //jabh todo add hogya then todo empty krdo as achi practice ha vaha kuch show nah ho add hone ke baad 
      setInput("")
   }

    return (
       <>
  
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
    </form>

       </>
    )
}
export default AddTodo