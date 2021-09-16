import React, {useState} from "react";
import {Button, Input, Typography} from "antd";

const {Title} = Typography;

const TodoListForm = ({todos, setTodos}) => {
    const [id, setId] = useState(0);
    const [input, setInput] = useState('');

    const onInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        e.target.value = '';
    };
    const handleAdd = () => {
        setTodos([...todos, {id: id, name: input, disabled: true}])
        setId(id => id + 1)
        setInput('')
    };

    return <>
        <Title level={5}>Add Todos</Title>
        <Input placeholder="plz write your to-dos"
               style={{width: '50%'}}
               allowClear
               value={input}
               onChange={onInputChange}
        />
        <Button type={"primary"} onClick={handleAdd}> Add </Button>
    </>
}

export default TodoListForm;