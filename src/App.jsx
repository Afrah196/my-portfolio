import React, { useState, useEffect, useCallback } from 'react';
import {
  User,
  FileText,
  Briefcase,
  Terminal,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Wifi,
  Battery,
  Clock,
  Heart,
  Cpu,
  Zap,
  GraduationCap,
  Boxes,
  Signal,
  Code2,
  Activity
} from 'lucide-react';
import './App.css';

// --- Components ---

const SakuraPetals = () => {
  const [petals, setPetals] = useState([]);
  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      size: `${Math.random() * 10 + 6}px`,
      duration: `${Math.random() * 25 + 15}s`
    }));
    setPetals(newPetals);
  }, []);
  return (
    <div className="sakura-layer" data-testid="sakura-layer">
      {petals.map(p => (
        <div key={p.id} className="petal" style={{
          left: p.left, width: p.size, height: p.size,
          animationDelay: p.delay, animationDuration: p.duration
        }} />
      ))}
    </div>
  );
};

const App = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [openWindows, setOpenWindows] = useState(['About']);
  const [activeWindow, setActiveWindow] = useState('About');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Draggable State (macOS only)
  const [windowPositions, setWindowPositions] = useState({
    About: { x: 80, y: 60 },
    Experience: { x: 140, y: 100 },
    Stack: { x: 200, y: 140 },
    Gallery: { x: 260, y: 180 },
    Education: { x: 320, y: 220 },
    PostBox: { x: 380, y: 260 }
  });

  const [draggingWindow, setDraggingWindow] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    const bootTimer = setTimeout(() => setIsBooting(false), 1500);
    const clockTimer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(bootTimer);
      clearInterval(clockTimer);
    };
  }, []);

  // --- COMPREHENSIVE RESUME DATA ---
  const resumeData = {
    name: "Afrah OS",
    contact: {
      phone: "+91 8123674275",
      email: "afrahmahmud2014@gmail.com",
      linkedin: "https://linkedin.com/in/afrahmahmud"
    },
    summary: "Software Engineer experienced in building scalable real-time communication systems, cross-platform SDKs, and mobile applications. Skilled in WebRTC, VoIP, SIP, SDK development (Android, iOS, Flutter, WebSDK), and cloud services. Proven track record of improving production reliability and delivering high-quality features. DRI for high-traffic VoIP & Streaming infrastructure across multi-region deployments (India, UAE, KSA, SG, EU, Africa).",
    education: [
      { school: "BMS College of Engineering, Bengaluru", degree: "Bachelor of Engineering: Computer Science", period: "2020 — 2024" },
      { school: "Indian School al Wadi al Kabir, Muscat", degree: "Higher Secondary Education", period: "2018 — 2020" }
    ],
    experience: [
      {
        org: "Exotel",
        location: "Bengaluru, India",
        role: "Member of Technical Staff (MTS-1)",
        period: "July 2024 — Present",
        bullets: [
          "Conducted blameless post-mortems for severity-1 incidents, preventing over $200K in potential downtime costs.",
          "Engineered a background noise suppression feature, leading to a 40% reduction in user-reported audio quality issues and contributing to a major enterprise client acquisition.",
          "Engineered a configurable logging and event-shipping mechanism to meet the stringent security and data privacy requirements of a key fintech client (Wingbank).",
          "Rapidly diagnosed and patched a critical call disconnection bug caused by a breaking external API change from Meta (WhatsApp) within 24 hours.",
          "Reduced the Android SDK crash rate by 40% through systematic debugging and memory leak fixes, directly improving app store ratings from 3.8 to 4.6 stars.",
          "Architected cross-platform WebRTC SDKs (Android, iOS, Flutter, Web) supporting 10,000+ developers, achieving and maintaining a 99.98% crash-free rate.",
          "Led the complete re-architecture of the Flutter SDK plugin (ExotelPlugin), resolving persistent background execution issues and reducing client integration time from 3 weeks to under 5 days.",
          "Developed a unified communication SDK (Swift, Kotlin, Dart, TypeScript), achieving 85% code reusability and reducing new feature development time by 40%.",
          "Implemented adaptive bitrate streaming using WebRTC simulcast, improving video quality by 40% while reducing bandwidth consumption by 25%.",
          "Integrated an ElasticSearch-based event metrics pipeline, reducing mean time to detect (MTTD) issues from 20 minutes to 3 minutes.",
          "Optimized WebRTC connection time by 35% through custom STUN/TURN configurations, improving ICE negotiation success rate from 93% to 99.5%.",
          "Developed a real-time dashboard (Prometheus, Grafana) tracking 50+ SDK performance metrics for 100,000+ daily users.",
          "Enhanced audio quality by implementing acoustic echo cancellation and noise suppression, improving MOS from 3.2 to 4.3.",
          "Built a client-side diagnostic toolkit for the WebSDK, reducing debugging support tickets by 20%.",
          "Architected multi-codec support (Opus, G.711) in the Android & Web SDKs, improving call reliability by 15% in low-network conditions.",
          "Optimized SDK initialization time by 50% (from 800ms to 400ms) through lazy loading and a modular architecture.",
          "Architected a core voice routing API enhancement to enable cross-regional failover, ensuring service continuity.",
          "Developed a granular audio control feature for the WebSDK, allowing users to set distinct volume levels for call audio, ringtones, and notifications.",
          "Engineered runtime audio device management for the WebSDK, including device enumeration, selection, and callback mechanisms.",
          "Hardened WebView security in the mobile SDK by disabling insecure file access and removing deprecated methods.",
          "Managed end-to-end rotation of critical SSL certificates for the core platform, preventing service outages and authoring a new SOP.",
          "Automated SIP trunk testing using Jenkins and authored a new SOP for the Network Operations Center (NoC).",
          "Resolved complex P0, call-blocking bugs for Sprinklr, architecting multi-instance SDK initialization in a single browser tab.",
          "Proactively managed semantic versioning and SDK dependencies to maintain backward compatibility across 5 major versions.",
          "Diagnosed and resolved critical platform-wide thread slowness by tuning aggressive detection and timeout parameters.",
          "Acted as DRI for large-scale VoIP & Streaming platform operations, owning triage of 500+ production incidents across Edge Proxy, Core Proxy, RTPengine, and Streaming Servers.",
          "Led incident response and alert handling for high-severity alerts (5xx/4xx, media engine down), maintaining 99.9%+ availability across multiple regions (India, UAE, KSA, SG, EU, Africa).",
          "Reduced alert noise by ~40% by identifying false positives and tuning thresholds.",
          "Owned customer-impacting throttling incidents across 30+ account SIDs, enabling safe limit increases during peak traffic.",
          "Diagnosed and mitigated media path failures (RTPengine down, SRTP module issues), contributing to capacity scaling decisions.",
          "Performed hands-on infrastructure remediation: disk cleanup, RAM recovery, process health verification (Kamailio, RTPengine), and Jenkins job recovery."
        ]
      },
      {
        org: "Exotel",
        location: "Bengaluru, India",
        role: "Tech Intern",
        period: "January 2024 — July 2024",
        bullets: [
          "Developed real-time communication features in Flutter and Java, achieving a 40% feature adoption rate among 5,000+ beta users.",
          "Implemented an automated testing suite with 85% code coverage (JUnit, Espresso), reducing post-release bugs by 25%.",
          "Optimized API response times by 35% through efficient data structures and caching strategies.",
          "Collaborated with an 8-member cross-functional team using Agile methodology, delivering features 15% ahead of sprint commitments."
        ]
      }
    ],
    skills: {
      "Languages": ["Swift", "Kotlin", "Dart (Flutter)", "TypeScript", "JavaScript", "Java"],
      "Protocols": ["WebRTC", "SIP", "VoIP", "STUN/TURN", "ICE", "WebSockets"],
      "SRE & Infra": ["Prometheus", "Grafana", "Elasticsearch", "Jenkins", "AWS", "Kamailio", "RTPengine"]
    },
    projects: [
      { title: "Wow Pizza", tech: "React, FastAPI, PostgreSQL", highlights: ["65+ REST endpoints", "Real-time delivery logic", "Admin Analytics Dashboard"] },
      { title: "Portfolio OS", tech: "React, Vite, GSAP", highlights: ["Dual-OS Architecture", "Virtual Windowing", "Atmospheric Canvas"] }
    ]
  };

  const handleDragStart = (e, name) => {
    e.preventDefault();
    setDraggingWindow(name);
    setActiveWindow(name);
    setDragOffset({
      x: e.clientX - windowPositions[name].x,
      y: e.clientY - windowPositions[name].y
    });
  };

  const handleMouseMove = useCallback((e) => {
    if (!draggingWindow) return;
    setWindowPositions(prev => ({
      ...prev,
      [draggingWindow]: {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      }
    }));
  }, [draggingWindow, dragOffset]);

  const handleMouseUp = () => setDraggingWindow(null);

  useEffect(() => {
    if (draggingWindow) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingWindow, handleMouseMove]);

  const toggleWindow = (name) => {
    if (openWindows.includes(name)) {
      if (activeWindow === name) setOpenWindows(openWindows.filter(w => w !== name));
      else setActiveWindow(name);
    } else {
      setOpenWindows(isMobile ? [name] : [...openWindows, name]);
      setActiveWindow(name);
    }
  };

  const renderWindowContent = (name) => {
    switch (name) {
      case 'About': return (
        <div className="about-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ width: '100px', height: '100px', background: 'var(--sakura-petal)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '40px' }}>🌸</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--sakura-vibrant)' }}>{resumeData.name}</h1>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.7 }}>SRE & Software Engineer @ Exotel</p>
            </div>
          </div>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>{resumeData.summary}</p>
          <div className="resume-section" style={{ marginTop: '2rem' }}>
            <div className="section-header"><Zap size={18} /> <span>Mission</span></div>
            <p style={{ fontStyle: 'italic', opacity: 0.7 }}>"Building communication systems that never fail, because connection is the heart of every interaction."</p>
          </div>
        </div>
      );
      case 'Experience': return (
        <div className="experience-content">
          <div className="section-header"><Briefcase size={18} /> <span>Professional Impact</span></div>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="resume-section exotel-experience">
              <div className="role-header">
                <div>
                  <div className="role-title">{exp.role}</div>
                  <div className="org-name">{exp.org}</div>
                </div>
                <div className="date-badge">{exp.period}</div>
              </div>
              <ul className="bullet-points">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
      case 'Stack': return (
        <div className="stack-content">
          <div className="section-header"><Cpu size={18} /> <span>Technical Arsenal</span></div>
          {Object.entries(resumeData.skills).map(([cat, list]) => (
            <div key={cat} style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--sakura-vibrant)', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{cat}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {list.map(s => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ background: 'var(--sakura-mist)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
              <Activity size={20} color="var(--sakura-vibrant)" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 800 }}>99.9%</div>
              <div style={{ fontSize: '10px', opacity: 0.6 }}>Availability</div>
            </div>
            <div style={{ background: 'var(--matcha-light)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
              <Zap size={20} color="var(--matcha-bold)" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 800 }}>3min</div>
              <div style={{ fontSize: '10px', opacity: 0.6 }}>MTTD</div>
            </div>
            <div style={{ background: 'var(--sakura-blush)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
              <Code2 size={20} color="var(--sakura-deep)" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 800 }}>10K+</div>
              <div style={{ fontSize: '10px', opacity: 0.6 }}>Devs Impacted</div>
            </div>
          </div>
        </div>
      );
      case 'Gallery': return (
        <div className="projects-content">
          <div className="section-header"><Boxes size={18} /> <span>Project Spotlight</span></div>
          {resumeData.projects.map((p, i) => (
            <div key={i} className="project-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--sakura-blush)', marginBottom: '1.5rem' }}>
              <h3>{p.title}</h3>
              <p style={{ color: 'var(--matcha-bold)', fontWeight: 800, fontSize: '0.9rem' }}>{p.tech}</p>
              <ul className="bullet-points">
                {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
      case 'Education': return (
        <div className="education-content">
          <div className="section-header"><GraduationCap size={18} /> <span>Education</span></div>
          {resumeData.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '2rem', paddingLeft: '15px', borderLeft: '3px solid var(--sakura-petal)' }}>
              <h3>{edu.school}</h3>
              <p style={{ fontWeight: 700 }}>{edu.degree}</p>
              <p style={{ opacity: 0.6 }}>{edu.period}</p>
            </div>
          ))}
        </div>
      );
      case 'PostBox': return (
        <div className="contact-content" style={{ textAlign: 'center' }}>
          <Heart size={60} color="var(--sakura-petal)" style={{ margin: '0 auto 2rem' }} />
          <h2 className="display-font">Get in Touch <Heart size={24} style={{ display: 'inline', color: 'var(--sakura-vibrant)' }} /></h2>
          <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>Looking to discuss WebRTC, SRE, or collaboration opportunities in Bengaluru?</p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center' }}>
            <a href={`mailto:${resumeData.contact.email}`} style={{ background: 'var(--sakura-vibrant)', color: 'white', padding: '15px 35px', borderRadius: '16px', fontWeight: 800 }}>Email Afrah</a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" style={{ border: '2px solid var(--sakura-vibrant)', color: 'var(--sakura-vibrant)', padding: '15px 35px', borderRadius: '16px', fontWeight: 800 }}>LinkedIn</a>
          </div>
        </div>
      );
      default: return null;
    }
  };

  const menuItems = [
    { id: 'About', icon: <User />, label: 'Afrah Bio' },
    { id: 'Experience', icon: <Briefcase />, label: 'Experience' },
    { id: 'Stack', icon: <Cpu />, label: 'Stack' },
    { id: 'Gallery', icon: <FolderOpen />, label: 'Gallery' },
    { id: 'Education', icon: <GraduationCap />, label: 'Education' },
    { id: 'PostBox', icon: <Mail />, label: 'PostBox' }
  ];

  if (isBooting) {
    return (
      <div className="boot-screen">
        <div style={{ fontSize: '60px', marginBottom: '20px', animation: 'pulse 1.5s infinite' }}>🌸</div>
        <div style={{ width: '240px', height: '4px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--sakura-petal)', width: '100%', animation: 'load 1.2s' }} />
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--sakura-vibrant)' }}>Warming up Afrah OS...</p>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="mobile-os">
        <SakuraPetals />
        <div className="ios-status-bar">
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <div className="dynamic-island" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Signal size={14} /> <Wifi size={14} /> <Battery size={14} />
          </div>
        </div>
        <div className="ios-home-screen">
          {menuItems.map(app => (
            <div key={app.id} className="ios-app-icon" onClick={() => toggleWindow(app.id)}>
              <div className="ios-icon-box">{app.icon}</div>
              <span className="ios-icon-label">{app.label}</span>
            </div>
          ))}
        </div>
        <div className="ios-dock">
          {menuItems.slice(0, 4).map(app => (
            <div key={app.id} onClick={() => toggleWindow(app.id)} className="ios-icon-box" style={{ width: '60px', height: '60px' }}>{app.icon}</div>
          ))}
        </div>
        {openWindows.length > 0 && (
          <div className="ios-app-window">
            <div className="ios-window-header">
              <span className="ios-done-btn" onClick={() => setOpenWindows([])}>Done</span>
              <span style={{ fontWeight: 800 }}>{activeWindow}</span>
              <div style={{ width: 40 }} />
            </div>
            <div className="window-body" style={{ flex: 1, padding: '1.5rem' }}>
              {renderWindowContent(activeWindow)}
            </div>
            <div className="ios-home-indicator" onClick={() => setOpenWindows([])} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="desktop">
      <SakuraPetals />
      <header className="menu-bar">
        <div className="menu-left">
          <span className="apple-icon"></span>
          <span style={{ fontWeight: 800 }}>{resumeData.name}</span>
          <span className="menu-item">Connect</span>
          <span className="menu-item">Portfolio</span>
        </div>
        <div className="menu-right">
          <Wifi size={14} /> <Battery size={14} /> <Clock size={14} />
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </header>
      <main className="desktop-area">
        <div className="desktop-icons-grid">
          {menuItems.map(icon => (
            <div key={icon.id} className="desktop-icon" onClick={() => toggleWindow(icon.id)}>
              <div className="icon-visual" style={{ color: 'var(--sakura-vibrant)' }}>{icon.icon}</div>
              <span className="icon-label">{icon.label}</span>
            </div>
          ))}
        </div>
        {openWindows.map((name) => (
          <div
            key={name}
            className={`window ${activeWindow === name ? 'active' : ''}`}
            style={{
              top: `${windowPositions[name].y}px`,
              left: `${windowPositions[name].x}px`,
              zIndex: activeWindow === name ? 100 : 10
            }}
            onClick={() => setActiveWindow(name)}
          >
            <div className="window-header" onMouseDown={(e) => handleDragStart(e, name)}>
              <div className="traffic-lights">
                <div className="light light-close" onClick={(e) => { e.stopPropagation(); toggleWindow(name); }}></div>
                <div className="light light-minimize" />
                <div className="light light-maximize" />
              </div>
              <div className="window-title-container">{name}.app</div>
            </div>
            <div className="window-body">{renderWindowContent(name)}</div>
          </div>
        ))}
      </main>
      <div className="dock-container">
        <div className="dock">
          {menuItems.map(app => (
            <div key={app.id} className="dock-icon" onClick={() => toggleWindow(app.id)}>
              <div style={{ color: 'var(--coffee-bean)' }}>{app.icon}</div>
              {openWindows.includes(app.id) && <div className="dock-dot" />}
            </div>
          ))}
          <div className="dock-icon" onClick={() => window.open('https://github.com/afrahmahmud', '_blank')}><Github size={24} /></div>
          <div className="dock-icon" onClick={() => window.open(resumeData.contact.linkedin, '_blank')}><Linkedin size={24} /></div>
        </div>
      </div>
    </div>
  );
};

export default App;
