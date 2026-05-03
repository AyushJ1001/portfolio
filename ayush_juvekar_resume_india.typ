#set page(
  paper: "us-letter",
  margin: (x: 0.5in, y: 0.5in),
)

#set text(
  font: "New Computer Modern",
  size: 9.2pt,
)

#set par(
  justify: false,
  leading: 0.46em,
)

#show heading.where(level: 1): it => [
  #set text(size: 18pt, weight: "bold")
  #set align(center)
  #it.body
  #v(-0.3em)
]

#show heading.where(level: 2): it => [
  #set text(size: 10.5pt, weight: "bold")
  #v(0.38em)
  #upper(it.body)
  #v(-0.8em)
  #line(length: 100%, stroke: 0.5pt)
  #v(0.08em)
]

#let contact_link(content) = {
  text(content, size: 8.2pt)
}

// Header
#align(center)[
  = AYUSH JUVEKAR
  #contact_link[
    *Email:* ayushjuvekar\@gmail.com | *Phone:* +91 8888385669 | *Address:* Pune, Maharashtra, India \
    *LinkedIn:* linkedin.com/in/ayushjuvekar | *GitHub:* github.com/AyushJ1001 | *Portfolio:* ayushjuvekar.com
  ]
]

== Profile

Full-stack developer and ML researcher with an M.S. in Computer Science, production experience as a freelance sole developer, and research depth across computer vision, edge inference, privacy-preserving analytics, and IoT systems.

== Education

*Michigan Technological University*, Houghton, MI #h(1fr) *CGPA: 3.9/4.0* \
_M.S. Computer Science_ #h(1fr) Graduated April 24, 2026

*Pune Institute of Computer Technology*, Pune, India #h(1fr) *GPA: 8.14/10* \
_B.E. Computer Engineering_ #h(1fr) June 2024

== Experience

*The Mind Point - Full-Stack E-commerce Platform* | _Next.js 15, React 19, Clerk, Razorpay_ #h(1fr) Aug 2025 - Present
- Freelance sole developer for a mental health education course commerce platform with Razorpay payments, Clerk auth, dynamic pricing, BOGO campaigns, persistent carts, and automated enrollment confirmations via Resend
- Built admin tracking with Google Sheets, loyalty points, WCAG accessibility improvements, and PostHog analytics for retention and funnel insights
- Own architecture, implementation, deployment, and release decisions across storefront, checkout, enrollment, admin, analytics, and notification workflows

*Teaching Assistant - Physics Department* | Michigan Technological University #h(1fr) Sep 2024 - Apr 24, 2026
- Facilitated learning for 60+ students in PH 2100/2200; developed Python automation reducing admin work 20 hours/semester
- Conducted tutorials improving average exam scores 15% and collaborated with faculty on course materials and assessments

== Selected Projects

*YayCamp - Full-Stack Camping Platform* | _Next.js, TypeScript, Prisma, PostgreSQL_ | yaycamp.ayushjuvekar.com
- Architected full-stack app with Next.js SSR and Clerk authentication managing 100+ users, reducing page load time 40%
- Designed PostgreSQL schema with Prisma ORM, mapped campground discovery with React Leaflet, optimized queries by 30%, and achieved 99.9% uptime

*Anomaly Detection in Crowd Surveillance* | _Python, TensorFlow, Edge Computing_ | CVBDSL Lab
- Trained CNN achieving 92% accuracy on 10K+ frames; optimized with TensorFlow Lite reducing inference time 73% on Jetson Nano
- Deployed real-time pipeline processing 720p at 25 FPS across 5 edge devices, cutting cloud costs 85% and response time 40%

*Secure Data Analytics with Homomorphic Encryption* | _Python, CKKS, Docker_ | CVBDSL Lab
- Built privacy-preserving pipeline using CKKS encryption for healthcare data, achieving 98% accuracy with HIPAA compliance
- Containerized modules with Docker, streamlining deployment and improving processing efficiency 25%

*IoT Air Quality Monitoring System* | _C++, Arduino, MQTT, Python_ | *Published: ESCI 2023*
- Engineered CO monitoring system using MQTT, Zigbee mesh networking, Kalman filtering, and ML predictive alerts to improve detection accuracy 20%
- Presented work at ESCI 2023; publication indexed by IEEE with DOI: 10.1109/ESCI56872.2023.10100144

== Technical Skills

*Languages:* Python, JavaScript/TypeScript, Java, C++, Go, Rust, C\# | *Frontend:* React, Next.js, TailwindCSS, shadcn/ui | *Backend:* Node.js, Express.js, Prisma ORM, REST APIs | *Databases:* PostgreSQL, MongoDB, Redis | *ML/AI:* TensorFlow, Scikit-learn, OpenCV, NumPy, Pandas | *DevOps:* Docker, Git, Vercel, Linux | *IoT:* Arduino, MQTT, Zigbee | *Auth/Payments:* Clerk, JWT, Razorpay

== Publications & Awards

A. Juvekar et al., "Carbon Monoxide Concentration Monitoring System," _ESCI 2023_ | *2nd Place* PICT InC 24 (Data Structures) | *Conference Presenter* ESCI 2023 | *Mathex & MSCE Scholarships* 2021-2024
