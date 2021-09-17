import React, {useReducer} from "react";
import listReducer from "./listReducer";
import AddTodo from "./addTodo";
import TodoItems from "./TodoItems";

const TodoContext = React.createContext();

const TodoList = () => {
    const [todos, todosDispatch] = useReducer(listReducer, [])

    return (
        <TodoContext.Provider value={todosDispatch}>
            <div className="todo-list">
                <AddTodo />
                <br/>
                <TodoItems todos={todos}/>
            </div>
        </TodoContext.Provider>
    );
};

export {TodoContext, TodoList}