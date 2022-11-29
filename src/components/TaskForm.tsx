import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/hooks';
import { addTask, editTask } from '../redux/slices/tasksSlice';
import { useAppSelector } from '../redux/store';

interface formData {
    title: string;
    description: string;
}

const TaskForm = () => {

    const dispatch = useAppDispatch()
    const { tasks, selectedTask } = useAppSelector(state => state.tasks)

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<formData>();
    const onSubmit = handleSubmit((data: formData) => {
        if (selectedTask) {
            dispatch(editTask({ ...selectedTask, title: data.title, description: data.description }))
        } else {
            dispatch(addTask({ ...data, id: Date.now(), complete: false }))
        }
        reset()
    })

    useEffect(() => {
        if (selectedTask) {
            setValue('title', selectedTask.title)
            setValue('description', selectedTask.description)
        }
    }, [selectedTask])

    return (
        <div className="col-md-4 rounded-2">
            <div className="card">
                <form onSubmit={onSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label mt-4">Title</label>
                            <input
                                type="text"
                                className={errors.description ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Insert a title"
                                {...register('title', { required: 'This field is required' })}
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Description</label>
                            <input
                                type="text"
                                className={errors.description ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Insert a description"
                                {...register('description', { required: 'This field is required' })}
                            />
                            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm