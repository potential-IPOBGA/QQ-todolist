import {useContext, useState} from "react";
import {TodoContext} from "./TodoList";
import {Button, Input, Typography} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';

const {Title} = Typography;

const AddTodo = () => {
    const dispatch = useContext(TodoContext);
    const [id, setId] = useState(0);
    const [input, setInput] = useState('');

    const handleChangeTodo = evt => {
        evt.preventDefault();
        setInput(evt.target.value);
        evt.target.value = '';
    };

    const handleAddClick = (() => {
        dispatch({ type: "ADD_TODO", payload:
                {id: id, name: input, checked: false, disabled: true}
        });
        setInput('')
        setId(id => id+1)
    });

    return (
        <>
            <Title level={5}>Add Todos</Title>
            <Input placeholder="plz write your to-dos" style={{width: '40%'}} size='large' allowclear
                   onChange={handleChangeTodo}
                   value={input} type="text" onPressEnter={handleAddClick}/>
            <Button type='primary' size='large' onClick={handleAddClick} icon={<PlusCircleOutlined />}>ADD</Button>
        </>
    );
};

export default AddTodo;