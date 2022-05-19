import "../TaskLister/TaskLister.scss";

const TaskLister = () => {
  return (
    <div className="Task-List-Container">
      <div className="Task-List-Header">
        <div className="Task-Pin"></div>
        <div className="Task-Title">Reach to Description</div>
      </div>
      <div className="Task-List-Description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae
        voluptas soluta ad ipsam commodi consectetur esse illum reiciendis
        accusantium molestias itaque iure veniam neque labore, magnam, officia
        earum dolore?
      </div>
      <div className="Task-List-Bottom">
        <div className="Task-List-Clock"></div>
        <div className="Task-List-Timer">25 mins left</div>
        <div className="Task-List-Dlt-Btn"></div>
      </div>
    </div>
  );
};
export default TaskLister;
