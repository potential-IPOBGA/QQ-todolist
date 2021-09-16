import {Button, Input, Space} from "antd";
import React, {useState} from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import './todo-list.less';

const TodoListItem = ({todos, setTodos}) => {
    const [input, setInput] = useState('');

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, disabled : false }
            }
            return todo;
        }))
    }

    const handleEnter = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, name: input, disabled : true }
            }
            return todo;
        }))
    }

    return (
        <div>
            <br/>
            {todos.map(item => {
                return <div key={item.id}>
                    <Input className="hidden" disabled={item.disabled}
                           placeholder={item.name}
                           style={{width: '30%'}}
                           onPressEnter={()=>handleEnter(item.id)} onChange={(e)=>setInput(e.target.value)}/>
                    <Space>
                        <EditOutlined size={'small'} onClick={() => handleEdit(item.id)}/>
                        <DeleteOutlined size={'small'} onClick={() => handleDelete(item.id)}/>
                    </Space>
                </div>
            })}
            <br/>
            <Button size={'medium'} type='primary' onClick={() => setTodos([])}> Clear All </Button>
            <Button onClick={()=>console.log(todos)}>Show Todos</Button>
        </div>)

};

export default TodoListItem