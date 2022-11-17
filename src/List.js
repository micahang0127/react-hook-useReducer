import React, {useContext} from 'react';
import Item from './Item';
import { TodoContext } from './TodoStore';

const List = () => {
    //const {todos, loading, changeTodoStatus} = useContext(TodoContext);
    //const {todos, loading, dispatch} = useContext(TodoContext);
    const {todos, loading} = useContext(TodoContext);

    let todoList = <div>loading...</div>
    if(!loading) todoList = todos.map((todo) => <Item key={todo.id} todo={todo} />);
    return (
            <ul>
                {todoList}
            </ul>
    );
};

export default List;