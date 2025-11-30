import "./App.css";
import NameWriter from "./components/NameWriter";
import GradientText from "./components/GradientText";
import MagicBento from "./components/MagicBento";
import LiquidEther from "./components/LiquidEther";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import TextPressure from "./components/TextPressure";
import TrueFocus from "./components/TrueFocus";
import ExperienceAccordion from "./components/ExperienceAccordion";
import SkillsAccordion from "./components/SkillsAccordion";
import ProjectFilter from "./components/ProjectFilter";

function App() {
  const heroMetrics = [
    { value: "99.98%", label: "Crash-free rate" },
    { value: "$200K+", label: "Downtime prevented" },
    { value: "10K+", label: "Developers supported" },
    { value: "40%", label: "Crash rate reduction" },
  ];

  const experience = [
    {
      period: "July 2024 — Present",
      org: "Exotel",
      role: "Member of Technical Staff (MTS-1)",
      location: "Bengaluru, India",
      summary:
        "Designing, creating, and enhancing WebRTC-based SDKs for Web, Android, iOS, and Flutter platforms. Taking monthly on-call duty, handling critical production incidents, and ensuring minimal downtime.",
      achievements: [
        "Conducted blameless post-mortems for severity-1 incidents, implementing corrective actions that prevented over $200K in potential downtime costs",
        "Engineered background noise suppression feature, leading to 40% reduction in user-reported audio quality issues and contributing to major enterprise client acquisition",
        "Engineered configurable logging and event-shipping mechanism to meet stringent security and data privacy requirements of fintech client (Wingbank), ensuring compliance and contract renewal",
        "Rapidly diagnosed and patched critical call disconnection bug caused by breaking external API change from Meta (WhatsApp), restoring full functionality for high-volume client within 24 hours",
        "Reduced Android SDK crash rate by 40% through systematic debugging and memory leak fixes, directly improving app store ratings from 3.8 to 4.6 stars",
        "Architected cross-platform WebRTC SDKs (Android, iOS, Flutter, Web) supporting 10,000+ developers, achieving and maintaining 99.98% crash-free rate",
        "Led complete re-architecture of Flutter SDK plugin (ExotelPlugin), resolving persistent background execution issues and developing sample app that reduced average client integration time from 3 weeks to under 5 days",
        "Developed unified communication SDK (Swift, Kotlin, Dart, TypeScript), achieving 85% code reusability and reducing new feature development time by 40%",
        "Implemented adaptive bitrate streaming using WebRTC simulcast, improving video quality by 40% while reducing bandwidth consumption by 25% for mobile users",
        "Integrated ElasticSearch-based event metrics pipeline, reducing mean time to detect (MTTD) issues from 20 minutes to 3 minutes",
        "Optimized WebRTC connection time by 35% through custom STUN/TURN configurations, improving ICE negotiation success rate from 93% to 99.5%",
        "Developed real-time dashboard (Prometheus, Grafana) tracking 50+ SDK performance metrics, enabling proactive issue detection for 100,000+ daily users",
        "Enhanced audio quality by implementing acoustic echo cancellation and noise suppression, improving Mean Opinion Score (MOS) from 3.2 to 4.3",
        "Built client-side diagnostic toolkit for WebSDK, exposing new API for customers to retrieve logs directly and reducing debugging support tickets by 20%",
        "Architected multi-codec support (Opus, G.711) in Android & Web SDKs, improving call reliability by 15% in low-network conditions",
        "Optimized SDK initialization time by 50% (from 800ms to 400ms) through lazy loading and modular architecture",
        "Architected core voice routing API enhancement to enable cross-regional failover, ensuring service continuity and fault tolerance during regional service degradation",
        "Developed granular audio control feature for WebSDK, allowing users to set distinct volume levels for call audio, ringtones, and notifications, resolving key agent pain point",
        "Engineered runtime audio device management for WebSDK, including device enumeration, selection, and callback mechanism to handle runtime device changes (e.g., unplugging headset)",
        "Hardened WebView security in mobile SDK by disabling insecure file access settings and removing deprecated methods, mitigating potential cross-file-origin vulnerabilities",
        "Managed end-to-end rotation of critical SSL certificates for core platform, preventing service outages and authoring new Standard Operating Procedure (SOP) to streamline future rotations",
        "Automated SIP trunk testing using Jenkins and authored new SOP for Network Operations Center (NoC), enabling them to independently validate regional trunk functionality",
        "Resolved complex suite of P0, call-blocking bugs for major client (Sprinklr), architecting multi-instance SDK initialization in single browser tab and gracefully handling non-standard SIP headers to unblock critical platform releases",
        "Proactively managed semantic versioning and SDK dependencies to maintain backward compatibility across 5 major versions, preventing ecosystem-wide failures and supporting 95% of existing integrations",
        "Diagnosed and resolved critical, platform-wide thread slowness issue by tuning aggressive detection and timeout parameters in core proxy, mitigating platform-wide call failures during regional downtime event",
      ],
    },
    {
      period: "January 2024 — July 2024",
      org: "Exotel",
      role: "Tech Intern",
      location: "Bengaluru, India",
      summary:
        "Developed real-time communication features in Flutter and Java, achieving 40% feature adoption rate among 5,000+ beta users.",
      achievements: [
        "Developed real-time communication features in Flutter and Java, achieving 40% feature adoption rate among 5,000+ beta users",
        "Implemented automated testing suite with 85% code coverage (JUnit, Espresso), reducing post-release bugs by 25%",
        "Optimized API response times by 35% through efficient data structures and caching strategies, improving user experience scores by 20%",
        "Collaborated with 8-member cross-functional team using Agile methodology, consistently delivering features 15% ahead of sprint commitments",
      ],
    },
  ];

  const education = [
    {
      period: "November 2020 — January 2024",
      org: "BMS College of Engineering",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      location: "Bengaluru, India",
      logo: "/bms_logo.png",
    },
    {
      period: "March 2018 — March 2020",
      org: "Indian School al Wadi al Kabir",
      degree: "Higher Secondary Education",
      field: "Science Stream",
      location: "Muscat, Oman",
      logo: "/iswk_logo.png",
    },
  ];

  const technicalSkills = {
    languages: [
      "Swift (iOS)",
      "Kotlin (Android)",
      "Dart (Flutter)",
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "C",
      "C++",
    ],
    protocols: [
      "WebRTC",
      "SIP",
      "VoIP",
      "STUN/TURN",
      "ICE",
      "WebSockets",
      "SIP.js",
    ],
    media: [
      "Opus",
      "G.711 (PCMA/PCMU)",
      "Adaptive Bitrate Streaming (Simulcast, SVC)",
    ],
    audio: [
      "Acoustic Echo Cancellation (AEC)",
      "Noise Suppression",
      "Web Audio API (GainNode)",
    ],
    signaling: [
      "Kamailio",
      "RTPEngine",
      "DTMF",
      "SIP Headers/Routing",
    ],
    platforms: {
      android: ["Android SDK", "Android Services", "Foreground Services (Android 14/15)", "ProGuard"],
      ios: ["iOS SDK", "CallKit (and removal for compliance)"],
      flutter: ["Native Plugin Development", "Method/Event Channels", "Dart Isolates"],
      web: ["WebSDK Development", "DOM", "Browser APIs"],
    },
    monitoring: ["Prometheus", "Grafana (Real-time Dashboards)"],
    logging: [
      "Elasticsearch",
      "Distributed Tracing",
      "Structured Logging",
    ],
    cicd: ["Jenkins", "AWS (S3, STS)"],
    testing: ["JUnit", "Espresso", "Automated Test Suites"],
    practices: [
      "SDK Architecture",
      "API Design",
      "Agile Methodology",
      "Semantic Versioning",
      "Unit Testing",
      "Integration Testing",
    ],
    reliability: [
      "Incident Management",
      "Blameless Post-mortems (MTTR/MTTD)",
      "On-Call Rotation",
    ],
    security: [
      "Secure Logging (PII/JWT handling)",
      "WebView Security",
    ],
  };

  const projects = [
    {
      color: "#060010",
      category: "mobile",
      label: "Mobile SDKs",
      title: "Cross-Platform Mobile Apps",
      description:
        "Architected unified SDKs for Android, iOS, and Flutter supporting 10K+ developers with 99.98% crash-free rate.",
    },
    {
      color: "#060010",
      category: "web",
      label: "Web Applications",
      title: "Full Stack Web Solutions",
      description:
        "Built responsive web applications with React, TypeScript, and modern web technologies for seamless user experiences.",
    },
    {
      color: "#060010",
      category: "backend",
      label: "Backend Services",
      title: "Scalable API Architecture",
      description:
        "Designed and implemented RESTful APIs, real-time services, and microservices architecture for high-performance systems.",
    },
    {
      color: "#060010",
      category: "database",
      label: "Database Systems",
      title: "Data Architecture & Optimization",
      description:
        "Optimized database queries, designed efficient schemas, and implemented data pipelines for ElasticSearch, PostgreSQL, and NoSQL solutions.",
    },
    {
      color: "#060010",
      category: "backend",
      label: "Observability",
      title: "Monitoring & Metrics",
      description:
        "Integrated event metrics pipeline reducing MTTD from 20 minutes to 3 minutes for 100K+ daily users.",
    },
    {
      color: "#060010",
      category: "mobile",
      label: "Performance",
      title: "Mobile Optimization",
      description:
        "Optimized mobile app initialization by 50%, improved performance metrics, and reduced crashes by 40%.",
    },
  ];

  return (
    <div className="app-root">
      <div className="ether-background">
        <LiquidEther
          colors={[
            "#a8cfff",
            "#c9e7ff",
            "#fddbcf",
            "#ffb7d5",
            "#d4b8ff",
            "#a8cfff",
          ]}
          mouseForce={24}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.45}
          autoIntensity={2.4}
          takeoverDuration={0.3}
          autoResumeDelay={2800}
          autoRampDuration={0.6}
        />
      </div>

      <div className="app-shell">
        <header className="site-header">
          <div className="logo-mark">AM</div>
          <nav className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </nav>
          <a className="ghost-link" href="mailto:afrahmahmud2014@gmail.com">
            Contact
          </a>
        </header>

        <main>
          <section className="hero-section" id="home">
            <div className="hero-copy">
              <div className="hero-role-container">
                <NameWriter
                  texts={[
                    "Full Stack Website Developer",
                    "Full Stack Mobile Developer",
                    "Backend Developer",
                    "Database Architect",
                  ]}
                  className="hero-role"
                />
              </div>

              <GradientText
                colors={[
                  "#6ab4ff",
                  "#8ecbff",
                  "#ffc7a6",
                  "#ff8fb8",
                  "#c89aff",
                  "#6ab4ff",
                ]}
                animationSpeed={4.5}
                showBorder={false}
                className="hero-name-gradient"
              >
                Afrah Mahmud
              </GradientText>

              <BlurText
                className="hero-lede"
                animateBy="words"
                direction="top"
                text="Full stack developer specializing in web, mobile, and backend systems. Expertise in building scalable real-time communication platforms, cross-platform SDKs, and robust database architectures. Proficient in WebRTC, React, Flutter, Node.js, Python, and modern database technologies."
                delay={80}
              />

              <div className="hero-metrics-strip">
                <NameWriter
                  texts={[
                    "99.98% crash-free rate across Android · iOS · Flutter · Web.",
                    "Prevented $200K+ in potential downtime costs through incident management.",
                    "Reduced Android SDK crash rate by 40%, improving ratings from 3.8 to 4.6 stars.",
                    "Optimized WebRTC connection time by 35%, achieving 99.5% ICE negotiation success.",
                  ]}
                  className="hero-metrics"
                />
              </div>

              <div className="hero-cta">
                <a
                  className="cta primary"
                  href="mailto:afrahmahmud2014@gmail.com"
                >
                  Get in touch
                </a>
                <a
                  className="cta secondary"
                  href="https://www.linkedin.com/in/afrahmahmud"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="cta secondary"
                  href="https://github.com/afrahmahmud"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
                  </div>

            <aside className="hero-panel">
              <div className="contact-card">
                <p className="contact-label">Email</p>
                      <a href="mailto:afrahmahmud2014@gmail.com">
                        afrahmahmud2014@gmail.com
                      </a>
                <p className="contact-label">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/afrahmahmud"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/afrahmahmud
                </a>
                <p className="contact-label">GitHub</p>
                <a
                  href="https://github.com/afrahmahmud"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/afrahmahmud
                </a>
                <p style={{ marginTop: "1rem" }}>Bengaluru, India · Remote-friendly</p>
              </div>

              <div className="hero-metrics">
                {heroMetrics.map((metric) => (
                  <div className="hero-metric" key={metric.label}>
                    <span>{metric.value}</span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="experience-section" id="experience">
            <div className="section-header">
              <SplitText
                tag="h2"
                className="section-title"
                text="Professional Experience"
                splitType="chars,words"
                delay={40}
                duration={0.5}
              />
              <BlurText
                className="section-subtitle"
                animateBy="words"
                direction="top"
                text="Proven ability to enhance system observability, reduce crash rates, and improve application stability."
                delay={60}
              />
            </div>
            <ExperienceAccordion items={experience} />
          </section>

          <section className="education-section" id="education">
            <div className="section-header">
              <SplitText
                tag="h2"
                className="section-title"
                text="Education"
                splitType="chars,words"
                delay={40}
                duration={0.5}
              />
            </div>
            <div className="education-grid">
              {education.map((item, idx) => (
                <article key={item.period} className="education-card">
                  <div className="education-logo-container">
                    <img 
                      src={item.logo || '/logo512.png'} 
                      alt={`${item.org} logo`}
                      className="education-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <BlurText
                    className="education-period"
                    animateBy="chars"
                    direction="top"
                    text={item.period}
                    delay={30}
                  />
                  <SplitText
                    tag="h3"
                    className="education-degree"
                    text={item.degree}
                    splitType="words"
                    delay={50}
                    duration={0.4}
                  />
                  {item.field && (
                    <BlurText
                      className="education-field"
                      animateBy="words"
                      direction="top"
                      text={item.field}
                      delay={60}
                    />
                  )}
                  <BlurText
                    className="education-org"
                    animateBy="words"
                    direction="top"
                    text={item.org}
                    delay={70}
                  />
                  <p className="education-location">{item.location}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="skills-section" id="skills">
            <div className="section-header">
              <SplitText
                tag="h2"
                className="section-title"
                text="Technical Skills"
                splitType="chars,words"
                delay={40}
                duration={0.5}
              />
              <BlurText
                className="section-subtitle"
                animateBy="words"
                direction="top"
                text="Comprehensive expertise across platforms, protocols, and engineering practices."
                delay={60}
              />
            </div>
            <SkillsAccordion skills={technicalSkills} />
          </section>

          <section className="values-section">
            <div className="values-container">
              <div className="values-text">
                <SplitText
                  tag="h2"
                  className="values-title"
                  text="Core Values"
                  splitType="chars,words"
                  delay={40}
                  duration={0.5}
                />
                <TrueFocus
                  sentence="Observability Reliability Empathy Craft Execution"
                  animationDuration={0.6}
                  pauseBetweenAnimations={0.8}
                  blurAmount={6}
                  borderColor="#6ab4ff"
                  glowColor="rgba(106, 180, 255, 0.4)"
                />
              </div>
              <div className="values-visual">
                <div className="text-pressure-container">
                  <TextPressure
                    text="IMPACT"
                    textColor="#f6f7ff"
                    strokeColor="#ff8fb8"
                    weight
                    width
                    italic
                    stroke
                    minFontSize={64}
                  />
                </div>
              </div>
            </div>
          </section>
                  
          <section className="bento-wrapper" id="projects">
            <div className="section-header">
              <SplitText
                tag="h2"
                className="section-title"
                text="Projects & Work"
                splitType="chars,words"
                delay={40}
                duration={0.5}
              />
              <BlurText
                className="section-subtitle"
                animateBy="words"
                direction="top"
                text="Filter by specialization to explore my work across different domains. Click on any project to view details, demos, and case studies."
                delay={60}
              />
            </div>
            <ProjectFilter projects={projects} />
          </section>
        </main>

        <footer className="site-footer">
          <BlurText
            className="footer-text"
            animateBy="words"
            direction="top"
            text="Let's build thoughtful, resilient products together."
            delay={50}
          />
          <div className="footer-links">
            <a href="mailto:afrahmahmud2014@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/afrahmahmud" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/afrahmahmud" target="_blank" rel="noreferrer">GitHub</a>
      </div>
        </footer>
    </div>
</div>
  );
}

export default App;
