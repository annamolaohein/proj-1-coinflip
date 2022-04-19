// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/css';
import React, { useState } from 'react';
import styled from '@emotion/styled'
// import "./DisplayEditList.css"


export const DisplayEditList = () => {

  const displayArray = ["a", "b", "c", "d", "e"];
  const [showList, setShowList] = useState(displayArray);
  const [addLists, setAddLists] = useState();


  const onInputChange = (e) => {
    setAddLists(e.target.value);
  };

  const removeItem = (delItem) => {
    setShowList(showList.slice(0, delItem).concat(showList.slice(delItem + 1)))
 

  }
  const addList = (newList) => {
    setShowList([...showList, newList])
  }

  return (
    <div className='DisplayEditList'>
      <h1>Display & Edit List</h1>
      <div>
          <Input 
          className='taskInput'
          type="text"
          value={addLists}
          onChange={onInputChange} />
        <Button 
          className='btnAdd'
          type='submit'
          onClick={() => addList(addLists)}
          disabled={!addLists}>
          ADD
        </Button>
      </div>
      <div>
        <h3>Show Array Lists</h3>
        {
          showList.map((list, delItem) => (
            // <li css={css({
            //   width: '50%',
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   border: '1px solid #004545',
            //   marginBottom: '1rem',
            //   padding: '2px',
            //   borderRadius: '0.5rem',
            //   marginLeft: '25%',
            // })}
            //   className='itemList'
            //   onClick={() => removeItem(delItem)}
            // >
            <Li
              className='itemList'
              onClick={() => removeItem(delItem)}
            >
              <span className="list-item-content">{list}</span>
            </Li>
          ))
        }
      </div>
    </div>
  )
}
const Button=styled.button`
    width: 70px;
    padding: 10px 10px;
    font-size: 15px;
    border-radius: 10px;
    background-color: #008b8b;
    cursor: pointer;`

const Input=styled.input`
outline: none;
    padding: 15px;
    margin-right: 25px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #008b8b;`

const Li=styled.li`
    width: 50%;
    align-items: center;
    justify-content: center;
    border: 1px solid #004545;
    margin-bottom: 1rem;
    padding: 2px;
    border-radius: 0.5rem;
    margin-left: 25%;
    &:hover{
      color: red;
      background-color: #7fc5c5;
    }`
