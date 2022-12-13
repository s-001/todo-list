import React, {useContext, useState} from 'react';
import {ToDoContext} from "../../reducer";
import PopUp from "../UI/PopUp";
import deleteIcon from '../../images/Vector.png';
import './styles.css'

const Item = ({todo}) => {
    const {changeToDoToggle} = useContext(ToDoContext)
    const [popUpVisible, setPopUpVisible] = useState(false);


    function changeToggle() {
        changeToDoToggle(todo.id);
    }

    return <div className='todoItem'>
        <PopUp children="Are you sure you want to delete?" id={todo.id} visible={popUpVisible}
               setVisible={setPopUpVisible}/>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={changeToggle}
        />
        <h2>{todo.title}</h2>
        <img
          onClick={() => setPopUpVisible(true)}
          src={deleteIcon}
          alt="x"
        />
    </div>
};

export default Item;