import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages';
import MovieDescriptionPage from './pages/description'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDescriptionPage  />} />
      </Routes>
    </Router>
  )
}
export default App;
