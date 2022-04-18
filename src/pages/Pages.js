import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";
import { CountApple } from "../component/CountApple";
import { TextMirror } from "../component/TextMirror";
import { NeatBirthdayList } from "../component/NeatBirthdayList";
import { DisplayEditList } from "../component/DisplayEditList";
import styled from '@emotion/styled'
import { HomePage } from './HomePage';

function Pages() {
  return (
   <Router>
        <DIV>
            <Link exact to="/" className='home'>Home</Link>
            <NavLink exact activeClassName='active' to='/coin' className='home'>Coin Flip</NavLink>
            <NavLink exact activeClassName='active' to='/random' className='home'>Random in Range</NavLink>
            <NavLink exact activeClassName='active' to='/counting' className='home'>Counting Apples</NavLink>
            <NavLink exact activeClassName='active' to='/textMirror' className='home'>Text Mirror</NavLink>
            <NavLink exact activeClassName='active' to='/neatBirthday' className='home'>Neat Birthday List</NavLink>
            <NavLink exact activeClassName='active' to='/display' className='home'>Display & Edit List</NavLink>
            <hr/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/coin'  element={<CoinFlip/>}/>
                <Route exact path='/random' element={<Random/>}/>
                <Route exact path='/counting' element={<CountApple/>}/>
                <Route exact path='/textMirror' element={<TextMirror/>}/>
                <Route exact path='/neatBirthday' element={<NeatBirthdayList/>}/>
                <Route exact path='/display' element={<DisplayEditList/>}/>
             

            </Routes>

        </DIV>
   </Router>
  )
}

export default Pages

const DIV = styled.div`
.home{
    padding-right: 20px;
}
`

