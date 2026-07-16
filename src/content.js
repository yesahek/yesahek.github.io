export const profile = {
    name: "Yesahek Haile Sebany",
    title: "Software Engineer | Cloud & AI Developer",
    tagline: "Building cloud-native applications with Flutter, AWS, Firebase, and Generative AI.",
    location: "Ethiopia",
    bio: "I am a software engineer and Master's student in Software Engineering at Quantic School of Business and Technology. I enjoy building practical software solutions using cloud technologies, backend engineering, mobile development, and Generative AI.My experience includes developing Flutter applications, backend APIs, and cloud-based systems using Firebase and AWS. Through academic projects, professional experience, volunteer work, and personal projects, I have focused on solving real-world problems with technology. I am currently expanding my expertise in AWS cloud architecture, serverless development, microservices, and Retrieval-Augmented Generation (RAG) using Amazon Bedrock. My long-term goal is to build intelligent, scalable applications that create meaningful impact for businesses and communities.",
    links: {
    resume: "https://drive.google.com/file/d/12iLyep1LgSyLYd33ELtVmPy5yxnaACtC/view?usp=sharing", // 
    github: "https://github.com/yesahek",
    linkedin: "https://linkedin.com/in/yesahek", 
    Credly : "https://www.credly.com/users/yesahek/badges/credly",
    email: "yesahek@gmail.com", 
    },
}

