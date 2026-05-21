#let role_label(role) = {
  if role == "backend-engineer" {
    "Backend Engineer"
  } else if role == "frontend-engineer" {
    "Frontend Engineer"
  } else if role == "full-stack-engineer" {
    "Full-Stack Engineer"
  } else if role == "ml-data-scientist" {
    "ML / Data Scientist"
  } else if role == "computer-vision-edge-ai" {
    "Computer Vision / Edge AI Engineer"
  } else if role == "iot-embedded-engineer" {
    "IoT / Embedded Engineer"
  } else {
    "Full-Stack Engineer"
  }
}

#let profile(role) = {
  if role == "backend-engineer" {
    "Backend-oriented software engineer focused on database-backed products, API design, auth/payment workflows, and production deployment."
  } else if role == "frontend-engineer" {
    "Frontend engineer focused on React/Next.js product interfaces, responsive UI, accessibility, and polished user workflows."
  } else if role == "ml-data-scientist" {
    "Computer science graduate with applied ML and data-analysis experience across model evaluation, computer vision, and privacy/security-focused Python workflows."
  } else if role == "computer-vision-edge-ai" {
    "Computer vision engineer focused on video analysis, edge inference, object detection workflows, and camera/sensor-backed research prototypes."
  } else if role == "iot-embedded-engineer" {
    "IoT and embedded-systems engineer focused on Arduino/C++ sensor prototypes, MQTT/Zigbee communication, Node-RED automation, and edge-device demos."
  } else {
    "Full-stack engineer building production web products with Next.js, TypeScript, databases, auth, payments, analytics, and deployment ownership."
  }
}

#let skill_rows(role) = {
  if role == "backend-engineer" {
    (
      (category: "Languages", skills: "TypeScript, Python, Java, C#, Go"),
      (category: "Backend", skills: "Node.js, Express.js, REST APIs, Prisma ORM"),
      (category: "Databases", skills: "PostgreSQL, Redis, MongoDB"),
      (category: "Auth & Payments", skills: "Clerk, JWT, Razorpay"),
      (category: "DevOps", skills: "Docker, Git, Vercel, Linux"),
      (category: "Testing / Systems", skills: "TDD, interpreter design"),
    )
  } else if role == "frontend-engineer" {
    (
      (category: "Languages", skills: "TypeScript, JavaScript, HTML, CSS"),
      (category: "Frontend", skills: "React, Next.js, Tailwind CSS, shadcn/ui"),
      (category: "UI Engineering", skills: "Responsive design, accessibility, interactive state, component architecture"),
      (category: "Product Integrations", skills: "Clerk, Razorpay Checkout, PostHog, Resend"),
      (category: "Tooling", skills: "Git, Vercel, ESLint"),
    )
  } else if role == "ml-data-scientist" {
    (
      (category: "Languages", skills: "Python, SQL, C++, TypeScript"),
      (category: "ML / Data", skills: "TensorFlow, Scikit-learn, NumPy, Pandas"),
      (category: "Computer Vision", skills: "OpenCV, image/video preprocessing"),
      (category: "Experimentation", skills: "Model evaluation, dataset preparation, feature analysis"),
      (category: "Tools", skills: "Jupyter Notebook, Git, Docker"),
      (category: "Databases", skills: "PostgreSQL, MongoDB"),
    )
  } else if role == "computer-vision-edge-ai" {
    (
      (category: "Languages", skills: "Python, C++, MATLAB"),
      (category: "Computer Vision", skills: "OpenCV, MATLAB Computer Vision workflows, image/video processing, object detection"),
      (category: "ML / Edge AI", skills: "TensorFlow, TensorFlow Lite, CNNs, Jetson Nano"),
      (category: "Sensors / Cameras", skills: "ZED 2 camera video, Arduino sensor data"),
      (category: "Data Workflows", skills: "Dataset preparation, model evaluation, experiment documentation"),
      (category: "Tools", skills: "Jupyter Notebook, Git, Linux"),
    )
  } else if role == "iot-embedded-engineer" {
    (
      (category: "Languages", skills: "C++, Python, MATLAB"),
      (category: "Embedded / IoT", skills: "Arduino Uno, sensor integration, MQTT, Zigbee"),
      (category: "Automation", skills: "Node-RED flows, live sensor-triggered control"),
      (category: "Edge / Computer Vision", skills: "Jetson Nano, TensorFlow Lite, ZED 2 camera video"),
      (category: "Data / Analysis", skills: "Jupyter Notebook, NumPy, Pandas"),
      (category: "Tools", skills: "Git, Linux"),
    )
  } else {
    (
      (category: "Languages", skills: "TypeScript, Python, Java, C#"),
      (category: "Frontend", skills: "React, Next.js, Tailwind CSS, shadcn/ui"),
      (category: "Backend", skills: "Node.js, Express.js, REST APIs, Prisma ORM"),
      (category: "Databases", skills: "PostgreSQL, Redis, MongoDB"),
      (category: "Product Integrations", skills: "Clerk, Razorpay, Resend, PostHog"),
      (category: "DevOps", skills: "Docker, Git, Vercel, Linux"),
    )
  }
}

