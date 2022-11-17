import React, {useEffect, useReducer} from 'react';
import useFetch from './useFetch';
import { todoReducer } from './reducers';

export const TodoContext = React.createContext();


const TodoStore = (props) => {
  //const [todos, setTodos] = useState([]);
  //const [newTodo, setNewTodo] = useState('');

  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const api_url = 'http://localhost:4500/api/todos';

  const setInitData = (initData) => {
    dispatch({type:'SET_INIT_DATA', payload:initData});
  };

  const loading = useFetch(setInitData, api_url);  

  //const addTodo = (newTodo) => {
    //e.preventDefault();
    //const todo = {'title': newTodo, 'status': 'todo', id: todos.length+1}
    //setTodos([...todos, todo]);
    //setNewTodo("");
  //};

  // const changeTodoStatus = (id) => {
  //   //debugger;
  //   const updateTodos = todos.map(todo => {
  //     if(todo.id === +id) {
  //       if(todo.status === "done") todo.status = "todo";
  //       else todo.status = "done";
  //     }
  //     return todo;
  //   });
  //   console.log('갱신된 todos : ');
  //   console.log(updateTodos);
    //setTodos(updateTodos);
  //};

  useEffect(() => {
    console.log("todos를 관찰하는 userEffect", todos);
  }, [todos]);


  return (
    <TodoContext.Provider value={{todos, loading, dispatch}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;