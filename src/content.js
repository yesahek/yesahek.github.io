export const profile = {
    name: "Yesahek Haile",
    title: "Software Engineer | Cloud & AI Developer",
    tagline: "Building cloud-native applications with Flutter, AWS, Firebase, and Generative AI.",
    location: "Ethiopia",
    bio: "I am a software engineer and Master's student in Software Engineering at Quantic School of Business and Technology. I enjoy building practical software solutions using cloud technologies, backend engineering, mobile development, and Generative AI.My experience includes developing Flutter applications, backend APIs, and cloud-based systems using Firebase and AWS. Through academic projects, professional experience, volunteer work, and personal projects, I have focused on solving real-world problems with technology. I am currently expanding my expertise in AWS cloud architecture, serverless development, microservices, and Retrieval-Augmented Generation (RAG) using Amazon Bedrock. My long-term goal is to build intelligent, scalable applications that create meaningful impact for businesses and communities.",
    links: {
    resume: "", // 
    github: "https://github.com/yesahek",
    linkedin: "https://linkedin.com/yesahek", // TODO: your LinkedIn profile URL
    email: "yesahek@gmail.com", // TODO: your co
    },
}

export const projects = [
    {
    id: "bedrock-rag-chatbot",
    featured: true,
    title: "Amazon Bedrock RAG Chatbot",
    summary: "", 
    problem: "", // TODO: what problem does this solve
    architectureDiagram: "", // TODO: path to an image, e.g. "/images/bedrock-architecture.png"
    awsServices: ["Amazon Bedrock", "Lambda", "API Gateway"], // TODO: confirm full list
    technologies: [], // TODO"
    screenshots: [], // TODO: screenshot images
    githubUrl: "", // TODO
    demoUrl: "", // later
},
{
    id: "education-supplementary-app",
    featured: false,
    title: "Education Supplementary App",
    summary: "", // TODO
    problem: "", // TODO
    technologies: ["Flutter", "Firebase"],
    screenshots: [],
    githubUrl: "", // TODO
    demoUrl: "",
  },
  {
    id: "inventory-management-system",
    featured: false,
    title: "Inventory Management System",
    summary: "", // TODO: mention this solved a real business problem for your retail business
    problem: "", // TODO: explain the business problem it solved
    technologies: ["Flutter", "Firebase", "Cloud Firestore"],
    screenshots: [],
    githubUrl: "", // TODO
    demoUrl: "",
  },
  {
    id: "donation-platform",
    featured: false,
    title: "Donation Platform",
    summary: "", // TODO: mention the Gergesenon Center
    problem: "",
    technologies: ["Website", "Flutter", "Firebase"],
    screenshots: [],
    githubUrl: "", // TODO
    demoUrl: "",
  },
  {
    id: "malware-detection-system",
    featured: false,
    title: "Malware Detection System",
    summary: "Binary classification pipeline that detects malware from static PE file features, achieving 98%+ accuracy on a 50,000-sample dataset.",
    problem: "Distinguishing malicious from benign executables using only static file features, without executing the file.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Random Forest", "XGBoost"],
    screenshots: [],
    githubUrl: "",
    demoUrl: "",
    note: "MSSE academic project; code available on request due to academic restrictions.",
  },
  {
    id: "scholarship-recommendation-platform",
    featured: false,
    title: "Scholarship Recommendation Platform",
    summary: "End-to-end recommendation system matching students to scholarships using TF-IDF vectorization and cosine similarity, deployed as an interactive Streamlit app.",
    problem: "Helping students find scholarships that match their academic profile, field of study, and eligibility criteria.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    screenshots: [],
    githubUrl: "https://github.com/yesahek/Scholarship-Recommendation-Platform",
    demoUrl: "",
  },
];

