import { Task } from '../interfaces/type'
import TaskCard from './TaskCard'

interface props {
    tasks: Task[]
}

const TaskList = ({ tasks }: props) => {
    return (
        <section className='col-md-8'>
            <div className="row gap-3">
                {tasks.map(task =>
                    <TaskCard key={task.id} task={task} />
                )}
            </div>
        </section>
    )
}

export default TaskList