import React, {useState} from "react";
import {Typography} from 'antd';
import TodoListItem from "./TodoListItem";
import TodoListForm from "./TodoListForm";
import './todo-list.less';
import 'antd/dist/antd.css';

const {Title} = Typography;

const TodoForm = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className="Todos" align="center">
            <Title class='TodosTitle'>This is what you need to do!!!</Title>
            <TodoListForm todos={todos} setTodos={setTodos}/>
            <br/>
            <TodoListItem todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoForm;