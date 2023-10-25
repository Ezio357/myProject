// header (будет везде. благодаря header'у будет маршрутизация)

import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
        <ul className='title'>
            <li><Link to='/' className='button'>Главная</Link></li>
            <li><Link to='/bio' className='button'>Науки</Link></li>
            <li><Link to='/other' className='button'>Чат</Link></li>
        </ul>
    </>
  )
}
