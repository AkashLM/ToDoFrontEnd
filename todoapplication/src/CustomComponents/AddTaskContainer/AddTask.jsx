import { useState } from "react";
import "../AddTaskContainer/AddTask.scss";
import axios from "axios";

const AddTask = (Props) => {
  const { display, setDisplay } = Props;

  let MyData = {
    name: "",
    descr: "",
    time: "",
  };
  //To store current page data

  const [title, setTitle] = useState("");
  const [descR, setdescR] = useState("");
  const [time, setTime] = useState("");
  function SetNewTask() {
    MyData = {
      name: { title },
      descr: { descR },
      time: { time },
    };

    setDisplay(false);

    const setData = () => {
      const res = axios.post("http://localhost:8080/", {
        body: {
          name: "akash",
          desr: "lorem ispum",
          time: "10/10/2022",
        },
      });
    };
    setData();
  }
  console.log(display);

  return (
    <>
      {display ? (
        <div className="Task-Container">
          <div className="Task-Container-Header">New Task</div>
          <div className="Task-Container-Add-Title">
            <input
              className="InputBox-Title"
              type="text"
              value={title}
              onChange={(Event) => {
                setTitle(Event.target.value);
              }}
              placeholder="Title of task"
            ></input>
          </div>
          <div className="Task-Container-Add-Desc">
            <textarea
              className="Desc-area"
              value={descR}
              rows="6"
              cols="32"
              placeholder="Description"
              onChange={(Event) => {
                setdescR(Event.target.value);
              }}
            />
          </div>
          <div className="Task-Container-Add-Timer">
            <input
              type="datetime-local"
              className="Date-Time"
              value={time}
              onChange={(Event) => {
                setTime(Event.target.value);
              }}
            />
          </div>
          <div className="Task-Container-Add-Btn" onClick={SetNewTask}>
            Add New Task
          </div>
        </div>
      ) : (
        <div className="Dummy-Task-Container"></div>
      )}
    </>
  );
};

export default AddTask;