export const experience = [
    {
    id: "afroibex",
    role: "", // TODO: your actual title
    org: "Afroibex",
    type: "Internship",
    startDate: "", // TODO
    endDate: "", // TODO
    summary: "", // TODO: what you did, what you learned/shipped
  },
  {
    id: "gergesenon",
    role: "Volunteer",
    org: "Gergesenon Center",
    type: "Volunteer",
    startDate: "", // TODO
    endDate: "", // TODO
    summary: "", // TODO
  },
  {
    id: "self-employed",
    role: "Founder / Business Owner",
    org: "Retail Business",
    type: "Self-employed",
    startDate: "", // TODO
    endDate: "", // TODO, or "Present"
    summary: "", // TODO: tie this to the Inventory Management System project
  },
];

export const education = [
    {
    id: "msc",
    degree: "M.Sc. in Software Engineering",
    school: "Quantic School of Technology and Business",
    status: "In Progress",
    startDate: "", // TODO
    endDate: "", // TODO, expected
  },
  {
    id: "bsc",
    degree: "B.Sc. in Computer Science",
    school: "MicroLink Information Technology", 
    status: "Completed",
    startDate: "", // TODO
    endDate: "", // TODO
  },
    {
    id: "diploma",
    degree: "Diploma Hardware and Network Servicing",
    school: "MicroLink Information Technology", 
    status: "Completed",
    startDate: "", // TODO
    endDate: "", // TODO
  },

];

export const certifications = [
    {
    id: "aws-academy",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    badgeUrl: "", // TODO: image path for the badge
    credentialUrl: "", // TODO: Credly link
  },
  {
    id: "ms-ai-skills-challenge",
    title: "Microsoft Learn AI Skills Challenge",
    issuer: "Microsoft Learn",
    badgeUrl: "", // TODO
    credentialUrl: "", // TODO
  },
  {
    id: "ms-learn-achievements",
    title: "Microsoft Learn Achievements",
    issuer: "Microsoft Learn",
    badgeUrl: "", // TODO
    credentialUrl: "", // TODO
  },
  {
    id: "llm-based-apps",
    title: "LLM Based Apps",
    issuer: "Quantic School of Business and Technology",
    date: "Jun 2026",
    badgeUrl: "",
    credentialUrl: "",
  },
  {
    id: "intro-to-ml",
    title: "Introduction to Machine Learning",
    issuer: "Quantic School of Business and Technology",
    date: "Jun 2025",
    badgeUrl: "",
    credentialUrl: "",
  },
  {
    id: "genai-essentials",
    title: "GenAI Essentials for Everyone",
    issuer: "O'Reilly Media",
    date: "Oct 2024",
    badgeUrl: "",
    credentialUrl: "https://www.credly.com/badges/0f0a26cb-7d62-4b4b-a78e-03943f1b668d/public_url",
  },
  {
    id: "nodejs-api-masterclass",
    title: "Node.js API Masterclass",
    issuer: "O'Reilly Media",
    date: "Nov 2024",
    badgeUrl: "",
    credentialUrl: "https://www.credly.com/badges/0c691170-3ba3-4bed-92f2-01485e840c12/public_url",
  },
  {
    id: "agile-scrum",
    title: "CSM and Agile Scrum Course",
    issuer: "O'Reilly Media",
    date: "Mar 2025",
    badgeUrl: "",
    credentialUrl: "https://www.credly.com/badges/5161b243-306b-4cfd-a13a-cb5a4ceb5c12/public_url",
  },
];

export const skills = {
  Cloud: ["AWS", "Firebase", "Cloud Firestore"],
  Backend: ["Node.js", "Express", "FastAPI"],
  Frontend: ["Flutter", "Dart"],
  AI: ["Amazon Bedrock", "RAG", "Vector Search", "Prompt Engineering"],
  DevOps: ["Git", "GitHub Actions", "Docker"],
  Languages: ["Python", "SQL", "Java", "JavaScript", "Dart"],
};

export const community = [
    {
    id: "hackaddis",
    title: "HackAddis",
    description: "", // TODO: what the channel covers
    url: "https://www.youtube.com/hackaddis", // 
  },
  {
    id: "ibm-ai-builders",
    title: "IBM AI Builders Challenge",
    description: "", // TODO: what you built/contributed
    url: "", // TODO
  },
  {
    id: "gergesenon-community",
    title: "Gergesenon Center — Volunteer Work",
    description: "", // TODO
    url: "",
  },
]