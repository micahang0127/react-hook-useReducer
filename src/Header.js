import React, {useContext} from 'react';
import './Header.css';
import { TodoContext } from './TodoStore';

const Header = () => {
    const {todos} = useContext(TodoContext);
    return (
        <div>
            <h1>todo 어플리케이션</h1>
            <div className="countInfo">
                해야할일! {todos.filter(todo=>todo.checked === false).length}건이 있습니다.
            </div>
        </div>
    );
};

export default Header;