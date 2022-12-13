import {useContext, useState} from "react";
import './App.css';
import Form from "./components/Form";
import List from './components/List';
import ToDoContextProvider, {ToDoContext} from "./reducer";

function App() {

  return (
    <ToDoContextProvider>
      <div className='app'>
          <Form />
          <List />
      </div>
    </ToDoContextProvider>

  );
}

export default App;
