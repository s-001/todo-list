import React, {useContext} from 'react';
import cl from './styles.module.css';
import {ToDoContext} from "../../../reducer";

const PopUp = ({children, id, visible, setVisible}) => {

    const rootClasses = [cl.myModal];
    const {deleteToDo} = useContext(ToDoContext);

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
              <div>{children}</div>
              <div className={cl.btns}>
                  <button
                    className={cl.btn}
                    onClick={() => {
                        setVisible(false);
                        deleteToDo(id);
                    }}
                  >Yes</button>
                  <button
                    className={cl.btn}
                    onClick={() => setVisible(false)}
                  >No</button>
              </div>
          </div>
      </div>
    );
};

export default PopUp;
