import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  

  return (

    <div className='App'>

      <Navbar />

      {/* 
      Outlet é  utilizado dentro de um componente pai para renderizar os componentes filhos das rotas. 
      Componente pai = App ,
      exemplo de componente filho = NewPost 
      */}
      <div className='container'>
        <Outlet  />
      </div>

    </div>

    
  )
}

export default App
