// Central content for the portfolio. Edit anything here — every section reads
// from this file, so you never have to touch the components to update copy.

export const profile = {
  name: 'Oyetunji Taofeek Ololade',
  firstName: 'Oyetunji',
  title: 'Backend Software Engineer & Technical Educator',
  location: 'Ilorin, Kwara State, Nigeria',
  email: 'oyetunjiteelad@gmail.com',
  phone: '0906 957 9704',
  availability: 'Available for freelance work',
  // Headshot for the About section — files in /public are served from the root
  photo: '/profile.png',
  // Short value proposition shown in the hero
  lead:
    'I design and ship high-performance REST APIs, WebSockets, and real-time collaborative systems in Go, Python & JavaScript — end-to-end, from database schema to polished UI.',
  // Longer narrative shown in the About section
  about: [
    'I’m a backend software engineer with a track record of designing and delivering scalable software from database architecture all the way to intuitive user interfaces. I specialize in high-performance APIs, WebSockets, and real-time collaborative systems.',
    'I’m also the founder of Logixia Academy, where I’ve built an interactive coding platform solo and taught 45+ students live — from programming fundamentals to distributed systems. I’ve led government-level digital upgrades and scaled developer tools to hundreds of active users.',
    'Whether it’s a fast API, a real-time product, or a full-stack app, I like owning the whole problem and shipping something reliable.',
  ],
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/purecoderz', handle: 'purecoderz', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/purecoders', handle: 'purecoders', icon: 'linkedin' },
  { label: 'Website', href: 'https://logixia.com.ng', handle: 'logixia.com.ng', icon: 'globe' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export const stats = [
  { value: '600+', label: 'Peak active users' },
  { value: '45+', label: 'Students taught live' },
  { value: '3', label: 'Platforms shipped' },
  { value: '100%', label: 'Solo, end-to-end' },
]

// Services render as little editor panes, so each one carries a `file` name for
// the window title bar, `lines` shown as `//` comments, and mono `tags`.
export const services = [
  {
    icon: 'server',
    title: 'Backend & API Development',
    file: 'api/server.go',
    lines: [
      'High-performance REST APIs',
      'WebSocket services in Go & Python',
      'Built for scale and reliability',
    ],
    tags: ['go', 'rest', 'websocket'],
  },
  {
    icon: 'bolt',
    title: 'Real-time & Collaborative Systems',
    file: 'realtime/hub.go',
    lines: [
      'Live, multi-user experiences',
      'Collaborative editors & execution',
      'Custom permission models',
    ],
    tags: ['websocket', 'sync', 'presence'],
  },
  {
    icon: 'layers',
    title: 'Full-Stack Web Apps',
    file: 'app/App.jsx',
    lines: [
      'End-to-end product builds',
      'React front-ends that stay fast',
      'Backed by PostgreSQL & Supabase',
    ],
    tags: ['react', 'supabase', 'postgres'],
  },
  {
    icon: 'database',
    title: 'Database Design & Optimization',
    file: 'db/schema.sql',
    lines: [
      'Relational schema design',
      'Query & index optimization',
      'Fast, dependable data layers',
    ],
    tags: ['postgres', 'indexes', 'migrations'],
  },
  {
    icon: 'card',
    title: 'Payments & Integrations',
    file: 'payments/checkout.js',
    lines: [
      'Automated payment flows',
      'Access gating & webhooks',
      'Paystack + Supabase Edge Functions',
    ],
    tags: ['paystack', 'webhooks', 'edge'],
  },
  {
    icon: 'cap',
    title: 'Technical Training & Curriculum',
    file: 'academy/curriculum.py',
    lines: [
      'Curriculum design & live teaching',
      'Fundamentals to distributed systems',
      '45+ students taught live',
    ],
    tags: ['python', 'mentoring', 'cohorts'],
  },
]

export const projects = [
  {
    image: '/logixia.png',
    name: 'Logixia Academy',
    badge: 'Flagship',
    role: 'Founder & Lead Engineer',
    live: 'https://logixia.com.ng',
    desc: 'An interactive coding platform I architected and deployed solo. A real-time collaborative workspace (CodeMirror 6 with a custom single-writer permission model), a client-side Python runtime via Pyodide powering auto-graded exercises and robot-grid challenges, and automated cohort access gating through Paystack + Supabase Edge Functions.',
    tech: ['React', 'CodeMirror 6', 'Pyodide', 'Supabase', 'Paystack', 'PostgreSQL'],
  },
  {
    // The file on disk is "gopher os.png" — the space has to be URL-encoded
    image: '/gopher%20os.png',
    name: 'Gopher OS',
    badge: '600+ users',
    role: 'Creator & Lead Developer',
    live: 'https://go-learning-lab.vercel.app',
    desc: 'A dedicated Go programming learning lab built for the Learn2Earn program. Scaled to 600+ peak active users with interactive exercises and real-time code execution tools.',
    tech: ['Go', 'Real-time execution', 'Interactive exercises'],
  },
  {
    image: '/osun.png',
    name: 'Osun Youth Affairs Portal',
    badge: 'Government',
    role: 'Manager & Technical Lead',
    live: 'https://osunyouthaffairs.com/home.php',
    desc: 'Led the technical upgrade and architectural restructuring of the official Osun State Youth Affairs digital portal. Refactored database queries and server routines for faster page loads and higher post-deployment reliability.',
    tech: ['Backend Engineering', 'PostgreSQL', 'Performance'],
  },
]

// Rendered as a branching timeline: `dir` is the mono badge, `title` the
// human label, `icon` the badge glyph, `items` the branch leaves.
export const skillGroups = [
  {
    dir: 'languages/',
    title: 'Languages',
    icon: 'code',
    items: ['Go', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML5 / CSS3'],
  },
  {
    dir: 'backend/',
    title: 'Backend & Architecture',
    icon: 'server',
    items: ['REST APIs', 'WebSockets', 'API Design', 'System Architecture', 'Microservices'],
  },
  {
    dir: 'databases/',
    title: 'Databases & Storage',
    icon: 'database',
    items: ['PostgreSQL', 'Supabase', 'Schema Design', 'Query Optimization'],
  },
  {
    dir: 'frontend/',
    title: 'Frontend & Tools',
    icon: 'layers',
    items: ['React', 'CodeMirror 6', 'Pyodide', 'Server-Rendered Templates'],
  },
  {
    dir: 'devops/',
    title: 'DevOps & Platforms',
    icon: 'terminal',
    items: ['Linux / Ubuntu', 'Git', 'Render', 'VS Code', 'Paystack API'],
  },
]

export const education = [
  { title: 'HND, Statistics', org: 'Federal Polytechnic Ede', year: '2022' },
  { title: 'The Complete 2024 Web Development Bootcamp', org: 'Udemy', year: '2024' },
  { title: '100 Days of Code: Python Pro Bootcamp', org: 'Udemy', year: '2024' },
]
