//sabse phele hum start krte ha store banane se har application ka ek hi store hota hain jise kehte hain single source of truth 

//store ese nhi banta neeche steps follow kro tum store kahi bhi banaskte ho esa kuch fix nhi ha ki folder create file add krke hi banega aap kahi bhi rakh skte ho store ko 

// steps 

//sabse phele tume configure store lekar ana hai kyuki vohi ek method ha  joki iss se kaam krta hain yeh kaha se aya ha core redux se aya hain naki react redux se iss se tumhara store bangya hain 
import {configureStore} from "@reduxjs/toolkit"
//toh apne reducer ko sabse phele import kro 
import todoReducer from "../feautres/todos/todoSlice"

//store bangya hain but abhi tayar nhi hai toh abh hum  iss method ko use krke ek varibale ko export krdete hain 

// yeh configureStore apne andar object hi leta hain 
export const store = configureStore({
   //object me key value dal do for reducers
   //key daldo reducer aur abhi apna joh ek reducer banaya ha voh daldo multiple bhi dalskte hain baad me dekhenge
    reducer: todoReducer
})