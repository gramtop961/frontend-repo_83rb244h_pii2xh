import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Hackathons', desc: 'Compete, collaborate, and build in 24-48h sprints to sharpen real-world skills.' },
  { title: 'Peer Learning', desc: 'Grow together through code reviews, study jams, and hands-on workshops.' },
  { title: 'AI Projects', desc: 'Experiment with cutting-edge AI/ML stacks and ship open-source tools.' },
  { title: 'Networking', desc: 'Meet mentors and industry pros through talks, demos, and community events.' },
]

export default function Home() {
  return (
    <div className="">
      {/* Hero with Spline background */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/60 to-[#05060a]" />
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col items-start justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">CryptX</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            Empowering Coders. Building Innovators.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-white/70 max-w-3xl">
            Join a community that accelerates your growth through hands-on projects, teamwork, hackathons, and real industry exposure.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex items-center gap-4">
            <Link to="/join" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-white/90 hover:bg-white transition">
              Apply to Join CryptX 🚀 <ArrowRight size={18} />
            </Link>
            <a href="#why" className="text-white/70 hover:text-white">Why join?</a>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section id="why" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.08),rgba(168,85,247,0.08),rgba(59,130,246,0.08),rgba(34,211,238,0.08))]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Join CryptX</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Build with peers, ship projects, and get exposure to real-world tech. Here’s what members love.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_0_rgba(99,102,241,0.25)]">
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Vision</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[{ name: 'Alex Carter', title: 'President', vision: 'A club where building is the default and shipping is the culture.' }, { name: 'Maya Singh', title: 'Vice President', vision: 'Empower every member to collaborate, learn fast, and lead with code.' }].map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-[0_0_25px_0_rgba(34,211,238,0.25)]" />
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-white/60 text-sm">{p.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-white/70 text-sm">{p.vision}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20" />
            <div className="relative p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold">Ready to build the future?</h3>
                  <p className="text-white/70 mt-1">Join the crew and start shipping with CryptX.</p>
                </div>
                <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold shadow-[0_0_25px_0_rgba(168,85,247,0.35)] hover:brightness-110 transition">
                  Apply Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
