
import '../AddTaskButton/AddButton.scss';
const AddButton=(Props)=>{

    const {display, setDisplay}=Props;

    function displayHandler(){
        setDisplay(!display);
    }

    return(
        <div className="Add-Btn" onClick={displayHandler}>
        </div>
    );

}

export default AddButton;