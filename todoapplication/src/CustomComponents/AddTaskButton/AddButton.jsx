import "../AddTaskButton/AddButton.scss";
const AddButton = (Props) => {
  const { display, setDisplay } = Props;

  function DisplayHandler (){
    setDisplay(!display)
  }


  return <div className="Add-Btn" onClick={ DisplayHandler}></div>;
};

export default AddButton;
