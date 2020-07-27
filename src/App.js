import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval) => {
              return <li>{itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
