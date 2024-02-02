import { useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import 'App.css'
import Task from 'components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Task List</h1>
      <Task task={{id: 1, title: "Build Website", state: "NORMAL"}} onArchiveTask={() => {}} onPinTask={()=> {}} />
    </>
  )
}

export default App
