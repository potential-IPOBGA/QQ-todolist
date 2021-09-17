const listReducer = (todos, action) => {
    const actionTodo = action.payload;
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, actionTodo];
        case "DELETE_TODO":
            return todos.filter(todo => todo.id !== actionTodo.id);
        case "EDIT_TODO":
            return todos.map(todo => ({
                ...todo,
                disabled: actionTodo.id === todo.id ? !todo.disabled : todo.disabled
            }));
        case "EDIT_COMPLETE":
            return todos.map(todo => {
                if (actionTodo.id === todo.id) {
                    return {...todo, name: actionTodo.name, disabled: !todo.disabled}
                }
                return todo;
            })
        case "DELETE_ALL":
            todos = [];
            return todos;
        default:
            return todos;
    }
};
export default listReducer;