import './App.css'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  document.body.style.backgroundColor = 'lightblue'
  const [list, updateList] = useState([])
  const addToList = () => {
    const listItem = document.getElementById("listInput").value
    updateList([...list, listItem])
  }

  return (
    <>
    <div style={{backgroundColor: '#eaa0aeff', borderRadius: '10px' }}>
      <header><h1>To Do List</h1></header>
      <Card style={{backgroundColor: '#e7cbd0ff' }}>
      <Card.Body>
      <input id = "listInput" type= "text" style={{backgroundColor: "white", color: "black"}} placeholder = "Enter a task"/>
      <Button style={{backgroundColor: "white", color: "black"}} onClick ={addToList}>+</Button>
      <div id = "DisplayList">
        <ol>
          {list.map((item) => 
            <li>
              <div style={{backgroundColor: '#eaa0aeff', borderRadius: '25px'}} >{item}</div>
            </li>)}
        </ol>
      </div>
      </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default App
