import { useState } from 'react'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='app' element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path="login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
