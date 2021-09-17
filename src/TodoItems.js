import {useContext, useState} from "react";
import {Button, Input, Space} from "antd";
import {EditOutlined, DeleteOutlined, CheckCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {TodoContext} from "./TodoList";
import ClearAll from "./Clear";
import Modal from "antd/es/modal/Modal";


const TodoItems = (state) => {
    const todos = state.todos;
    const dispatch = useContext(TodoContext);
    const [input, setInput] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleEnter = (id) => {
        dispatch({
            type: "EDIT_COMPLETE", payload:
                {id: id, name: input}
        });
    }

    const handleConfirm = (id) => {
        dispatch({type: "DELETE_TODO", payload: {id: id}});
        setIsModalVisible(false);
    }

    const handleEdit = (id) => {
        dispatch({type: "EDIT_TODO", payload: {id: id}})
    }

    return (
        <>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <br/>
                        <Input key={todo.id} checked={todo.checked} className="hidden" disabled={todo.disabled}
                               placeholder={todo.name}
                               style={{width: '30%'}}
                               onPressEnter={() => handleEnter(todo.id)}
                               onChange={(e) => setInput(e.target.value)}
                        />
                        <Space align='center'>
                            {todo.disabled ?
                                <Button type='primary' size={'Large'} onClick={() => handleEdit(todo.id, todo.name)}>
                                    <EditOutlined/>Edit
                                </Button> :
                                <Button type='dashed' size={'Large'} onClick={() => handleEdit(todo.id, todo.name)}>
                                    <CheckCircleOutlined/>Check
                                </Button>
                            }
                            <Button type='dashed' danger size={'Large'} onClick={() => showModal()}>
                                <DeleteOutlined background-color='#ffccc7'/>Delete
                            </Button>
                            <Modal title="Just a Confirmation" visible={isModalVisible} onOk={() => handleConfirm(todo.id)} onCancel={handleCancel}>
                                <span>Hi Dude, Do U really want to delete this TODO?</span>
                            </Modal>
                        </Space>
                    </div>
                )
            })}
            <br/>
            <ClearAll/>
        </>
    )
}
export default TodoItems