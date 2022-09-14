import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './pages/landingpage'
import Login from './pages/usuario/login'
import LoginAdm from './pages/admin/LoginAdm'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='admin/login' element={<LoginAdm />}/>
            </Routes>
        </BrowserRouter>
    )
} 