import React, {useContext, useState} from 'react';
import {ToDoContext} from '../../reducer';
import './styles.css'
import vector from "../../images/Vector.png"

const Form = () => {
      const {addNewToDo, showFilteredList} = useContext(ToDoContext);
      const [inputValue, setInputValue] = useState('')
      const [completed, setCompleted] = useState(false);
      const [isInputActive, setIsInputActive] = useState(false);

      function setFilteredList() {
          setCompleted(!completed);
          showFilteredList(completed)
      }


      function handleAddNewToDo() {
          addNewToDo(inputValue)
          setInputValue('')
      }

      return (
        <div>
            <div style={{height: 100, display: "flex", justifyContent: "flex-end"}}>
                <div>
                    <input
                      type="checkbox"
                      value={completed}
                      onChange={setFilteredList}
                    />
                    <span>Hide completed</span>
                </div>
            </div>
            <div className="form">
                <input
                  value={inputValue}
                  className="input"
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                          handleAddNewToDo()
                      }
                  }}
                  onFocus={() => setIsInputActive(true)}
                  onBlur={() => setIsInputActive(false)}

                />
                {isInputActive && <div style={{position: "relative"}}>
                    <img style={{position: "absolute", right: 50, top: 18}} src={vector} alt="vector"/>
                </div>}
                <button
                  className='button'
                  onClick={handleAddNewToDo}
                > Add
                </button>
            </div>
        </div>
      );
  }
;

export default Form;