#let education = (
  (school: "Michigan Technological University", location: "Houghton, MI", degree: "M.S. Computer Science", metric: "CGPA: 3.9/4.0", date: "Graduated Apr 24, 2026"),
  (school: "Pune Institute of Computer Technology", location: "Pune, India", degree: "B.E. Computer Engineering", metric: "GPA: 8.14/10", date: "Jun 2024"),
)

#let mind_point(role) = {
  let common = (
    title: "Freelance Sole Developer",
    org: "The Mind Point - Mental Health Education Platform",
    location: "Pune, India",
    date: "Aug 2025 - Present",
  )
  if role == "backend-engineer" {
    common + (
      bullets: (
        "Delivered paid course enrollment for a live business by building checkout, enrollment, admin tracking, and notification workflows with Next.js, Clerk, Razorpay, Resend, PostHog, and Vercel.",
        "Reduced manual enrollment handling by integrating Razorpay payments, automated confirmations, Google Sheets tracking, and authenticated account flows from scratch.",
      ),
    )
  } else if role == "frontend-engineer" {
    common + (
      bullets: (
        "Built the production storefront from scratch for a mental health education business, creating responsive course, cart, checkout, and enrollment flows in Next.js and React.",
        "Improved the buyer workflow by integrating Clerk account flows, Razorpay Checkout, PostHog analytics, Resend confirmations, and accessibility-focused UI updates.",
      ),
    )
  } else {
    common + (
      bullets: (
        "Built a production course-commerce platform from scratch for a mental health education business, supporting real paid enrollments through Razorpay and Clerk-authenticated accounts.",
        "Owned storefront, cart, checkout, enrollment, admin tracking, analytics, email confirmations, and Vercel deployment across the full product workflow.",
      ),
    )
  }
}

#let teaching_assistant() = (
  title: "Teaching Assistant - Physics Department",
  org: "Michigan Technological University",
  location: "Houghton, MI",
  date: "Sep 2024 - Apr 24, 2026",
  bullets: (
    "Supervised and graded physics labs for 100+ students across four semesters, guiding experiments, explaining concepts, and providing clear feedback across five lab sections per semester.",
  ),
)

#let encryption_internship() = (
  title: "Technical Intern",
  org: "CVBDSL Lab, SCTR's Pune Institute of Computer Technology",
  location: "Pune, India",
  date: "Feb 2023 - May 2023",
  bullets: (
    "Analyzed RSA and related encryption approaches in Python/Jupyter during a four-month academic internship, comparing implementation tradeoffs for computational cost and efficiency.",
  ),
)

#let experiences(role) = {
  if role == "backend-engineer" {
    (mind_point(role), teaching_assistant(), encryption_internship())
  } else if role == "frontend-engineer" or role == "full-stack-engineer" {
    (mind_point(role), teaching_assistant())
  } else if role == "ml-data-scientist" {
    (teaching_assistant(), encryption_internship())
  } else {
    (teaching_assistant(),)
  }
}

#let project_yaycamp(role) = {
  let base = (
    title: "YayCamp - Campground Discovery Platform",
    tech: "Next.js, TypeScript, Prisma, PostgreSQL, Clerk, React Leaflet",
    links: (
      (label: "Live", url: "https://yaycamp.ayushjuvekar.com"),
      (label: "GitHub", url: "https://github.com/AyushJ1001/yaycamp"),
    ),
  )
  if role == "backend-engineer" {
    base + (
      bullets: (
        "Built and deployed a full-stack campground app with auth-protected workflows, Prisma data modeling, PostgreSQL persistence, and server-rendered Next.js routes.",
        "Structured relational campground data and application flows around searchable listings, saved state, and map-backed discovery without relying on unsupported usage metrics.",
      ),
    )
  } else if role == "frontend-engineer" {
    base + (
      bullets: (
        "Built a live campground discovery UI with responsive Next.js pages, Clerk account flows, and React Leaflet map interactions for browsing location-based listings.",
        "Connected frontend states to typed data models and deployed the project publicly so recruiters can inspect the product flow directly.",
      ),
    )
  } else {
    base + (
      bullets: (
        "Built and deployed a full-stack campground discovery app with Next.js, TypeScript, Clerk authentication, Prisma, PostgreSQL, and React Leaflet maps.",
        "Connected searchable listings, relational data models, auth flows, map-based discovery, and public deployment into one end-to-end personal product.",
      ),
    )
  }
}

