// прочее, содержащее задания для соответствия кретериям
import React from 'react'
import Chat from '../Chat'
import './Other.css'

export default function other() {
  return (
    <div className='chatSections'>
      <h1 className='titleChat'>Здесь можно опробовать наработки чата</h1>
      <div className="Chat">
      <Chat className='styleChat'/>

      {/* Database */}
      <div className="aBlock">
      <a href="http://localhost:4000/" className='a'>Данные из sqlite таблицы (нажмите)</a>
      </div>
      
      </div>
    </div>
  )
}
