import "../AddTaskContainer/AddTask.scss";

const AddTask = (Props) => {
  const { display } = Props;
  console.log("Add task:", display);
  return (
    <div className="Task-Container">
      <div className="Task-Container-Header">New Task</div>
      <div className="Task-Container-Add-Title">
        <input
          className="InputBox-Title"
          type="text"
          placeholder="Title of task"
        ></input>
      </div>
      <div className="Task-Container-Add-Desc">
        <textarea
          className="Desc-area"
          rows="6"
          cols="32"
          placeholder="Description"
        />
      </div>
      <div className="Task-Container-Add-Timer">
        <input type="datetime-local" className="Date-Time" />
      </div>
      <div className="Task-Container-Add-Btn">Add new Task</div>
    </div>
  );
};

export default AddTask;
