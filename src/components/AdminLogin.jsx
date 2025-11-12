import React, { useState } from 'react'

export default function AdminLogin({ onLogin }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const envKey = import.meta.env.VITE_ADMIN_KEY || 'cryptx-admin'
    if (key === envKey) {
      localStorage.setItem('cryptx_admin', '1')
      onLogin?.()
    } else {
      setError('Invalid admin key')
    }
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold">Admin Access</h1>
      <p className="text-white/70 mt-2">Enter the admin key to view submissions.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Admin Key" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold">Unlock Dashboard</button>
        {error && <p className="text-rose-400 text-sm">{error}</p>}
      </form>
    </div>
  )
}
