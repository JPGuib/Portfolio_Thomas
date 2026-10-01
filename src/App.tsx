import { useState, useEffect } from 'react'
import { t, type Lang } from './i18n'
const portraitUrl = '/Photo thomas.png'

const NAV_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'sports', 'contact']

function SkillItem({ name }: { name: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff87', flexShrink: 0 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', color: '#c0c0e0' }}>{name}</span>
    </div>
  )
}

function ProjectCard({ project, typeLabel }: { project: { type: string; title: string; subtitle: string; description: string; tags: readonly string[]; metric: string; metricLabel: string; color: string }; typeLabel: string }) {
  return (
    <div className="card-hover" style={{ borderRadius: 10, padding: '24px', border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <span className="tag" style={{ color: project.color, borderColor: `${project.color}33`, background: `${project.color}12` }}>{typeLabel}</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: 800, color: project.color, lineHeight: 1 }}>{project.metric}</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#6060a0', letterSpacing: '0.04em' }}>{project.metricLabel}</div>
        </div>
      </div>
      <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 4, lineHeight: 1.2 }}>{project.title}</h3>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6060a0', marginBottom: 12, letterSpacing: '0.04em' }}>{project.subtitle}</p>
      <p style={{ fontSize: '0.875rem', color: '#a0a0c0', lineHeight: 1.65, marginBottom: 16 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  )
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: 3, border: '1px solid rgba(255,255,255,0.06)' }}>
      {(['fr', 'en'] as Lang[]).map(l => (
        <button
          key={l}
          onClick={() => onChange(l)}
          style={{
            padding: '4px 10px',
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            transition: 'all 0.18s',
            background: lang === l ? '#00ff87' : 'transparent',
            color: lang === l ? '#080810' : '#6060a0',
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}


const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const fieldStyle: React.CSSProperties = {
  display: 'block', width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#f0f0f8',
  fontSize: '1rem', /* 16px minimum : évite le zoom automatique d'iOS au focus */
  fontFamily: 'Outfit, sans-serif', outline: 'none', marginBottom: 16, transition: 'border-color 0.2s',
}

function ContactForm({ c }: { c: (typeof t)['fr']['contact'] | (typeof t)['en']['contact'] }) {
  const [values, setValues] = useState({ name: '', email: '', organization: '', message: '', _gotcha: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const keys = ['name', 'email', 'organization'] as const
  const recipient = c.links.find(l => l.href.startsWith('mailto:'))?.href.slice(7) ?? ''

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = 'rgba(0,255,135,0.4)' }
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (values._gotcha) return // anti-spam : champ caché rempli par un robot
    if (!FORM_ENDPOINT) {
      // Pas de service de formulaire configuré : on ouvre l'application mail avec le message pré-rempli
      const body = `${values.message}\n\n— ${values.name}${values.organization ? ` (${values.organization})` : ''}\n${values.email}`
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      setValues({ name: '', email: '', organization: '', message: '', _gotcha: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="contact-card" style={{ padding: 36, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', marginBottom: 28 }}>{c.formLabel}</div>
      {c.fields.map((placeholder, i) => (
        <input key={placeholder} name={keys[i]} type={keys[i] === 'email' ? 'email' : 'text'}
          autoComplete={keys[i] === 'email' ? 'email' : keys[i] === 'name' ? 'name' : 'organization'}
          required={keys[i] !== 'organization'}
          placeholder={placeholder} aria-label={placeholder} style={fieldStyle}
          value={values[keys[i]]} onChange={e => setValues({ ...values, [keys[i]]: e.target.value })}
          onFocus={focus} onBlur={blur} />
      ))}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
        value={values._gotcha} onChange={e => setValues({ ...values, _gotcha: e.target.value })} />
      <textarea name="message" required rows={5} placeholder={c.messageField} aria-label={c.messageField}
        style={{ ...fieldStyle, resize: 'vertical', marginBottom: 20 }}
        value={values.message} onChange={e => setValues({ ...values, message: e.target.value })}
        onFocus={focus} onBlur={blur} />
      <button type="submit" disabled={status === 'sending'}
        style={{ width: '100%', minHeight: 52, padding: '16px', background: '#00ff87', color: '#080810', border: 'none', borderRadius: 8, fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer', opacity: status === 'sending' ? 0.6 : 1 }}>
        {status === 'sending' ? c.sending : c.send}
      </button>
      <div role="status" aria-live="polite" style={{ marginTop: 16, minHeight: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: status === 'error' ? '#ff6b6b' : '#00ff87' }}>
        {status === 'success' && c.success}
        {status === 'error' && c.error}
      </div>
    </form>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('fr')
  const [activeSection, setActiveSection] = useState('hero')
  const [navOpen, setNavOpen] = useState(false)
  const tx = t[lang]
  const navLabels = [tx.nav.home, tx.nav.about, tx.nav.skills, tx.nav.projects, tx.nav.experience, tx.nav.sports, tx.nav.contact]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = NAV_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_IDS[i])
        if (el && el.offsetTop <= scrollY) { setActiveSection(NAV_IDS[i]); break }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  return (
    <div style={{ background: '#080810', minHeight: '100vh' }} className="grid-bg">

      {/* ─── NAV ─── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,8,16,0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.05em', color: '#f0f0f8' }}>
            <span style={{ color: '#00ff87' }}>DATA</span>_PORTFOLIO
          </div>
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 20 }}>
            {NAV_IDS.map((id, i) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: activeSection === id ? '#00ff87' : '#6060a0' }}>
                {navLabels[i]}
              </button>
            ))}
            <LangToggle lang={lang} onChange={setLang} />
          </div>
          <div style={{ alignItems: 'center', gap: 12 }} className="flex md:hidden">
            <LangToggle lang={lang} onChange={setLang} />
            <button onClick={() => setNavOpen(!navOpen)} style={{ background: 'none', border: 'none', color: '#00ff87', cursor: 'pointer', fontSize: '1.2rem' }}>
              {navOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {navOpen && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.04)', background: 'rgba(8,8,16,0.98)' }}>
            {NAV_IDS.map((id, i) => (
              <button key={id} onClick={() => scrollTo(id)}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: activeSection === id ? '#00ff87' : '#6060a0' }}>
                {navLabels[i]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '20%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }} className="hero-grid">
            <div>
              <div className="section-label" style={{ marginBottom: 24 }}>{tx.hero.available}</div>
              <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.92, marginBottom: 24, letterSpacing: '-0.01em' }}>
                <span style={{ color: '#f0f0f8' }}>{tx.hero.line1}<br /></span>
                <span style={{ color: '#00ff87' }} className="glow">{tx.hero.line2}</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: '#a0a0c0', maxWidth: 520, lineHeight: 1.75, marginBottom: 32 }}>
                {tx.hero.intro} <strong style={{ color: '#f0f0f8' }}>{tx.hero.program}</strong> — {tx.hero.school}{' '}
                {tx.hero.pitch} <strong style={{ color: '#00ff87' }}>{tx.hero.pitchHighlight}</strong>{tx.hero.pitchEnd}
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
                <button onClick={() => scrollTo('contact')}
                  style={{ padding: '14px 32px', background: '#00ff87', color: '#080810', border: 'none', borderRadius: 6, fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.background = '#00e87a')}
                  onMouseOut={e => (e.currentTarget.style.background = '#00ff87')}>
                  {tx.hero.cta}
                </button>
                <button onClick={() => scrollTo('projects')}
                  style={{ padding: '14px 32px', background: 'transparent', color: '#f0f0f8', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                  {tx.hero.ctaProjects}
                </button>
              </div>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                {tx.hero.stats.map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#f0f0f8', lineHeight: 1 }}>
                      {s.v}{s.u && <span style={{ color: '#00ff87', fontSize: '1.1rem' }}> {s.u}</span>}
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#6060a0', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Photo card */}
            <div style={{ width: 260, height: 340, borderRadius: 12, background: '#12121f', border: '1px solid rgba(0,255,135,0.1)', position: 'relative', overflow: 'hidden', flexShrink: 0 }} className="hidden lg:block">
              <img src={portraitUrl} alt="Thomas Guibert" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,16,0.92) 0%, rgba(8,8,16,0.25) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#00ff87', marginBottom: 4 }}>{tx.hero.photoLabel}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#f0f0f8' }}>{tx.hero.line1}<br />{tx.hero.line2}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ padding: 'clamp(56px, 10vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>{tx.about.sectionLabel}</div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 24, color: '#f0f0f8' }}>
                {tx.about.h1}<br /><span style={{ color: '#00ff87' }}>{tx.about.h2}</span>
              </h2>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #00ff87, transparent)', marginBottom: 32 }} />
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                {tx.about.p1} <strong style={{ color: '#f0f0f8' }}>{tx.about.p1b}</strong> {tx.about.p1c}
              </p>
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 32 }}>{tx.about.p2}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {tx.about.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {tx.about.cards.map(card => (
                <div key={card.title} className="card-hover" style={{ padding: '20px 24px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{card.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 4 }}>{card.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#7070a0', lineHeight: 1.5 }}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" style={{ padding: 'clamp(56px, 10vw, 100px) 0', background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.skills.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 60, color: '#f0f0f8' }}>
            {tx.skills.h1} <span style={{ color: '#00ff87' }}>{tx.skills.h2}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 40 }}>
            {tx.skills.groups.map(group => (
              <div key={group.category}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.1em', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(0,255,135,0.1)' }}>
                  {group.category.toUpperCase()}
                </div>
                {group.items.map(skill => (
                  <SkillItem key={skill} name={skill} />
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 60, padding: '32px 40px', borderRadius: 12, border: '1px solid rgba(0,255,135,0.1)', background: 'rgba(0,255,135,0.02)' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.1em', marginBottom: 20 }}>{tx.skills.softLabel}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {tx.skills.softList.map(s => (
                <div key={s} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', fontSize: '0.85rem', color: '#c0c0e0' }}>{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" style={{ padding: 'clamp(56px, 10vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.projects.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 12, color: '#f0f0f8' }}>
            {tx.projects.h1} <span style={{ color: '#00ff87' }}>{tx.projects.h2}</span>
          </h2>
          <p style={{ color: '#6060a0', fontSize: '0.875rem', marginBottom: 52, fontFamily: 'JetBrains Mono, monospace' }}>
            {tx.projects.sub} · {new Date().getFullYear()}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {tx.projects.items.map(p => (
              <ProjectCard key={p.title} project={p} typeLabel={tx.projects.typeLabels[p.type as 'scolaire' | 'professionnel']} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" style={{ padding: 'clamp(56px, 10vw, 100px) 0', background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="exp-grid">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>{tx.experience.sectionLabel}</div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: 48, color: '#f0f0f8' }}>
                {tx.experience.h1}<br /><span style={{ color: '#00ff87' }}>{tx.experience.h2}</span>
              </h2>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 11, top: 0, bottom: 0, width: 1, background: 'rgba(0,255,135,0.1)' }} />
                {tx.experience.items.map((exp, i) => (
                  <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 40, position: 'relative' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: exp.type === 'formation' ? '#00ff87' : '#00d4ff', flexShrink: 0, marginTop: 4, border: '3px solid #0a0a14', position: 'relative', zIndex: 1 }} />
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6060a0', marginBottom: 4 }}>{exp.period}</div>
                      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 2 }}>{exp.role}</div>
                      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', color: exp.type === 'formation' ? '#00ff87' : '#00d4ff', marginBottom: 8 }}>{exp.org}</div>
                      <div style={{ fontSize: '0.85rem', color: '#7070a0', lineHeight: 1.6 }}>{exp.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>{tx.experience.lookingLabel}</div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: 32, color: '#f0f0f8' }}>
                {tx.experience.lookingH1}<br /><span style={{ color: '#00ff87' }}>{tx.experience.lookingH2}</span>
              </h2>
              <div style={{ padding: '24px', borderRadius: 10, background: 'rgba(0,255,135,0.04)', border: '1px solid rgba(0,255,135,0.12)', marginBottom: 20 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00ff87', marginBottom: 10 }}>{tx.experience.durationLabel}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.7rem', fontWeight: 800, color: '#f0f0f8' }}>{tx.experience.duration}</div>
                <div style={{ fontSize: '0.85rem', color: '#7070a0', marginTop: 6 }}>{tx.experience.location}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {tx.experience.details.map(item => (
                  <div key={item.label} style={{ padding: '16px 20px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: item.color, marginBottom: 6 }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.875rem', color: '#c0c0d8', lineHeight: 1.6 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPORTS ─── */}
      <section id="sports" style={{ padding: 'clamp(56px, 10vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.sports.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 16, color: '#f0f0f8' }}>
            {tx.sports.h1}<br /><span style={{ color: '#00ff87' }}>{tx.sports.h2}</span>
          </h2>
          <p style={{ color: '#7070a0', fontSize: '0.9rem', maxWidth: 600, lineHeight: 1.75, marginBottom: 52 }}>{tx.sports.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginBottom: 40 }}>
            {tx.sports.items.map(s => (
              <div key={s.name} className="card-hover" style={{ padding: '28px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 10 }}>{s.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#7070a0', lineHeight: 1.65 }}>{s.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '32px 36px', borderRadius: 12, background: 'linear-gradient(135deg, rgba(0,255,135,0.05), rgba(0,212,255,0.03))', border: '1px solid rgba(0,255,135,0.1)', display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#00ff87', flexBasis: '100%' }}>{tx.sports.statsLabel}</div>
            {tx.sports.stats.map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#f0f0f8', lineHeight: 1 }}>
                  {s.v}<span style={{ color: '#00ff87', fontSize: '1rem' }}> {s.u}</span>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#6060a0', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ padding: 'clamp(56px, 10vw, 100px) 0', background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="contact-grid">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>{tx.contact.sectionLabel}</div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 24, color: '#f0f0f8' }}>
                {tx.contact.h1}<br /><span style={{ color: '#00ff87' }}>{tx.contact.h2}</span>
              </h2>
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 36 }}>{tx.contact.pitch}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tx.contact.links.map(item => (
                  <a key={item.label} href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(item.href.endsWith('.pdf') ? { download: true } : {})}
                    style={{ display: 'flex', gap: 16, minWidth: 0, alignItems: 'center', padding: '14px 20px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.25)'; e.currentTarget.style.background = 'rgba(0,255,135,0.04)' }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#0f0f1a' }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#6060a0', marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#00ff87', overflowWrap: 'anywhere' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm c={tx.contact} />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#404060' }}>{tx.footer}</div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .exp-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-card { padding: 24px 20px !important; }
        }
      `}</style>
    </div>
  )
}
