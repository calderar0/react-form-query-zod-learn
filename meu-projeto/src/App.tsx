import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Learn1 from './learn1/page'
import Learn2 from './learn2/page'
import Learn3 from './learn3/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Home</h1>
          <p><Link to="/learn1">Ir para Learn 1</Link></p>
          <p><Link to="/learn2">Ir para Learn 2 (React Query)</Link></p>
          <p><Link to="/learn3">Ir para Learn 3 (Formulário Completo)</Link></p>
        </div>
      } />
      <Route path="/learn1" element={<Learn1 />} />
      <Route path="/learn2" element={<Learn2 />} />
      <Route path="/learn3" element={<Learn3 />} />
    </Routes>
  )
}

export default App
