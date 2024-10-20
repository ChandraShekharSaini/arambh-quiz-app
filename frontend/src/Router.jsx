import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/SignUp"
import Login from "./Components/Login/Login"
import App from './App'
const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path='/app' element={<App />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router