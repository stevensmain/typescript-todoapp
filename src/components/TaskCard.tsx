import { Task } from '../interfaces/Tasks'

interface props {
  task: Task;
  selectTask: (task: Task) => void;
  handleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskCard = ({ task, selectTask, handleComplete, deleteTask }: props) => {

  const { id, title, description, complete } = task

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
              onChange={() => handleComplete(id)}
            />
            <label className="form-check-label" >
              Complete
            </label>
          </div>
        </fieldset>
        <div className="d-inline-flex gap-2">
          <button className='btn btn-info mt-4' onClick={() => selectTask(task)}>Edit</button>
          <button className='btn btn-danger mt-4' onClick={() => deleteTask(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard