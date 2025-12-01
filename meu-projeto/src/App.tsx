import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Learn1 from './learn1/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Home</h1>
          <p><Link to="/learn1">Ir para Learn 1</Link></p>
        </div>
      } />
      <Route path="/learn1" element={<Learn1 />} />
    </Routes>
  )
}

export default App
