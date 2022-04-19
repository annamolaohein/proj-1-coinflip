import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import styled from '@emotion/styled';

// const Heading = styled('h1')`
//   background-color: ${props => props.bg};
//   color: ${props => props.fg};
// `;

function EmotionTest() {
  return (
    <div>
      <div css={css({
        margin: 10,
        padding: 10,
        color: 'red',
        backgroundColor: '#eee',
      })}>
        This is an example of <code>`css`</code> using an object.
      </div>
      <div css={css`
      margin: 10px;
      padding: 10px;
      background-color: #eee;
    `}>
        This is an example of <code>`css`</code> using a tagged template literal.
      </div>
    </div>
  //   <div>
  //   <Heading bg="#008f68" fg="#fae042">
  //     Heading with a green background and yellow text.
  //   </Heading>
  // </div>
  )
}

export default EmotionTest