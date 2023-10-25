// информация о науках
import React from 'react'
import './Bio.css'
import { Link } from 'react-router-dom'

export default function bio() {
  return (
    <div className='bioInfo'>
        <h1 className='titleBios'>науки об организме человека (кликните по науке)</h1>
        <ol className='list'>
          <ul className='chapter glav'><h5><Link to='/med' className='linkStyle'>медицина</Link></h5></ul>
          <ul className='chapter'><h5><Link to='/anatom' className='linkStyle'>анатомия</Link></h5></ul>
          <ul className='chapter'><h5><Link to='/ph' className='linkStyle'>физиология</Link></h5></ul>
          <ul className='chapter'><h5><Link to='/hygien' className='linkStyle'>гигиена</Link></h5></ul>
          <ul className='chapter'><h5><Link to='/ps' className='linkStyle'>психология</Link></h5></ul>
        </ol>
    </div>
  )
}
