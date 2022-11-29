import { useState } from 'react'
import 'bootswatch/dist/solar/bootstrap.min.css'
import { Task } from './interfaces/type'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

interface appProps {
  title?: string
}

const INITIAL_TASK_SELECTED = {
  id: 0,
  title: '',
  description: '',
  complete: false
}

function App({ title = 'MyTODO' }: appProps) {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskSelected, setTaskSelected] = useState<Task>(INITIAL_TASK_SELECTED)

  const selectTask = (task: Task): any => setTaskSelected(task)
  const addANewTask = (newTask: Task): any => setTasks([newTask, ...tasks])
  const deleteTask = (id: number): any => setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  const handleComplete = (id: number): any => setTasks(prevTasks => prevTasks.map(task => id === task.id ? { ...task, complete: !task.complete } : task))
  const editTask = (newTask: Task): any => {
    setTasks(prevTasks => prevTasks.map(task => newTask.id === task.id ? newTask : task))
    setTaskSelected(INITIAL_TASK_SELECTED)
  }

  return (
    <main className="bg-dark w-full" style={{ minHeight: '100vh' }}>
      <header className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className="container p-4">
          <span className="navbar-brand">
            <img className='me-2' src='/checklist.png' alt="Checklist icon" style={{ width: '4rem' }} />
            {title}
          </span>
        </div>
      </header>
      <section className="container p-4">
        <div className="row gap-3 gap-md-0">
          <h1>Create a new task</h1>
          <TaskForm />
          <TaskList tasks={tasks} />
        </div>
      </section>
    </main>
  )
}

export default App
