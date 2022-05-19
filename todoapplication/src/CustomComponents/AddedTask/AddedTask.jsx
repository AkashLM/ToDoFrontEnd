import '../AddedTask/AddedTask.scss';
import TaskLister from '../TaskLister/TaskLister';

const AddedTask =()=>{

    return(
        <div className='Task-Right-Container-Wrapper'>
            <TaskLister />
            <TaskLister />
            <TaskLister />
            <TaskLister />
            <TaskLister />
            
        </div>
    );
}
export default AddedTask;