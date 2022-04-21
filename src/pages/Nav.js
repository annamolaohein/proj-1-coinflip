import React from 'react'
import {BrowserRouter as Router, Route,Link, NavLink, Routes} from 'react-router-dom'
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";
import { CountApple } from "../component/CountApple";
import { TextMirror } from "../component/TextMirror";
import { NeatBirthdayList } from "../component/NeatBirthdayList";
import { DisplayEditList } from "../component/DisplayEditList";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HomePage } from './HomePage';
// import EmotionTest from '../component/EmotionTest';

function Nav() {
  return (
   <Router>
        <div css={styles.myDiv}>
            <Link exact to="/" className='home'>Home</Link>
            {/* <NavLink exact activeClassName='active' to='/emotion' className='home'>Emotion Test</NavLink> */}
            <NavLink exact activeClassName='active' to='/coin' className='home'>Coin Flip</NavLink>
            <NavLink exact activeClassName='active' to='/random' className='home'>Random in Range</NavLink>
            <NavLink exact activeClassName='active' to='/counting' className='home'>Counting Apples</NavLink>
            <NavLink exact activeClassName='active' to='/textMirror' className='home'>Text Mirror</NavLink>
            <NavLink exact activeClassName='active' to='/neatBirthday' className='home'>Neat Birthday List</NavLink>
            <NavLink exact activeClassName='active' to='/display' className='home'>Display & Edit List</NavLink>
            {/* <hr/> */}
            <Routes>
                
                <Route exact path='/' element={<HomePage/>}/>
                {/* <Route exact path='/emotion' element={<EmotionTest/>}/> */}
                <Route exact path='/coin'  element={<CoinFlip/>}/>
                <Route exact path='/random' element={<Random/>}/>
                <Route exact path='/counting' element={<CountApple/>}/>
                <Route exact path='/textMirror' element={<TextMirror/>}/>
                <Route exact path='/neatBirthday' element={<NeatBirthdayList/>}/>
                <Route exact path='/display' element={<DisplayEditList/>}/>
            </Routes>
        </div>
   </Router>
  )
}

export default Nav

const styles = {
    myDiv: css`
    padding-top: 10px;
    & .home{
        padding-right: 20px;
    }
    `,

}