#let project_ranking(role) = {
  let base = (
    title: "Ranking App - Preference Ranking Tool",
    tech: "TypeScript, React, Next.js, Redis",
    links: (
      (label: "Live", url: "https://ranking.ayushjuvekar.com"),
      (label: "GitHub", url: "https://github.com/AyushJ1001/ranking"),
    ),
  )
  if role == "backend-engineer" {
    base + (
      bullets: (
        "Designed and built a novel preference-ranking app that uses decision latency as a confidence signal, weighting close vs. decisive matchups before normalizing rankings to 100.",
        "Backed user-defined item sets with Redis while keeping ranking interactions client-side for a fast bracket flow.",
      ),
    )
  } else if role == "frontend-engineer" {
    base + (
      bullets: (
        "Designed and built a novel interactive bracket UI after finding ranking tools ignored choice confidence; used decision latency to weight close vs. decisive matchups.",
        "Managed client-side ranking state, matchup progression, and score normalization while persisting user-defined item sets with Redis.",
      ),
    )
  } else {
    base + (
      bullets: (
        "Designed and built a novel preference-ranking app after finding bracket tools ignored choice confidence; used decision latency to weight close vs. decisive matchups.",
        "Persisted user-defined item sets with Redis and normalized final rankings to a 100-point score for clearer comparison.",
      ),
    )
  }
}

#let project_monkey() = (
  title: "MonkeyLang-CS - Interpreter Port",
  tech: "C#, .NET, TDD",
  links: (
    (label: "GitHub", url: "https://github.com/AyushJ1001/MonkeyLang-CS"),
  ),
  bullets: (
    "Ported Thorsten Ball's Monkey interpreter from Go to idiomatic C#, implementing lexer, parser, AST, evaluator, object system, REPL, functions, closures, arrays, hashes, and built-ins.",
    "Followed the book's test-first workflow to practice interpreter internals, language runtime design, and disciplined implementation across a translated architecture.",
  ),
)

#let project_portfolio() = (
  title: "Portfolio Website",
  tech: "Next.js, React, TypeScript, Tailwind CSS, Motion",
  links: (
    (label: "Live", url: "https://ayushjuvekar.com"),
    (label: "GitHub", url: "https://github.com/AyushJ1001/portfolio"),
  ),
  bullets: (
    "Built a responsive personal portfolio with animated sections, project showcases, audience-aware resume routing, and polished React/Tailwind UI patterns.",
    "Implemented accessible navigation, mobile layouts, and reusable components to present technical work without relying on a generic static resume page.",
  ),
)

#let project_anomaly(role) = (
  title: "Crowd Anomaly Detection Prototype",
  tech: "Python, TensorFlow, OpenCV, TensorFlow Lite, Jetson Nano",
  links: (),
  bullets: (
    "Led model research and data collection for a BE final-year team project on edge crowd-anomaly detection, recording training videos and evaluating CNN/TensorFlow approaches on 10K+ frames.",
    "Optimized the prototype with TensorFlow Lite for Jetson Nano demonstration, reaching about 92% test accuracy in controlled demo runs without claiming production deployment.",
  ),
)

#let project_particle() = (
  title: "Particle Vibration Analysis",
  tech: "MATLAB, Computer Vision, Object Detection, ZED 2 Camera",
  links: (),
  bullets: (
    "Built MATLAB computer-vision scripts for particle vibration analysis from ZED 2 camera video, using object detection workflows to track particles in test recordings.",
    "Delivered analysis outputs for a professor's downstream PhD research, validating scripts on sample particle videos before larger research use.",
  ),
)

#let project_encryption_study() = (
  title: "Encryption Efficiency Study",
  tech: "Python, Pandas, NumPy, Jupyter Notebook, RSA",
  links: (),
  bullets: (
    "Analyzed RSA and related encryption approaches during a CVBDSL academic internship, comparing implementation tradeoffs for computational cost and efficiency.",
    "Documented findings through Python/Jupyter experiments using Pandas and NumPy as part of a four-month secure data analytics module.",
  ),
)

