import React from 'react';
import ReactDOM from 'react-dom';
import './avatar.css'
import Avatarlist from './Avatarlist'
;
// Will work on the function 

const Avatar = (props) =>{                                 // creation of the function (in class we write the class and then render and then return ,here we after creating the function will directly point to the return function)
  return (<div>
         <h1 className='heading'>Welcome to the Avatar World</h1>
              <Avatarlist id='1' name='Binod' work='Web Developer' />
              <Avatarlist id='2' name='Bahadur' work='Web Developer'/>
              <Avatarlist  id='3' name='Thapa ' work='Web Developer'/>
              <Avatarlist  id='4' name='ThapaTechnical' work='web Developer'/ >

  <button> Subscribe  </button>
  </div>
  )
}

export default Avatar;