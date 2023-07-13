import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// Import des pages
import Home from './pages/home'
import Apropos from './pages/apropos'


function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
            </Routes>
        </Router>
    )
}
export default App