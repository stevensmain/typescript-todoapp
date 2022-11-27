import { Task } from '../interfaces/Tasks'
import TaskCard from './TaskCard'

interface props {
    tasks: Task[],
    selectTask: (task: Task) => void;
    handleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, selectTask, handleComplete, deleteTask }: props) => {
    return (
        <section className='col-md-8'>
            <div className="row gap-3">
                {tasks.map(task =>
                    <TaskCard
                        task={task}
                        selectTask={selectTask}
                        handleComplete={handleComplete}
                        deleteTask={deleteTask}
                    />
                )}
            </div>
        </section>
    )
}

export default TaskList