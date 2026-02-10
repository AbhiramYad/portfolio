// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import n8nLogo from './assets/tech_logo/n8n.png';
import gcpLogo from './assets/tech_logo/gcp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: mysqlLogo },
      { name: 'C', logo: cLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'n8n', logo: n8nLogo },
      { name: 'GCP', logo: gcpLogo },
    ],
  },
];

  export const experiences = [];
  
  export const projects = [
    {
      id: 0,
      title: "AI Shopping Assistant (Telegram Bot)",
      description:
        "An AI-powered Telegram shopping assistant using n8n workflow automation integrating OpenAI APIs. Implemented speech-to-text processing using Whisper API for voice-based product search. Designed context-aware conversation memory using session-based storage for personalized recommendations.",
      tags: ["n8n", "OpenAI", "Whisper API", "Telegram Bot API", "Automation"],
      github: "https://github.com/AbhiramYad",
      webapp: "#",
    },
    {
      id: 1,
      title: "Learning Path Generator with MCP",
      description:
        "A Streamlit-based web application that generates personalized learning paths by integrating multiple external services. Integrated YouTube, Google Drive, and Notion APIs for video content, document storage, and note-taking. Implemented Google AI Studio API and Pipedream webhooks for real-time content delivery.",
      tags: ["Python", "Gen AI", "Streamlit", "APIs", "MCP"],
      github: "https://github.com/AbhiramYad",
      webapp: "#",
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform with product listing, cart, and order management features. Implemented Firebase Authentication with Google Sign-In for secure user login. Integrated Razorpay Payment Gateway for online payments and included AI-powered page navigation. Deployed on Render with production-ready configuration.",
      tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Firebase", "Razorpay"],
      github: "https://github.com/AbhiramYad",
      webapp: "#",
    },
    {
      id: 3,
      title: "Real-Time Collaborative Drawing Canvas",
      description:
        "A production-ready real-time multi-user drawing application using client-server architecture with WebSocket protocol. Designed efficient data structures for stroke management and undo/redo functionality. Implemented room-based collaboration system with optimized network protocols reducing latency by 40%.",
      tags: ["React JS", "Node.js", "Socket.io", "Canvas API", "WebSocket"],
      github: "https://github.com/AbhiramYad",
      webapp: "#",
    },
  ];
  
  export const education = [
    {
      id: 0,
      school: "Sai Vidya Institute of Technology",
      date: "2022 – 2026",
      grade: "8.59 CGPA",
      desc: "Currently pursuing Bachelor of Engineering in Computer Science and Engineering. Strong foundation in programming, data structures, algorithms, Object-Oriented Programming, Database Management Systems, and Web Development. Actively participating in hackathons and technical workshops to enhance practical skills. Focused on building real-world software applications with focus on MERN stack and AI/ML technologies.",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
    },
    {
      id: 1,
      school: "Shree Vani PU College",
      date: "2020 – 2021",
      grade: "95.66%",
      desc: "Completed Class 12th from State Board with excellent academic performance. Strong foundation in Science and Mathematics. Developed strong problem-solving and analytical skills during this period.",
      degree: "Class 12th State Board",
    },
    {
      id: 2,
      school: "Carmel Jyothi English High School",
      date: "2018 – 2019",
      grade: "92.32%",
      desc: "Completed SSLC (Secondary School Leaving Certificate) with excellent academic performance. Strong command of languages and basic science subjects. Built strong foundational knowledge in Mathematics and Science.",
      degree: "SSLC - Carmel Jyothi English High School",
    },
  ];