import {Button} from "antd";
import {useContext} from "react";
import {TodoContext} from "./TodoList";

const ClearAll = () => {

    const dispatch = useContext(TodoContext);
    const handleDeleteAll = () => {
        dispatch({type: "DELETE_ALL"});
    }

    return (
        <>
            <Button size={'medium'} type='primary' onClick={handleDeleteAll}> Clear All </Button>
        </>
    )
}
export default ClearAll