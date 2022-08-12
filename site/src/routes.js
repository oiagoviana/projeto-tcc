import {BrowserRouter, Route, Routes, Routes} from 'react-router-dom'
import Landing from './pages/landingpage'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    )
} 