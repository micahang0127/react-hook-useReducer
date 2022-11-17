export const todoReducer = (todos, {type, payload}) => {
    switch (type) {
      case "ADD_TODO":      
        return [...todos, {'text': payload, 'status': 'todo', id: todos.length+1}];
      case "SET_INIT_DATA":
        return payload;  
      case "CHANGE_TODO_STATUS":
        return todos.map(todo => {
          if(todo.id === +payload) {
            if(todo.checked === true) todo.checked = false;
            else todo.checked = true;
          }
          return todo;
        });
      default:
        break;
    }
  };