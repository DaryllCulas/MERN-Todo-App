import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Todos from './components/Todo.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Toaster position="top-center" />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
