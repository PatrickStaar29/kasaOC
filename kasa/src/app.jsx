import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// Import des pages
import Home from './pages/home'
import Apropos from './pages/apropos'
import Error from './pages/404'
import Logement from './pages/logement'


function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/404" element={<Error />} />
                <Route path="/logement/:id" element={<Logement/>}/>
            </Routes>
        </Router>
    )
}
export default App