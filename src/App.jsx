import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Instagram, Linkedin, Menu } from 'lucide-react'
import Home from './components/Home'
import Join from './components/Join'
import Dashboard from './components/Dashboard'
import AdminLogin from './components/AdminLogin'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/60 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-[0_0_20px_4px_rgba(168,85,247,0.5)]"></div>
            <span className="text-white font-semibold tracking-wide">CryptX</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-white/80 hover:text-white transition" to="/">Home</Link>
            <Link className="text-white/80 hover:text-white transition" to="/join">Join</Link>
            <Link className="text-white/80 hover:text-white transition" to="/dashboard">Dashboard</Link>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}><Menu /></button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link onClick={() => setOpen(false)} className="block text-white/80 hover:text-white" to="/">Home</Link>
            <Link onClick={() => setOpen(false)} className="block text-white/80 hover:text-white" to="/join">Join</Link>
            <Link onClick={() => setOpen(false)} className="block text-white/80 hover:text-white" to="/dashboard">Dashboard</Link>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} CryptX Coding Club</p>
        <div className="flex items-center gap-4 text-white/70">
          <a className="hover:text-white" href="#" aria-label="GitHub"><Github size={20} /></a>
          <a className="hover:text-white" href="#" aria-label="Instagram"><Instagram size={20} /></a>
          <a className="hover:text-white" href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_50%)]" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
