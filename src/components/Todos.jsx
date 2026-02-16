import React from "react"
//lekin aap delete bhi toh kroge kyuki joh list ayegi arrays wali usme delete ka icon mtlb button bhi toh doge toh agar delete icon me de rha hun toh me kuch action lena chahta hun koi bhi action lunga toh usko dispatch krna hoga 
import {useSelector , useDispatch} from "react-redux"
//abh jabh dispatch use kroge then uske liye ek reducer hoga toh reducer lana padega aur voh kaha se milega meri slice me se  
import {removeTodo} from "../feautres/todos/todoSlice"
const Todos = ()=> {
  //useselector ka syntax ki me todos kese leke aun 
  //useSelector sirf ek method hain advantage yeh ha iss method ka ki apko isme state ka acess milta hain ek callback ke andar (state)=>  but agar value ek hi ha toh parenthesis nayi bhi lagaye callback toh koi dikkat nhi  toh state ke andar apko values miljayegi aur iss state ke andar se yeh joh pura store hain iske andar se joh bhi chaiye aap nikal skte hain fir isko variable me hold krliya 
  //so todos array hain toh todos kya hold kr rha ha array
  
  //access krna hain toh useSelector se access krlo 
  const todos = useSelector(state=>state.todos)
  //dispatch bhi use kroge toh usko bhi declare kro
  const dispatch = useDispatch()
   return (
    //  <>
    //    <div>Todos</div>
    //    {/* //abh loop lagao with help of map */}
    //     {todos.map((todo)=>(
    //        <li key={todo.id}>
    //            {todo.text}
    //            {/* //aur lets say agar button bhi chaiye delete krne ke liye so humne li me de diya as return tum sirf ek hi toh krskte ho isliye humne button li ke andar hi diya naki li ke bhar   */}
    //            <button onClick = {()=>dispatch(removeTodo(todo.id))}>Delete Button</button>
    //        </li>
    //        //this is wrong because u cant return more than one value in react syntax
    //       //  <button></button>
    //     ))}
    //  </>
    
   //kuch nhi bas tailwind aur add krdi 

    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
   )
}

export default Todos