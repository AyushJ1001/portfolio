#set page(
  paper: "us-letter",
  margin: (x: 0.5in, y: 0.5in),
)

#set text(
  font: "New Computer Modern",
  size: 9.5pt,
)

#set par(
  justify: false,
  leading: 0.5em,
)

#show heading.where(level: 1): it => [
  #set text(size: 18pt, weight: "bold")
  #set align(center)
  #it.body
  #v(-0.3em)
]

#show heading.where(level: 2): it => [
  #set text(size: 11pt, weight: "bold")
  #v(0.4em)
  #upper(it.body)
  #v(-0.8em)
  #line(length: 100%, stroke: 0.5pt)
  #v(0.1em)
]

#let contact_link(content) = {
  text(content, size: 8.5pt)
}

// Header
#align(center)[
  = AYUSH JUVEKAR
  #contact_link[
    *Email:* aajuveka\@mtu.edu | *Phone:* +1 (906) 299-4314 | *LinkedIn:* linkedin.com/in/ayushjuvekar \
    *GitHub:* github.com/AyushJ1001 | *Portfolio:* ayushjuvekar.com
  ]
]

== Education

*Michigan Technological University*, Houghton, MI #h(1fr) *GPA: 3.88/4.0* \
_M.S. Computer Science_ #h(1fr) Expected Spring 2026

*Pune Institute of Computer Technology*, Pune, India #h(1fr) *GPA: 8.14/10* \
_B.E. Computer Engineering_ #h(1fr) June 2024

== Technical Skills

*Languages:* Python, JavaScript/TypeScript, Java, C++, Go, Rust, C\# | *Frontend:* React, Next.js, TailwindCSS, shadcn/ui | *Backend:* Node.js, Express.js, Prisma ORM | *Databases:* PostgreSQL, MongoDB | *ML/AI:* TensorFlow, Scikit-learn, OpenCV, NumPy, Pandas | *DevOps:* Docker, Git, Vercel, Linux | *IoT:* Arduino, MQTT, Zigbee | *Auth:* Clerk, JWT

== Projects

*YayCamp - Full-Stack Camping Platform* | _Next.js, TypeScript, Prisma, PostgreSQL_ | yaycamp.ayushjuvekar.com
- Architected full-stack app with Next.js 14 SSR and Clerk authentication managing 100+ users, reducing page load time 40%
- Designed PostgreSQL schema with Prisma ORM and React Leaflet mapping, optimizing queries by 30% and achieving 99.9% uptime

*MonkeyLang-CS - Programming Language Interpreter* | _C\#_ | github.com/AyushJ1001/MonkeyLang-CS
- Implemented complete lexer, parser, and tree-walking interpreter supporting functions, closures, and first-class functions
- Built REPL environment with 95%+ test coverage across lexical analysis, parsing, and evaluation modules

*Anomaly Detection in Crowd Surveillance* | _Python, TensorFlow, Edge Computing_ | CVBDSL Lab
- Trained CNN achieving 92% accuracy on 10K+ frames; optimized with TensorFlow Lite reducing inference time 73% on Jetson Nano
- Deployed real-time pipeline processing 720p at 25 FPS across 5 edge devices, cutting cloud costs 85% and response time 40%

*Particle Vibration Analysis System* | _Python, OpenCV, ZED Cameras_ | Michigan Tech Research
- Developed CV system tracking 50+ particles at 60 FPS with sub-mm precision using stereo cameras and 3D data pipeline
- Applied statistical analysis correlating motion patterns with vibration frequencies, reducing manual analysis time 75%

*Secure Data Analytics with Homomorphic Encryption* | _Python, CKKS, Docker_ | CVBDSL Lab
- Built privacy-preserving pipeline using CKKS encryption for healthcare data, achieving 98% accuracy with HIPAA compliance
- Containerized modules with Docker, streamlining deployment and improving processing efficiency 25%

*IoT Air Quality Monitoring System* | _C++, Arduino, MQTT, Python_ | *Published: ESCI 2023*
- Engineered CO monitoring system with MQTT protocol, reducing detection time 35% via ML predictive alerts
- Presented at ESCI 2023 Int'l Conference; improved accuracy 20% through Kalman filtering and Zigbee mesh network

*Ranking App - Tournament Bracket System* | _TypeScript, React, Redis_ | ranking.ayushjuvekar.com
- Created bracket app with decision-time-weighted scoring algorithm; implemented real-time Redis persistence for multi-device sync

== Experience

*Teaching Assistant - Physics Department* | Michigan Technological University #h(1fr) Sep 2024 - Present
- Facilitate learning for 60+ students in PH 2100/2200; developed Python automation reducing admin work 20 hours/semester
- Conduct tutorials improving average exam scores 15%; collaborate with faculty on course materials and assessments

== Publications

A. Juvekar et al., "Carbon Monoxide Concentration Monitoring System," _ESCI 2023_, DOI: 10.1109/ESCI56872.2023.10100144

== Awards

*2nd Place* PICT InC 24 (Data Structures) | *Conference Presenter* ESCI 2023 | *Mathex & MSCE Scholarships* 2021-2024
