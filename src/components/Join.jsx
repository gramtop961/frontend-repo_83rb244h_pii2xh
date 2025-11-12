import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', college: '', year: '', skills: '', why: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })
    try {
      await addDoc(collection(db, 'registrations'), {
        name: form.name,
        email: form.email,
        college: form.college,
        year: form.year,
        skills: form.skills,
        why: form.why,
        createdAt: serverTimestamp(),
      })
      setStatus({ loading: false, success: true, error: '' })
      setForm({ name: '', email: '', college: '', year: '', skills: '', why: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Join CryptX</h1>
      <p className="text-white/70 mt-2">Fill out the form and we’ll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-1">
          <label className="text-sm text-white/70">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-white/70">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-white/70">College/University</label>
          <input name="college" value={form.college} onChange={handleChange} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-white/70">Year</label>
          <input name="year" value={form.year} onChange={handleChange} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-white/70">Skills/Tech Interests</label>
          <input name="skills" value={form.skills} onChange={handleChange} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-white/70">Why do you want to join?</label>
          <textarea name="why" rows={5} value={form.why} onChange={handleChange} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" />
        </div>

        <div className="sm:col-span-2 flex items-center gap-4">
          <button disabled={status.loading} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold shadow-[0_0_25px_0_rgba(168,85,247,0.35)] hover:brightness-110 transition">
            {status.loading ? 'Submitting...' : 'Submit Application'}
          </button>
          {status.success && <span className="text-emerald-400">Submitted! We’ll contact you soon.</span>}
          {status.error && <span className="text-rose-400">{status.error}</span>}
        </div>
      </form>
    </div>
  )
}
