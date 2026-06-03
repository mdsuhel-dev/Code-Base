import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Button from './components/Button'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Task Management Dashboard</h1>
    <AppRoutes/>
    
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

      



   </div> 
  )
}

export default App
