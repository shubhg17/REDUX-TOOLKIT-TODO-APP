//todo.js bhi likhte tabh bhi theek tha but yeh naming convention ha ki aap abhi redux toolkit use kr rhe ho isliye slice use kiya 


//hum yaha 2 method use krenge slice ko banane ke liye ek se bhi krskte hain 

//see redux ko pta ha ki esa kaam hota rhega kuch arrays ate jayenge kuch values ate jayenge toh apko nanoid se ek method provide hota hain aur yeh unique id generate krta hain 
import {createSlice , nanoid} from "@reduxjs/toolkit"


//abh store ke andar sabse imp cheez hoti hain initial state  ki store starting me kesa dikhega empty hoga ya kuch value hogi initial state array bhi hoskti hain aur object bhi hoskti hain 

const initialState = {
   todos: [{id:1 , text:"Hello World"}]
}

// function sayHi() {
//    console.log("Hello")
// }

// abh hum dekhenge ki hum kis tareeke se slice banayenge slice kya ha reducer ka almost ek bada version hi hain reducer kya ha functionality hain aur kuch nhi hain aur isko hum export bhi krlete as hume baad me isko kaam bhi me bhi lena hain 

//iss me bhi object ata hain aur slices ke kuch naam hote hain  apke upar depend krta hain ki aap kya naam rakhna chahte hon but joh bhi naam rkhoge thoda soch ke kyuki jabh hum redux toolkit ka use krenge chrome extension ka toh vaha pe yehi naam show hoga
export const todoSlice = createSlice({
     // yeh name property mene khud se nhi banai yeh redux toolkit me hoti ha khud se yehi property ka naam hota hain name  aur value me string ayegi joh string de do
     name: "todo" , 
     //second property joh tum dete hon har slice ka ek initial state hota hain 
     initialState,
     //reducers ek property hi hain reducers ek object hain aur isme ata kya hain isme ata hain properties aur function 
     reducers: {
      //addTodo meri property hain aur iss property me tumhe apna function likhna padta hain function hoskta hain tumne kayi aur declare kra ho jese upar sayHi bana rkha hain toh idhar tum uss function ka reference pass kroge call nhi kroge 
      //  addTodo: sayHi
      //direclty func bhi likhskte ho yahan
      //Hum context api me create context jabh bana rhe the tabh hum sirf define kr rhe the functionality hum de rhe the app.jsx but redux toolkit me hum functionality bhi yahi dete hain 
      //jese useState useEffect aur bhi hooks ka syntax hota ha toh har bari addTodo me tumhe 2 parameters milenge state and action hamesha inka access milega  state joh ha tume abhi initialState kya ha voh dega aur action kya hota hain abh kayi bari hoskta hai ki kuch values aaye abh jese remove toh remove apne aap toh remove nhi hoga uske liye id chaiye hogi toh kuch values mujhe bhi toh chaiye hogi jabh me removeTodo wale method ko call krunga voh values action me se milti hain 
      addTodo: (state , action)=> {
         //abh idhar todo lana ha toh jese id milegi action se same todo bhi action se milega 
         //toh todo banaya object format me as upar initialState me arrays me object jayega todos ke liye
         const todo = {
            //tum idhar id me Date.now() bhi deskte ho but hume nanoid se krenge just for practice 
            id: nanoid(),
            //aur text me har bhari hello world toh nhi ayega lets say user ne input dala text toh voh ana chaiye so we use action and then action.payload here payload is object iss se value ayegi humne action.payload.text vese hona chaiye tha but text key bhi ha isliye sirf ese likhdiya 
            //abhi tumne sirf todo banaya ha but state me thoda gya ha humne initialstate ko update krna padega 
            text:action.payload
         }
         //here state will contain our initialState aur tum todos me push kr rhe ho apne todo ko  idhar hum direclty add krdenge varna contextapi me hume phele spread krna padta ha purani states ko then add krte the idhar nhi krenge esa direct kyuki idhar state preserve rheti hai contextapi me nhi rehti thi 
         //push as voh array ha   js ka concept ha yeh
         state.todos.push(todo)
      },
      //idhar bhi state aur action milega 
      removeTodo: (state , action)=> {
           //hum apne state.todos mtlb apne todos ko overwrite krenge with help of filter jese delete krte hain same wohi idhar hume call back ke baad ()=>() auto return use krne ki zarurat nhi hain 
         state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
      },
    
          
     }
})

//todoSlice yaha tumne export krdiya but yeh ese direclty export nhi hota apko 2 part iske export krne padte hain yeh bhi syntax hain 

//Toh sabse phele hum apni sari functionality ko export krenge kyu export krenge kyuki joh yeh reducers hain nah addtodo , removeTodo aur bhi toh hum unke through hi apni state ko update krenge toh yeh functionality individually kaam me ayegi toh inh functionality ko export krdete hain  humne idhar individual functionality export kri as yeh humare components me kaam ayega 

//here todoSlice.actions me se iss actions me se values mil jayegi mtlb methods 
export const {addTodo , removeTodo} = todoSlice.actions

//but humara abhi store khali ghum rha hain toh uss store ko bhi awareness chaiye yeh sare reducers ki agar uspe awareness nhi ha insare reducers ki then voh store maintain nhi kr payega kyuki voh sirf un reducers ki value ko update krta hain joh reducers usme registered hain toh ussko sare reducers ka list chaiye hoti hain 
export default todoSlice.reducer