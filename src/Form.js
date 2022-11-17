import React, {useContext, useRef} from 'react';
import { TodoContext } from './TodoStore';

const Form = () => {
    //const {addTodo} = useContext(TodoContext);
    const {dispatch} = useContext(TodoContext);
    const inputRef = useRef(false);

    const addTodoRef = (e) => {
        e.preventDefault();        
        //addTodo(inputRef.current.value);
        dispatch({type:'ADD_TODO', payload:inputRef.current.value});
        inputRef.current.value = "";
    };

    return (
        <div>
            <form action="">
                <input type="text" ref={inputRef} />
                <button onClick={addTodoRef}>할일추가</button>
            </form>
        </div>
    );
};

export default Form;