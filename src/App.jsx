// Redux apne aap me ek individual state management library hain toh redux ko use krne ke liye redux aur react-redux dono use krene padenge to use redux as redux ek individual library hain aur usko connection dene ke liye react ke sath react redux miljata hain jese react ke sath react dom 

// //Concepts u will see in both redux and redux toolkit
// store-> ek global variable ki tarah banayenge aur vaha se sab le lenge
// reducers -> reducer kya hota ha ki apko agar store me kuch change krna hain konse store me change krna hain kyuki AUTH ka store , product ka store  , store toh ek hi hota ha but usske andar mini stores hoskte ha uss store ke functionality wala part reducers ke through hi jata hain 
// useSelector: jabh mujhe koi value select krni ha store se 
// useDispatch : jabh mujhe koi value bhejni hain dispatch krni hain 

//start kese kroge sabse phele store banayega then uske baad ap banaoge apne reducers ko 
import './App.css'
import AddTodo  from "./components/AddTodo"
import Todos from "./components/Todos"



function App() {

  return (
    //idhar bhi hume apne context api ke jese apne components ko wrap krna padta ha provider se aur voh hume milta ha react redux se aur same chaiye app.jsx me kro ya main.jsx me kro same baat toh do cheeze chaiye provider and second chaiye hota hain store store ko import hi krna padta ha hume use krne ke liye   isliye humne apne store.js me joh humne apna store banaya tha configureStore krke usko export kiya tha such that voh yaha import hoske hum yeh sabh video me main.jsx me import krenge
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
    
    
  )
}

export default App
