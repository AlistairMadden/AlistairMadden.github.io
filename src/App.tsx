import 'App.css'
import Task from 'components/Task'

function App() {
  return (
    <>
      <h1>Task List</h1>
      <Task task={{id: 1, title: "Build Website", state: "NORMAL"}} onArchiveTask={() => {}} onPinTask={()=> {}} />
    </>
  )
}

export default App
