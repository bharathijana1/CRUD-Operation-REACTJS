import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>


      <h2 className="text-center p-3">React Crud Operations</h2>
      <div>
        <Routes>
          <Route path='/' element={<Create />} />
        </Routes>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route exact path='/read' element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>

      </BrowserRouter>
    </>
  )
}

export default App
