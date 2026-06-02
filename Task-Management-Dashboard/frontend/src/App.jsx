import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'

import './App.css'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
   <body>
    <h1>Task Management Dashboard</h1>
    <AppRoutes/>
    <NavBar/>
    <Button>Hello</Button>
     <Button variant="primary">
        Save
      </Button>

      <Button variant="success">
        Create
      </Button>

      <Button variant="danger">
        Delete
      </Button>

      <Button variant="default">
        Cancel
      </Button>

      <Button
        variant="success"
        size="large"
        onClick={() => alert("Submitted")}
      >
        Submit
      </Button>

      <Button
        variant="danger"
        shape="circle"
      >
        X
      </Button>

      <Button
        variant="primary"
        shape="square"
      >
        +
      </Button>
    



   </body> 
  )
}

export default App
