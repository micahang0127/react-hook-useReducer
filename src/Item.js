import React, {useContext} from 'react';
import './Item.css';
import { TodoContext } from './TodoStore';

//const Item = ({todo, changeTodoStatus}) => {
//const Item = ({todo,dispatch}) => {    
const Item = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const toggleTodo = (e) => {
        const id = e.target.dataset.id;
        //changeTodoStatus(id);
        dispatch({type:'CHANGE_TODO_STATUS',payload:id});
    }

    const itemClassName = todo.checked === true ? 'done':'';
    return (
        <li data-id={todo.id} onClick={toggleTodo} className={itemClassName}>
            {todo.text}
        </li>
    );
};

export default Item;