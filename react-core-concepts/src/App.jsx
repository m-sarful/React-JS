import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Toodo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

    const actors = ['Nisho', 'Apurba', 'Hasan', 'Mosharaf', 'Niloy'];

    const singers = [
      {name: 'Imran', age: 34},
      {name: 'Milon', age: 32},
      {name: 'Endro kishore', age: 56},
      {name: 'Bacchu', age: 57}
    ]




  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }

    <Actor name={'Bappa Raj'}></Actor>

{    
actors.map(actor=><Actor name={actor}></Actor>)
    }

      {/* <Todo
        task="learn react"
        isDone={true}>
      </Todo>
      <Todo
        task="explore react core concepts"
        isDone={false}>

      </Todo> */}




      {/* <Device name="laptop" price="32000"></Device>
        <Device name="mobile" price="12000"></Device>
        <Device name="watch" price="3000"></Device>
        <Person></Person>     
        <Student grade="7" score="23"></Student>   
        <Student></Student>   
        <Student></Student>   
        <Developer></Developer>     */}

    </>
  )
}

function Device(props) {
  // console.log(props);
  return (
    <div>
      <h3>This device is: {props.name}</h3>
    </div>
  )
}

function Person() {
  const age = 23;
  const money = 25;
  const student = { name: 'Sarful', roll: 43, group: 'science' }
  return <h3>Iam a person {student.name} with age {age} and money {money} and total {age + money}</h3>
}


const { grade, score } = { grade: '7', score: '23' }
function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <p>class: {grade}</p>
      <p>Roll: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '15px',
    border: '2px solid purple',
    borderRadius: '20px',
  }
  return (
    <div style={developerStyle}>
      <h3>SarFul</h3>
      <h4>Coding:</h4>
    </div>
  )
}

export default App
