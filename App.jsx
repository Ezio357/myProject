// Корневой файл с кодом

import {Routes, Route} from 'react-router-dom';


// порты для маршрутизации
import Header from "./components/Header";
import Main from './components/sectioms/Main';
import Bio from './components/sectioms/Bio';
import Other from './components/sectioms/Other';
import Med from './components/Sciences/Med';
import Anatom from './components/Sciences/Anatom';
import Hygien from './components/Sciences/Hygine';
import Ph from './components/Sciences/Ph';
import Ps from './components/Sciences/Ps';


import './App.css';






function App() {
  return (

  <div className='bground'>

  {/* Всегда загружается, тк маршрутизатор */}
    <Header/>

    
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/bio' element={<Bio/>}/>
        <Route path='/other' element={<Other/>}/>
        <Route path='/med' element={<Med/>}></Route>
        <Route path='/anatom' element={<Anatom/>}></Route>
        <Route path='/hygien' element={<Hygien/>}></Route>
        <Route path='/ph' element={<Ph/>}></Route>
        <Route path='/ps' element={<Ps/>}></Route>
      </Routes>


  </div>
  )
}

export default App;

// остановился на науках, а именно на физиологии, нужно переименовать, для более простого портирования