export const projects = [
  {
    id: "Keystone",
    featured: true,
    title: "Keystone",
    image: "images/Keystone.png", 
    summary: "A global AI innovation challenge sponsored by IBM SkillsBuild, where university students design and build real-world AI solutions using IBM technologies. As a participant, I am developing an AI-powered application while strengthening my skills in cloud architecture, Generative AI, and modern software engineering practices.", 
    problem: "", 
    architectureDiagram: "", // TODO
    awsServices: [],
    technologies: [  "IBM Bob", "Generative AI", "RAG", "AWS","Node.js", "GitHub"],
    screenshots: ["images/Keystone.png", "images/Keystone_3.png"], // TODO
    githubUrl: "https://github.com/yesahek/Keystone", // TODO
    demoUrl: "", // later
},
{
    id: "education-supplementary-app",
    featured: false,
    title: "Education Supplementary App",
    image: "images/ESA_2.png",
    summary: "Developed as my B.Sc. Computer Science capstone project, the Education Supplementary App (ESA) is a Flutter and Firebase-powered mobile application that provides students with convenient access to learning resources through a secure, cloud-based platform. The project demonstrates cross-platform mobile development, cloud integration, and user-centered application design.", 
    problem: "Students often struggle to access and organize supplementary learning materials because resources are scattered across multiple platforms and are not always easily available when needed. The Education Supplementary App (ESA) was developed to provide a centralized mobile platform where students can access educational resources conveniently and improve their learning experience.", 
    technologies: ["Flutter", "Firebase"],
    screenshots: ["images/ESA_1.png"],
    githubUrl: "https://github.com/yesahek/ESA_Project", 
    demoUrl: "",
  },
  {
    id: "inventory-management-system",
    featured: false,
    title: "Inventory Management System",
    summary: "A cross-platform inventory management application developed to support the daily operations of my retail business. The system streamlines inventory tracking, stock management, and monthly VAT reporting through a cloud-based backend, replacing manual record-keeping and improving operational efficiency.",
    problem: "", // TODO
    technologies: ["Flutter", "Firebase", "Cloud Firestore","Dart"],
    screenshots: [],
    githubUrl: "https://github.com/yesahek/stock_mangement", 
    demoUrl: "",
  },
  {
    id: "donation-platform",
    featured: false,
    title: "Donation Platform",
    summary: "Contributed to the development of a website and mobile donation platform for the Gergesenon Center for Support and Rehabilitation of People with Mental Disorder. The platform was designed to support fundraising efforts, increase public engagement, and simplify the donation process.",
    problem: "",
    technologies: ["Website", "Flutter", "Firebase"],
    screenshots: [],
    githubUrl: "", // TODO
    demoUrl: "",
  },
  {
    id: "bedrock-rag-chatbot",
    featured: false,
    title: "Amazon Bedrock RAG Chatbot",
    summary: "A cloud-native Retrieval-Augmented Generation (RAG) chatbot built on AWS using a fully serverless architecture. The application combines Amazon Bedrock foundation models with AWS serverless services to deliver secure, scalable, and context-aware AI conversations.", 
    problem: "Large Language Models can generate inaccurate or outdated responses when they rely only on their pre-trained knowledge. This project addresses that limitation by implementing Retrieval-Augmented Generation (RAG), enabling the chatbot to retrieve relevant information from a knowledge base before generating responses. The solution demonstrates how AWS serverless services and Amazon Bedrock can be combined to build reliable, scalable, and cost-efficient AI applications.", 
    architectureDiagram: "", // TODO: path to an image, e.g. "/images/bedrock-architecture.png"
    awsServices: ["Amazon Bedrock","Amazon API Gateway", "AWS Lambda","Amazon DynamoDB", "Amazon Cognito", "Amazon CloudWatch", "IAM"], 
    technologies: [  "TypeScript", "Node.js", "AWS SDK v3", "REST API", "RAG", "LLMs", "GitHub Actions", "Docker"],
    screenshots: [], // TODO
    githubUrl: "https://github.com/yesahek/bedrock-rag-chatbot", // TODO
    demoUrl: "", // later
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
    images: "images/Scholarship.png",
    summary: "End-to-end recommendation system matching students to scholarships using TF-IDF vectorization and cosine similarity, deployed as an interactive Streamlit app.",
    problem: "Helping students find scholarships that match their academic profile, field of study, and eligibility criteria.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    screenshots: ["images/Scholarship.png"],
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
    summary: "Founded and managed a retail business specializing in household and office furniture accessories. Oversaw daily operations, inventory management, customer service, and financial record keeping. Designed and developed a Flutter and Firebase-based inventory management application to digitize stock tracking and automate monthly VAT reporting, improving operational efficiency.", 
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
    badgeUrl: "https://images.credly.com/size/340x340/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",  
    credentialUrl: "https://www.credly.com/badges/928d913d-1b0a-4ce7-8cdd-33e6743527c8",
  },
  {
    id: "ms-ai-skills-challenge",
    title: "Microsoft Learn AI Skills Challenge",
    issuer: "Microsoft Learn",
    badgeUrl: "https://learn.microsoft.com/en-us/training/achievements/ai-skills-challenge-april-2024.png", // TODO
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/YesahekHaile-2775/2KB3D5RV?sharingId=2DACF4292B29A153",
  },
  {
    id: "ms-learn-achievements",
    title: "Microsoft Learn Achievements",
    issuer: "Microsoft Learn",
    badgeUrl: "", 
    credentialUrl: "https://learn.microsoft.com/en-us/users/yesahekhaile-2775/",
  },
    {
    id: "Serverless-Application-Development",
    title: "Serverless Application Development II",
    issuer: "Quantic School of Business and Technology",
    date: "Apr 2026",
    badgeUrl: "https://uploads.quantic.edu/images/653f3b97bf2db0370c5ee5bb03ab89bd84778d6917e601d6ce1918eb8615b0a4/700x275/653f3b97bf2db0370c5ee5bb03ab89bd84778d6917e601d6ce1918eb8615b0a4.png",
    credentialUrl: "https://app.quantic.edu/course/serverless-application-development-ii/c4b46d6c-025e-4279-b109-1da323d93354?utm_source=linkedin&utm_medium=social&utm_content=share_course",
  },
  {
    id: "llm-based-apps",
    title: "LLM Based Apps",
    issuer: "Quantic School of Business and Technology",
    date: "Jun 2026",
    badgeUrl: "https://uploads.quantic.edu/images/dae592f7aea388d105cc864d78e8bc236dbdd83abe38322a3b6840b0f0416a20/700x275/dae592f7aea388d105cc864d78e8bc236dbdd83abe38322a3b6840b0f0416a20.png",
    credentialUrl: "",
  },
  {
    id: "intro-to-ml",
    title: "Introduction to Machine Learning",
    issuer: "Quantic School of Business and Technology",
    date: "Jun 2025",
    badgeUrl: "https://uploads.quantic.edu/images/28c911d55476af2c5a66623f6e1a48d617e19f3d2d7990f28169308548c5be79/700x275/28c911d55476af2c5a66623f6e1a48d617e19f3d2d7990f28169308548c5be79.png",
    credentialUrl: "",
  },
  {
    id: "genai-essentials",
    title: "GenAI Essentials for Everyone",
    issuer: "O'Reilly Media",
    date: "Oct 2024",
    badgeUrl: "https://images.credly.com/size/80x80/images/34c68f08-e420-4f5b-94c4-5f5b42e16ff4/gen-ai-essentials-for-everyone.png",
    credentialUrl: "https://www.credly.com/badges/0f0a26cb-7d62-4b4b-a78e-03943f1b668d/public_url",
  },
  {
    id: "nodejs-api-masterclass",
    title: "Node.js API Masterclass",
    issuer: "O'Reilly Media",
    date: "Nov 2024",
    badgeUrl: "https://images.credly.com/size/80x80/images/130d3369-c3a6-427a-b544-db5f159abad4/24610aa4-5dec-4f84-ae11-cdc3b7c1fec9.png",
    credentialUrl: "https://www.credly.com/badges/0c691170-3ba3-4bed-92f2-01485e840c12/public_url",
  },
  {
    id: "agile-scrum",
    title: "CSM and Agile Scrum Course",
    issuer: "O'Reilly Media",
    date: "Mar 2025",
    badgeUrl: "https://images.credly.com/size/80x80/images/7a63696c-8151-49a5-98ae-47535536191b/3f947b2d-a643-4299-8aa7-ee4d63ecf7f3.png",
    credentialUrl: "https://www.credly.com/badges/5161b243-306b-4cfd-a13a-cb5a4ceb5c12/public_url",
  },
    {
    id: "android-fundamentals",
    title: "Android Developer Fundamentals",
    issuer: "UDACITY",
    date: "Mar 2024",
    badgeUrl: "https://udacity-user-uploads.s3.us-west-2.amazonaws.com/uploads/user-uploads/933888ad-898b-4c94-b276-ba56f86db045-original.png",
    credentialUrl: "https://www.udacity.com/certificate/e/43337a0a-5361-11ef-9b84-f32b6f9f34ac",
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
    description: "Hackaddis is my technology-focused YouTube channel where I share tutorials, project walkthroughs, and practical insights on software engineering, cloud computing, artificial intelligence, cybersecurity, and mobile application development. My goal is to make technology more accessible by explaining concepts through hands-on demonstrations, real-world projects, and step-by-step guides for students, developers, and technology enthusiasts.", // TODO: what the channel covers
    url: "https://www.youtube.com/hackaddis", // 
  },
  {
    id: "ibm-ai-builders",
    title: "IBM AI Builders Challenge",
    description: "A global AI innovation challenge sponsored by IBM SkillsBuild, where university students design and build real-world AI solutions using IBM technologies. As a participant, I am developing an AI-powered application while strengthening my skills in cloud architecture, Generative AI, and modern software engineering practices.", 
    url: "https://github.com/yesahek/Keystone", // TODO
  },
  {
    id: "gergesenon-community",
    title: "Gergesenon Center — Volunteer Work",
    description: "", // TODO
    url: "",
  },
]