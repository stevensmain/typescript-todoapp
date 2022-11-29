import { Task } from '../interfaces/type'
import { useDispatch } from "react-redux";
import { deleteTask, markComplete, selectTask } from '../redux/slices/tasksSlice';

interface props {
  task: Task;
}

const TaskCard = ({ task }: props) => {

  const { id, title, description, complete } = task
  const dispatch = useDispatch()

  return (
    <div className='card rounded-2 bg-light col-md-5' key={id}>
      <div className="card-body">
        <h2 className='card-title'>{title}</h2>
        <p className='card-text m-0'>{description}</p>
        <span className='card-text'>ID: {id}</span>
        <fieldset className="form-group">
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={complete}
              onChange={() => dispatch(markComplete(id))}
            />
            <label className="form-check-label" >
              Complete
            </label>
          </div>
        </fieldset>
        <div className="d-inline-flex gap-2">
          <button className='btn btn-info mt-4' onClick={() => dispatch(selectTask(task))}>Edit</button>
          <button className='btn btn-danger mt-4' onClick={() => dispatch(deleteTask(id))}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard