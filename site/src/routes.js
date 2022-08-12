import {BrowserRouter, Route, Routes, Routes} from 'react-router-dom'
import Landing from './pages/landingpage'
import Login from './pages/login'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
} 