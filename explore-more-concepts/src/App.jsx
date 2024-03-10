import './App.css'
import Timer from './Timer';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button clicked from arrow function')
  }

  const addToFive = (num) =>{
    alert(num*5)
  }


  return (
    <>
     
      <h3>Explore more concepts of React</h3>


      <Friends></Friends>
      <Users></Users>
      <Team></Team>
       <Timer></Timer>


      {/* <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClick2}>Click Me2!</button>
      <button onClick={()=>{alert('button clicked from inline js')}}>Click Me3!</button> */}
      
      {/* complex  */}
       {/* <button onClick={() =>addToFive(5)}>Add</button> */}


       
    </>
  )
}

export default App
