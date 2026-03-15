import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import Dashboard from "./Dashboard.jsx"
import MyBookings from "./MyBookings.jsx"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<MyBookings />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App