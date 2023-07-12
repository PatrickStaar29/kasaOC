import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// Import des pages
import Home from './pages/home'


function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
export default App