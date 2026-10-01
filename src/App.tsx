import { useState, useEffect } from 'react'
import { t, type Lang } from './i18n'
const portraitUrl = '/Photo thomas.png'

const NAV_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'sports', 'credentials', 'contact']

function SkillItem({ name }: { name: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff87', flexShrink: 0 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', color: '#c0c0e0' }}>{name}</span>
    </div>
  )
}

function ProjectCard({ project, typeLabel, onOpenCaseStudy }: { project: { type: string; title: string; subtitle: string; description: string; tags: readonly string[]; metric: string; metricLabel: string; color: string; anchorId?: string; details?: { expandLabel: string; figureTitle: string; correlations: readonly { label: string; value: number }[]; methodLabel: string; method: string; toolsLabel: string; tools: readonly string[]; caveat: string; caseStudyLink: string } }; typeLabel: string; onOpenCaseStudy?: () => void }) {
  return (
    <div id={project.anchorId} className="card-hover" style={{ borderRadius: 10, padding: '24px', border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
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
      {project.details && (
        <>
        <details style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
          <summary style={{ color: '#00ff87', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem' }}>{project.details.expandLabel}</summary>
          <div style={{ marginTop: 20 }}>
            <figure style={{ margin: 0 }}>
              <figcaption style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 12 }}>{project.details.figureTitle}</figcaption>
              <table aria-label={project.details.figureTitle} style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <tbody>
                  {project.details.correlations.map(item => (
                    <tr key={item.label}>
                      <th scope="row" style={{ width: '38%', padding: '7px 8px 7px 0', textAlign: 'left', fontSize: '0.75rem', fontWeight: 400, color: '#c0c0d8', overflowWrap: 'anywhere' }}>{item.label}</th>
                      <td style={{ padding: '7px 8px' }}>
                        <div aria-hidden="true" style={{ height: 7, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                          <div style={{ width: `${item.value * 100}%`, height: '100%', background: 'linear-gradient(90deg, #00d4ff, #00ff87)', borderRadius: 4 }} />
                        </div>
                      </td>
                      <td style={{ width: '18%', padding: '7px 0 7px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#a0a0c0' }}>{item.value.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ color: '#7070a0', fontSize: '0.75rem', lineHeight: 1.55, margin: '10px 0 24px' }}>{project.details.caveat}</p>
            </figure>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00ff87', marginBottom: 6 }}>{project.details.methodLabel}</div>
            <p style={{ color: '#a0a0c0', fontSize: '0.82rem', lineHeight: 1.6, margin: '0 0 18px' }}>{project.details.method}</p>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00ff87', marginBottom: 8 }}>{project.details.toolsLabel}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.details.tools.map(tool => <span key={tool} className="tag">{tool}</span>)}
            </div>
            {onOpenCaseStudy ? <a href="#kstarts-case-study" onClick={onOpenCaseStudy} style={{ display: 'inline-block', marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', textDecoration: 'none' }}>{project.details.caseStudyLink} →</a> : <div style={{ display: 'inline-block', marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem' }}>{project.details.caseStudyLink}</div>}
          </div>
        </details>
        </>
      )}
    </div>
  )
}

function StrategyProjectCard({ strategy }: { strategy: (typeof t)['fr']['strategy'] | (typeof t)['en']['strategy'] }) {
  return (
    <div id="savefolio-project" className="card-hover" style={{ borderRadius: 10, padding: '24px', border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <span className="tag" style={{ color: '#ffd93d', borderColor: '#ffd93d33', background: '#ffd93d12' }}>{strategy.typeLabel}</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#ffd93d', lineHeight: 1 }}>7</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#6060a0', letterSpacing: '0.04em' }}>{strategy.previewLabel.toLowerCase()}</div>
        </div>
      </div>
      <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 4, lineHeight: 1.2 }}>{strategy.title} <span style={{ color: '#00ff87' }}>{strategy.titleAccent}</span></h3>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6060a0', marginBottom: 12, letterSpacing: '0.04em' }}>{strategy.subtitle}</p>
      <p style={{ fontSize: '0.875rem', color: '#a0a0c0', lineHeight: 1.65, marginBottom: 16 }}>{strategy.context}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {strategy.deliverables.slice(0, 4).map(item => <span key={item} className="tag">{item}</span>)}
      </div>
      <details style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
        <summary style={{ color: '#00ff87', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem' }}>{strategy.previewLabel}</summary>
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {strategy.previewItems.map(item => (
              <a key={item.number} href={item.image} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'inherit', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.08)', background: '#0a0a14' }}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', background: '#f4f4f4' }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ color: item.accent, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', marginBottom: 5 }}>{item.number} · {item.title}</div>
                  <div style={{ color: '#9090b0', fontSize: '0.75rem', lineHeight: 1.4 }}>{item.detail}</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00ff87', marginBottom: 8 }}>{strategy.approachLabel}</div>
          <ol style={{ margin: 0, paddingLeft: 20, color: '#a0a0c0', fontSize: '0.82rem', lineHeight: 1.65 }}>
            {strategy.approach.map(step => <li key={step.number}><strong style={{ color: '#f0f0f8' }}>{step.title}</strong> — {step.text}</li>)}
          </ol>
          <p style={{ color: '#7070a0', fontSize: '0.75rem', lineHeight: 1.55, margin: '18px 0 0' }}>{strategy.contributionLabel} : {strategy.contribution}. {strategy.note}</p>
        </div>
      </details>
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
  const [showKstartsStudy, setShowKstartsStudy] = useState(false)
  const tx = t[lang]
  const navLabels = [tx.nav.home, tx.nav.about, tx.nav.skills, tx.nav.projects, tx.nav.experience, tx.nav.sports, tx.nav.credentials, tx.nav.contact]

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

  useEffect(() => {
    if (showKstartsStudy) document.getElementById('kstarts-case-study')?.scrollIntoView({ behavior: 'smooth' })
  }, [showKstartsStudy])

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
          <div className="hidden xl:flex" style={{ alignItems: 'center', gap: 20 }}>
            {NAV_IDS.map((id, i) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: activeSection === id ? '#00ff87' : '#6060a0' }}>
                <span className="nav-link-prefix">//</span>
                <span>{navLabels[i].slice(3)}</span>
              </button>
            ))}
            <LangToggle lang={lang} onChange={setLang} />
          </div>
          <div style={{ alignItems: 'center', gap: 12 }} className="flex xl:hidden">
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
                <br />{tx.hero.pitch} <strong style={{ color: '#00ff87' }}>{tx.hero.pitchHighlight}</strong>{tx.hero.pitchEnd}
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">
            <div className="about-intro">
              <div className="section-label" style={{ marginBottom: 16 }}>{tx.about.sectionLabel}</div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 24, color: '#f0f0f8' }}>
                {tx.about.h1}<br /><span style={{ color: '#00ff87' }}>{tx.about.h2}</span>
              </h2>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #00ff87, transparent)', marginBottom: 32 }} />
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                {tx.about.p1} <strong style={{ color: '#f0f0f8' }}>{tx.about.p1b}</strong> {tx.about.p1c}
              </p>
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 32, whiteSpace: 'pre-line' }}>{tx.about.p2}</p>
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
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.2, overflowWrap: 'anywhere', color: '#f0f0f8', marginBottom: 6 }}>{card.title}</div>
                    <div style={{ fontSize: '0.85rem', color: card.details.length ? '#c0c0e0' : '#7070a0', fontWeight: card.details.length ? 600 : 400, lineHeight: 1.5 }}>{card.desc}</div>
                    {card.details.length > 0 && (
                      <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
                        {card.details.map(detail => {
                          const singleLineCompanyName = detail.label === 'CAPGEMINI TECHNOLOGY SERVICES' || detail.label === 'KINESPORT / MEDINETIC LEARNING'
                          return (
                            <div key={detail.label || detail.text} style={{ fontSize: '0.82rem', color: '#a0a0c0', lineHeight: 1.5, overflowWrap: 'anywhere' }}>
                              {detail.label && <strong style={{ color: '#00ff87', whiteSpace: singleLineCompanyName ? 'nowrap' : 'pre-line', fontSize: singleLineCompanyName ? '0.72rem' : undefined }}>{detail.label}{'separator' in detail ? detail.separator : ': '}</strong>}
                              {'role' in detail && <strong style={{ display: 'block', color: '#f0f0f8', marginTop: 5 }}>{detail.role}</strong>}
                              <span style={{ whiteSpace: 'pre-line' }}>{detail.text}</span>
                              {'ctaTarget' in detail && 'ctaLabel' in detail && <a href={detail.ctaTarget} onClick={'ctaAction' in detail && detail.ctaAction === 'openStudy' ? event => { event.preventDefault(); setShowKstartsStudy(true) } : undefined} style={{ display: 'inline-block', color: '#9090b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', lineHeight: 1.5, textDecoration: 'none', marginTop: 8 }}>{detail.ctaLabel} →</a>}
                            </div>
                          )
                        })}
                      </div>
                    )}
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
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 36, color: '#f0f0f8' }}>
            {tx.skills.h1} <span style={{ color: '#00ff87' }}>{tx.skills.h2}</span>
          </h2>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.1em', marginBottom: 18 }}>{tx.skills.contributionLabel}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '22px 36px', marginBottom: 44 }}>
            {tx.skills.contributionItems.map(item => (
              <article key={item.title} style={{ borderTop: '1px solid rgba(0,255,135,0.18)', paddingTop: 14 }}>
                <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#f0f0f8', letterSpacing: '0.04em', margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ color: '#a0a0c0', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </article>
            ))}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 28 }}>{tx.skills.stackLabel}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 36 }}>
            {tx.skills.groups.map(group => (
              <div key={group.category}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.04em', minHeight: 42, marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(0,255,135,0.1)' }}>
                  {group.category.toUpperCase()}
                </div>
                {group.items.map(skill => (
                  <SkillItem key={skill} name={skill} />
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, padding: '24px 28px', border: '1px solid rgba(0,255,135,0.1)', borderRadius: 8, background: 'rgba(0,255,135,0.02)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.1em', marginBottom: 10 }}>{tx.skills.toolsLabel}</div>
            <div style={{ color: '#c0c0e0', fontSize: '0.9rem' }}>{tx.skills.tools.join(' · ')}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16, marginTop: 16 }}>
            <div style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.08em', marginBottom: 12 }}>{tx.skills.sportLabel}</div>
              {tx.skills.sportItems.map(item => <div key={item} style={{ color: '#c0c0e0', fontSize: '0.85rem', lineHeight: 1.7 }}>{item}</div>)}
            </div>
            <div style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00ff87', letterSpacing: '0.08em', marginBottom: 12 }}>{tx.skills.certificationsLabel}</div>
              <div style={{ color: '#c0c0e0', fontSize: '0.85rem', lineHeight: 1.7 }}>{tx.skills.certifications}</div>
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
              <ProjectCard key={p.title} project={p} typeLabel={tx.projects.typeLabels[p.type as 'scolaire' | 'professionnel']} onOpenCaseStudy={p.metric === '27' ? () => setShowKstartsStudy(value => !value) : undefined} />
            ))}
            <StrategyProjectCard strategy={tx.strategy} />
          </div>
        </div>

      {/* ─── DIGITAL STRATEGY & MARKET ANALYSIS ─── */}
      <section id="strategy" style={{ display: 'none' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.strategy.sectionLabel}</div>
          <span className="tag" style={{ display: 'inline-block', marginBottom: 20 }}>{tx.strategy.typeLabel}</span>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 0.95, marginBottom: 16, color: '#f0f0f8' }}>
            {tx.strategy.title}<br /><span style={{ color: '#00ff87' }}>{tx.strategy.titleAccent}</span>
          </h2>
          <p style={{ color: '#6060a0', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', lineHeight: 1.6, marginBottom: 48 }}>{tx.strategy.subtitle}</p>

          <div className="strategy-intro-grid">
            <div style={{ borderLeft: '2px solid #00ff87', padding: '4px 0 4px 24px' }}>
              <div className="strategy-kicker">{tx.strategy.contextLabel}</div>
              <p style={{ color: '#c0c0d8', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>{tx.strategy.context}</p>
            </div>
            <div style={{ padding: 24, border: '1px solid rgba(0,255,135,0.12)', background: 'rgba(0,255,135,0.03)' }}>
              <div className="strategy-kicker">{tx.strategy.contributionLabel}</div>
              <p style={{ color: '#00ff87', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.35rem', lineHeight: 1.2, margin: 0 }}>{tx.strategy.contribution}</p>
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <div className="strategy-kicker" style={{ marginBottom: 20 }}>{tx.strategy.approachLabel}</div>
            <div className="strategy-approach-grid">
              {tx.strategy.approach.map(step => (
                <article key={step.number} className="strategy-step">
                  <div style={{ color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', marginBottom: 16 }}>{step.number}</div>
                  <h3 style={{ color: '#f0f0f8', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.45rem', margin: '0 0 8px' }}>{step.title}</h3>
                  <p style={{ color: '#9090b0', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="strategy-lower-grid" style={{ marginTop: 64 }}>
            <div>
              <div className="strategy-kicker" style={{ marginBottom: 20 }}>{tx.strategy.deliverablesLabel}</div>
              <ul className="strategy-deliverables">
                {tx.strategy.deliverables.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <div className="strategy-kicker" style={{ marginBottom: 20 }}>{tx.strategy.previewLabel}</div>
              <p style={{ color: '#9090b0', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 20px' }}>{tx.strategy.previewIntro}</p>
              <div className="strategy-preview-grid">
                {tx.strategy.previewItems.map(item => (
                  <a key={item.number} href={item.image} target="_blank" rel="noopener noreferrer" className="strategy-preview-card" style={{ borderTopColor: item.accent }}>
                    <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                    <span style={{ color: item.accent, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem' }}>{item.number}</span>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </a>
                ))}
              </div>
              <p style={{ color: '#7070a0', fontSize: '0.75rem', lineHeight: 1.6, margin: '20px 0 0' }}>{tx.strategy.kpiNote}</p>
            </div>
          </div>
          <p style={{ color: '#6060a0', fontSize: '0.75rem', lineHeight: 1.6, margin: '48px 0 0', maxWidth: 800 }}>{tx.strategy.note}</p>
        </div>
      </section>

      {/* ─── KSTARTS CASE STUDY ─── */}
      <div id="kstarts-case-study" style={{ display: showKstartsStudy ? 'block' : 'none' }}>
        <div className="case-study-shell" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <div className="section-label">{tx.caseStudy.sectionLabel}</div>
            <button type="button" aria-label={tx.caseStudy.closeLabel} title={tx.caseStudy.closeLabel} onClick={() => setShowKstartsStudy(false)} style={{ padding: '4px 8px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, background: 'transparent', color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', cursor: 'pointer' }}>
              {tx.caseStudy.closeLabel} ×
            </button>
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 16, color: '#f0f0f8' }}>{tx.caseStudy.title}</h2>
          <p style={{ color: '#a0a0c0', fontSize: '0.95rem', maxWidth: 760, lineHeight: 1.75, marginBottom: 48 }}>{tx.caseStudy.intro}</p>
          <p style={{ color: '#7070a0', fontSize: '0.78rem', maxWidth: 900, lineHeight: 1.65, marginTop: -32, marginBottom: 48 }}>{tx.caseStudy.scopeNote}</p>

          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', color: '#f0f0f8', marginBottom: 16 }}>{tx.caseStudy.findingsTitle}</h3>
          <div style={{ marginBottom: 56 }}>
            <div className="case-study-finding-grid case-study-finding-header">
              {tx.caseStudy.columns.map(column => <div key={column}>{column}</div>)}
            </div>
            {tx.caseStudy.findings.map(row => (
              <article key={row.label} className="case-study-finding-grid case-study-finding-row">
                <h4>{row.label}</h4>
                <div>
                  <span className="case-study-mobile-label">{tx.caseStudy.columns[1]}</span>
                  <p className="case-study-finding-result">{row.result}</p>
                </div>
                <div>
                  <span className="case-study-mobile-label">{tx.caseStudy.columns[2]}</span>
                  <p className="case-study-finding-note">{row.note}</p>
                </div>
              </article>
            ))}
          </div>

          <details style={{ marginBottom: 24, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
            <summary style={{ color: '#00ff87', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem' }}>{tx.caseStudy.figuresExpand}</summary>
            <div style={{ marginTop: 24 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', color: '#f0f0f8', marginBottom: 8 }}>{tx.caseStudy.figuresTitle}</h3>
              <p style={{ color: '#7070a0', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: 28 }}>{tx.caseStudy.figuresNote}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 28, marginBottom: 60 }}>
                {tx.caseStudy.figures.map(figure => (
                  <figure key={figure.src} style={{ margin: 0, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <a href={figure.src} target="_blank" rel="noopener noreferrer" aria-label={`${figure.title} — ${tx.caseStudy.openFigure}`} style={{ display: 'block', background: '#f4f4f4' }}>
                      <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: 240, objectFit: 'contain' }} />
                    </a>
                    <figcaption style={{ paddingTop: 12 }}>
                      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 4 }}>{figure.title}</div>
                      <div style={{ color: '#9090b0', fontSize: '0.82rem', lineHeight: 1.6 }}>{figure.caption}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', color: '#f0f0f8', marginBottom: 20 }}>{tx.caseStudy.pipelineTitle}</h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: 16 }}>
                {tx.caseStudy.pipeline.map((step, index) => (
                  <li key={step} style={{ borderLeft: '2px solid rgba(0,255,135,0.45)', padding: '4px 12px 8px 16px' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00ff87', fontSize: '0.65rem', marginBottom: 6 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ color: '#c0c0d8', fontSize: '0.85rem', lineHeight: 1.55 }}>{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          </details>

          <details style={{ marginBottom: 24, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
            <summary style={{ color: '#00ff87', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem' }}>{tx.caseStudy.codeExpand}</summary>
            <div style={{ marginTop: 24 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', color: '#f0f0f8', marginBottom: 8 }}>{tx.caseStudy.codeTitle}</h3>
              <p style={{ color: '#9090b0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 16 }}>{tx.caseStudy.codeNote}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
                {tx.caseStudy.codeSamples.map(sample => (
                  <figure key={sample.title} style={{ margin: 0 }}>
                    <figcaption style={{ color: '#c0c0d8', fontSize: '0.82rem', marginBottom: 8 }}>{sample.title}</figcaption>
                    <pre style={{ overflowX: 'auto', margin: 0, padding: '16px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, background: '#0f0f1a', color: '#b8f7d8', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', lineHeight: 1.75 }}><code>{sample.code}</code></pre>
                  </figure>
                ))}
              </div>
              <p style={{ color: '#7070a0', fontSize: '0.75rem', lineHeight: 1.6, marginTop: 24 }}>{tx.caseStudy.sourceNote}</p>
            </div>
          </details>
        </div>
      </div>

      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" style={{ padding: 'clamp(56px, 10vw, 100px) 0', scrollMarginTop: 72, background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.experience.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 36, color: '#f0f0f8' }}>
            {tx.experience.h1} <span style={{ color: '#00ff87' }}>{tx.experience.h2}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 48 }}>
            {[
              { title: tx.experience.professionalTitle, items: tx.experience.professionalItems },
              { title: tx.experience.educationTitle, items: tx.experience.educationItems },
              { title: tx.experience.internationalTitle, intro: tx.experience.internationalIntro, items: tx.experience.internationalItems },
            ].map(group => (
              <div key={group.title} style={{ minWidth: 0 }}>
                <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: group.title === tx.experience.professionalTitle || group.title === tx.experience.educationTitle || group.title === tx.experience.internationalTitle ? 'clamp(1.5rem, 1.9vw, 1.75rem)' : 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: 36, color: '#f0f0f8', overflowWrap: 'anywhere', whiteSpace: group.title === tx.experience.professionalTitle || group.title === tx.experience.educationTitle || group.title === tx.experience.internationalTitle ? 'nowrap' : undefined }}>
                  {group.title}
                </h2>
                {'intro' in group && <p style={{ fontSize: '0.85rem', color: '#7070a0', lineHeight: 1.6, margin: '0 0 28px' }}>{group.intro}</p>}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 11, top: 0, bottom: 0, width: 1, background: 'rgba(0,255,135,0.1)' }} />
                  {group.items.map((item, index) => (
                    <div key={`${item.period}-${index}`} style={{ display: 'flex', gap: 24, marginBottom: 40, position: 'relative' }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#00d4ff', flexShrink: 0, marginTop: 4, border: '3px solid #0a0a14', position: 'relative', zIndex: 1 }} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6060a0', marginBottom: 4 }}>{item.period}</div>
                        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 2, overflowWrap: 'anywhere' }}>{item.role}</div>
                        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', color: '#00ff87', marginBottom: 8, overflowWrap: 'anywhere' }}>{item.org}</div>
                        <div style={{ fontSize: '0.85rem', color: '#7070a0', lineHeight: 1.6 }}>{item.detail}</div>
                        {'highlights' in item && <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c0c0d8', lineHeight: 1.6, marginTop: 8 }}>{item.highlights}</div>}
                        {'qualification' in item && <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00ff87', lineHeight: 1.6, marginTop: 8 }}>{item.qualification}</div>}
                        {'ctaLabel' in item && <a href={item.ctaTarget} onClick={item.ctaAction === 'openStudy' ? event => { event.preventDefault(); setShowKstartsStudy(true) } : undefined} style={{ display: 'inline-block', color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', lineHeight: 1.5, textDecoration: 'none', marginTop: 10 }}>{item.ctaLabel} →</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPORTS ─── */}
      <section id="sports" style={{ padding: 'clamp(56px, 10vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.sports.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: 16, color: '#f0f0f8' }}>
            {tx.sports.h1}<br /><span style={{ color: '#00ff87' }}>{tx.sports.h2}</span>
          </h2>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.7rem', fontWeight: 800, color: '#00d4ff', marginBottom: 8 }}>{tx.sports.durationTitle}</div>
          <p style={{ color: '#7070a0', fontSize: '0.9rem', maxWidth: 600, lineHeight: 1.75, marginBottom: 52 }}>{tx.sports.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginBottom: 40 }}>
            {tx.sports.items.map(s => (
              <div key={s.name} className="card-hover" style={{ padding: '28px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 10 }}>{s.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#7070a0', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{s.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.7rem', fontWeight: 800, color: '#00d4ff', marginBottom: 8 }}>{tx.sports.beyondFootballTitle}</div>
          <p style={{ color: '#7070a0', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 760, margin: '0 0 28px', fontStyle: 'italic' }}>{tx.sports.beyondFootballSummary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginBottom: 20 }}>
            {tx.sports.beyondFootballItems.map(item => (
              <div key={item.name} className="card-hover" style={{ padding: '28px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0f0f1a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{item.icon}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', marginBottom: 10 }}>{item.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#7070a0', lineHeight: 1.65 }}>
                  {item.detail}
                  {'highlight' in item && <><br /><strong style={{ color: '#c0c0d8' }}>{item.highlight}</strong></>}
                  {'extra' in item && <><br />{item.extra}</>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFERENCES & CV ─── */}
      <section id="credentials" style={{ padding: 'clamp(56px, 10vw, 100px) 0', background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>{tx.credentials.sectionLabel}</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: 40, color: '#f0f0f8' }}>{tx.credentials.title}</h2>
          <section id="references" aria-labelledby="references-title">
            <h3 id="references-title" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#00ff87', marginBottom: 20 }}>{tx.credentials.referencesTitle}</h3>
            <p style={{ color: '#8080a0', fontSize: '0.8rem', lineHeight: 1.55, margin: '-8px 0 20px' }}>{tx.credentials.referencesNote} <a href="#cv" style={{ color: '#00ff87', textDecoration: 'none' }}>{tx.credentials.cvQuickLink} →</a></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16, marginBottom: 48 }}>
              {tx.credentials.references.map(reference => (
                <figure key={reference.author} style={{ margin: 0, padding: '20px 22px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, background: '#0f0f1a' }}>
                  <blockquote style={{ margin: '0 0 18px', color: '#d0d0e0', fontSize: '0.95rem', lineHeight: 1.7 }}>“{reference.quote}”</blockquote>
                  <figcaption>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#f0f0f8' }}>{reference.author}</div>
                    <div style={{ color: '#8080a0', fontSize: '0.76rem', lineHeight: 1.5 }}>{reference.role}</div>
                    <a href={reference.linkedinHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 10, color: '#00ff87', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', textDecoration: 'none' }}>{tx.credentials.linkedinProfileLabel} →</a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section id="cv" aria-labelledby="cv-title" style={{ borderTop: '1px solid rgba(0,255,135,0.18)', paddingTop: 28 }}>
            <div className="cv-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
              <div style={{ maxWidth: 620 }}>
                <div className="section-label" style={{ marginBottom: 10 }}>{tx.credentials.cvLabel}</div>
                <h3 id="cv-title" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', color: '#f0f0f8', margin: '0 0 8px' }}>{tx.credentials.cvTitle}</h3>
                <p style={{ color: '#9090b0', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{tx.credentials.cvDescription}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a href={tx.credentials.cvHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, padding: '10px 18px', borderRadius: 6, background: '#00ff87', color: '#080810', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>{tx.credentials.openCv}</a>
                <a href={tx.credentials.cvHref} download style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, padding: '10px 18px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.16)', color: '#f0f0f8', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>{tx.credentials.downloadCv}</a>
              </div>
            </div>
          </section>
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
              <p style={{ color: '#a0a0c0', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 36, whiteSpace: 'pre-line' }}>{tx.contact.pitch}</p>
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
        .case-study-shell {
          margin-left: auto !important;
          margin-right: auto !important;
          padding-left: clamp(36px, 4vw, 64px) !important;
          border-left: 2px solid rgba(0,255,135,0.32);
        }
        .case-study-finding-grid {
          display: grid;
          grid-template-columns: minmax(150px, 0.75fr) minmax(230px, 1.15fr) minmax(300px, 1.6fr);
          gap: 16px;
        }
        .case-study-finding-header {
          padding: 10px 8px;
          border-bottom: 1px solid rgba(0,255,135,0.25);
          color: #00ff87;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
        }
        .case-study-finding-row {
          padding: 14px 8px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .case-study-finding-row h4 {
          margin: 0;
          color: #f0f0f8;
          font-size: 0.82rem;
          overflow-wrap: anywhere;
        }
        .case-study-finding-result, .case-study-finding-note {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }
        .case-study-finding-result { color: #00d4ff; }
        .case-study-finding-note { color: #a0a0c0; }
        .case-study-mobile-label { display: none; }
        .strategy-intro-grid, .strategy-lower-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: start; }
        .strategy-approach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .strategy-step { min-height: 190px; padding: 20px; border: 1px solid rgba(255,255,255,0.08); border-top: 2px solid rgba(0,255,135,0.45); background: #0f0f1a; }
        .strategy-kicker { color: #00ff87; font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; letter-spacing: 0.12em; }
        .strategy-deliverables { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 24px; padding: 0; margin: 0; list-style: none; }
        .strategy-deliverables li { color: #c0c0d8; font-size: 0.85rem; line-height: 1.45; padding-left: 18px; position: relative; }
        .strategy-deliverables li::before { content: '↗'; position: absolute; left: 0; color: #00ff87; }
        .strategy-preview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .strategy-preview-card { min-height: 142px; padding: 0 0 16px; border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid; background: #0f0f1a; display: flex; flex-direction: column; gap: 10px; text-decoration: none; overflow: hidden; }
        .strategy-preview-card img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: #f4f4f4; }
        .strategy-preview-card > span, .strategy-preview-card > strong { margin-left: 16px; margin-right: 16px; }
        .strategy-preview-card > span:first-of-type { margin-top: 6px; }
        .strategy-preview-card strong { color: #f0f0f8; font-family: 'Barlow Condensed', sans-serif; font-size: 1.15rem; line-height: 1.05; }
        .strategy-preview-card span:last-child { color: #8080a0; font-size: 0.75rem; line-height: 1.45; }
        .about-intro { padding-top: 21px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-intro { padding-top: 0; }
          .exp-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-card { padding: 24px 20px !important; }
          .strategy-intro-grid, .strategy-lower-grid { grid-template-columns: 1fr; gap: 32px; }
          .strategy-approach-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .strategy-approach-grid, .strategy-preview-grid { grid-template-columns: 1fr; }
          .strategy-deliverables { grid-template-columns: 1fr; }
          .strategy-step { min-height: 0; }
          .case-study-shell {
            padding-left: 12px !important;
            padding-right: 16px !important;
            margin-left: 8px !important;
          }
          .case-study-finding-grid { grid-template-columns: minmax(0, 1fr); gap: 10px; }
          .case-study-finding-header { display: none; }
          .case-study-finding-row { padding: 16px 12px; }
          .case-study-mobile-label {
            display: block;
            margin-bottom: 4px;
            color: #00ff87;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            text-transform: uppercase;
          }
        }
      `}</style>
    </div>
  )
}
