import React, {useContext} from 'react';
import './styles.css'
import Item from "../Item";
import {ToDoContext} from "../../reducer";

const List = () => {
    const {todos} = useContext(ToDoContext)

    return (
      <div className='list-container'>
          {
              todos.length ? todos.map(todo => <Item
                  key={todo.id}
                  todo={todo}
                />)
                : <div className='empty-list'>
                    <span>your life is a blank page. You write on it.</span>
                    <h2>So start by adding your tasks here.</h2>
                </div>
          }
      </div>
    );
};

export default List;