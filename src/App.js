import React from 'react';
import Header from './Header';
import List from './List';
import Form from './Form';
import TodoStore from './TodoStore';
import './App.css';

const App = () => {
    return (
        <TodoStore>
            <Header />
            <Form />
            <List />
        </TodoStore>    
    )
}

export default App;