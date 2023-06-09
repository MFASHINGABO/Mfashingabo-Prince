import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'



const HeaderSocials=()=> {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/mfashingabo-prince-0992ab228/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href='https://github.com/Mfashingabo' target="_blank" rel="noreferrer"><FaGithub/></a>
    <a href='https://Behance.net/mfashinprince' target="_blank" rel="noreferrer"><FaBehanceSquare/></a>
    </div>
  )
}

export default HeaderSocials