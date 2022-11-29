import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useAppSelector } from './redux/hooks'
import 'bootswatch/dist/solar/bootstrap.min.css'

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

  const { tasks } = useAppSelector(state => state.taskReducer)

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
