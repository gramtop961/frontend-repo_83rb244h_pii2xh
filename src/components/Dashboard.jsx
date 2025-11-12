import React, { useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import AdminLogin from './AdminLogin'

export default function Dashboard() {
  const [authed, setAuthed] = useState(() => localStorage.getItem('cryptx_admin') === '1')
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!authed) return
    const load = async () => {
      setLoading(true)
      try {
        const q = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(q)
        setRows(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [authed])

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Registrations</h1>
        <button onClick={() => { localStorage.removeItem('cryptx_admin'); setAuthed(false) }} className="text-white/70 hover:text-white">Sign out</button>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Skills</th>
              <th className="px-4 py-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td className="px-4 py-4" colSpan={5}>Loading...</td></tr>
            ) : rows.length === 0 ? (
              <tr><td className="px-4 py-4" colSpan={5}>No submissions yet.</td></tr>
            ) : rows.map((r) => (
              <tr key={r.id} className="border-t border-white/10 hover:bg-white/[0.03]">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.email}</td>
                <td className="px-4 py-3">{r.year}</td>
                <td className="px-4 py-3">{r.skills}</td>
                <td className="px-4 py-3">{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
