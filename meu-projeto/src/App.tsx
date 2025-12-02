import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Learn1 from './learn1/page'
import Learn2 from './learn2/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Home</h1>
          <p><Link to="/learn1">Ir para Learn 1</Link></p>
          <p><Link to="/learn2">Ir para Learn 2 (React Query)</Link></p>
        </div>
      } />
      <Route path="/learn1" element={<Learn1 />} />
      <Route path="/learn2" element={<Learn2 />} />
    </Routes>
  )
}

export default App
