import React, { useState } from 'react';
import "./DisplayEditList.css"


export const DisplayEditList = () => {

  const displayArray = ["a", "b", "c", "d", "e"];

  const [showList, setShowList] = useState(displayArray);
  const [addLists, setAddLists] = useState();


  const onInputChange = (e) => {
    setAddLists(e.target.value);
  };

  const removeItem = (index) => {
    setShowList(showList.slice(0, index).concat(showList.slice(index + 1)))
  }
  const addList = (newList) => {
    setShowList([...showList, newList])
  }

  return (
    <div className='DisplayEditList'>
      <h1>Display & Edit List</h1>
      <div>
        <input type="text"
          className='taskInput'
          value={addLists}
          onChange={onInputChange} />

        <button type='submit'
          className='btnAdd'
          onClick={() => addList(addLists)}
          disabled={!addLists}>
          ADD
        </button>
      </div>
      <div>
        <h3>Show Array Lists</h3>
        {
          showList.map((list, index) => (
            <li
              className='itemList'
              onClick={() => removeItem(index)}
            >
              <span className="list-item-content">{list}</span>
            </li>
          ))
        }
      </div>
    </div>


  )
}