#let project_iot(role) = (
  title: "IoT Air Quality Monitoring System",
  tech: "Arduino Uno, C++, MQTT, Zigbee, Node-RED",
  links: (
    (label: "IEEE", url: "https://ieeexplore.ieee.org/document/10100144"),
  ),
  bullets: (
    "Co-built an IEEE-published IoT air-quality prototype for CO/gas monitoring, using Arduino Uno/C++, MQTT/Zigbee communication, and Node-RED flows to automate air-filter behavior from live sensor readings.",
    "Owned the Node-RED automation and conference presentation for the two-person project, contributing to the paper/report accepted at ESCI 2023.",
  ),
)

#let projects(role) = {
  if role == "backend-engineer" {
    (
      project_yaycamp(role),
      project_monkey(),
      project_ranking(role),
    )
  } else if role == "frontend-engineer" {
    (
      project_ranking(role),
      project_yaycamp(role),
      project_portfolio(),
    )
  } else if role == "ml-data-scientist" {
    (
      project_anomaly(role),
      project_particle(),
      project_encryption_study(),
    )
  } else if role == "computer-vision-edge-ai" {
    (
      project_anomaly(role),
      project_particle(),
      project_iot(role),
    )
  } else if role == "iot-embedded-engineer" {
    (
      project_iot(role),
      project_anomaly(role),
      project_particle(),
    )
  } else {
    (
      project_yaycamp(role),
      project_ranking(role),
      project_monkey(),
    )
  }
}

#let section(title) = [
  #v(0.28em)
  #text(size: 10.5pt, weight: "bold")[#upper(title)]
  #v(-0.75em)
  #line(length: 100%, stroke: 0.45pt)
  #v(0.02em)
]

#let link_list(links) = {
  if links.len() > 0 {
    [#for (idx, item) in links.enumerate() [
      #if idx > 0 [ | ]
      #link(item.url)[#item.label]
    ]]
  } else {
    []
  }
}

#let render_header(country) = {
  let phone = if country == "india" { "+91 8888385669" } else { "+1 (906) 299-4314" }
  align(center)[
    #text(size: 17pt, weight: "bold")[AYUSH JUVEKAR] \
    #text(size: 8.5pt)[
      #link("mailto:ayushjuvekar@gmail.com")[ayushjuvekar\@gmail.com] | #phone | #link("https://www.linkedin.com/in/ayushjuvekar")[LinkedIn] | #link("https://github.com/AyushJ1001")[GitHub] | #link("https://ayushjuvekar.com")[Portfolio]
    ]
  ]
}

#let render_education() = [
  #section("Education")
  #for item in education [
    #text(weight: "bold")[#item.school], #item.location #h(1fr) #text(weight: "bold")[#item.metric] \
    #emph(item.degree) #h(1fr) #item.date
    #v(0.06em)
  ]
]

#let render_entry(entry) = [
  #text(weight: "bold")[#entry.title] | #entry.org #h(1fr) #entry.date \
  #text(size: 8.6pt)[#entry.location]
  #v(-0.15em)
  #for bullet in entry.bullets [
    - #bullet
  ]
  #v(0.05em)
]

#let render_project(project) = [
  #text(weight: "bold")[#project.title] | #emph(project.tech)#if project.links.len() > 0 [ | #link_list(project.links)]
  #v(-0.15em)
  #for bullet in project.bullets [
    - #bullet
  ]
  #v(0.05em)
]

#let render_skills(role) = [
  #section("Technical Skills")
  #for row in skill_rows(role) [
    #grid(
      columns: (1.18in, 1fr),
      gutter: 0.1in,
      [#text(weight: "bold")[#row.category]],
      [#row.skills],
    )
    #v(0.02em)
  ]
]

#let render_publications(role) = {
  if role == "iot-embedded-engineer" or role == "computer-vision-edge-ai" or role == "ml-data-scientist" {
    [
      #section("Publication")
      A. Juvekar et al., "Carbon Monoxide Concentration Monitoring System," #emph("ESCI 2023"), presented Mar 2023. #link("https://ieeexplore.ieee.org/document/10100144")[IEEE]
    ]
  } else {
    []
  }
}

#let render_resume(country: "usa", role: "full-stack-engineer") = {
  set page(
    paper: "us-letter",
    margin: (x: 0.46in, y: 0.43in),
  )
  set text(
    font: "New Computer Modern",
    size: 9.05pt,
  )
  set par(
    justify: false,
    leading: 0.43em,
  )
  show link: set text(fill: rgb("#0645ad"))

  render_header(country)
  v(0.18em)
  align(center)[#text(size: 9pt, weight: "bold")[#role_label(role)]]
  v(0.1em)

  section("Profile")
  profile(role)

  render_education()

  section("Experience")
  for entry in experiences(role) {
    render_entry(entry)
  }

  section("Selected Projects")
  for project in projects(role) {
    render_project(project)
  }

  render_skills(role)
  render_publications(role)
}
