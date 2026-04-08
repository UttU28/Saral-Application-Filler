import { ButtonGroup } from "../types/button";

export const buttonGroups: ButtonGroup[] = [
    {
        id: "personalInfo",
        buttons: [
            {
                id: "firstName",
                text: "First Name",
                value: "Utsav",
            },
            {
                id: "lastName",
                text: "Last Name",
                value: "Chaudhary",
            },
            {
                id: "fullName",
                text: "Full Name",
                value: "Utsav Chaudhary",
            },
            {
                id: "phone",
                text: "Phone",
                value: "6072969583",
            },
            {
                id: "email",
                text: "Email",
                value: "utsavmaan28@gmail.com",
            },
            {
                id: "linkedin",
                text: "LinkedIn",
                value: "https://www.linkedin.com/in/utsavmaan28",
            },
            {
                id: "portfolio",
                text: "Portfolio",
                value: "https://thatinsaneguy28.netlify.app/",
            },
            {
                id: "github",
                text: "GitHub",
                value: "https://github.com/UttU28/",
            },
        ],
    },
    {
        id: "address",
        buttons: [
            {
                id: "addressLine1",
                text: "Address Line 1",
                value: "2918 Cotton Stock Dr.",
            },
            {
                id: "city",
                text: "City",
                value: "Sugar Land",
            },
            {
                id: "state",
                text: "State",
                value: "Texas",
            },
            {
                id: "country",
                text: "Country",
                value: "United States",
            },
            {
                id: "zipCode",
                text: "Zip Code",
                value: "77479",
            },
        ],
    },
    {
        id: "credentials",
        buttons: [
            {
                id: "emailCredential",
                text: "Email (Login)",
                value: "utsavmaan28@gmail.com",
            },
            {
                id: "password",
                text: "Password",
                value: "Application@123z",
            },
        ],
    },
    {
        id: "company1",
        buttons: [
            {
                id: "startDate1",
                text: "Start Date",
                value: "01/2024",
            },
            {
                id: "endDate1",
                text: "End Date",
                value: "Present",
            },
            {
                id: "companyName1",
                text: "Company Name",
                value: "Labs196",
            },
            {
                id: "jobTitle1",
                text: "Job Title",
                value: "Fullstack Developer",
            },
            {
                id: "description1",
                text: "Description",
                value: `Designed and built AI agents and MCP servers to extend LLM capabilities with custom tools, file systems, and APIs, enabling automation of codebase exploration, file operations, and task execution. Trained and fine tuned LLM based models for domain specific tasks, deployed inference endpoints on AWS EKS with FastAPI, and integrated OpenAI and Ollama for hybrid cloud and local inference. Automated developer and content workflows by connecting AI agents to MCP servers for search, runbooks, and tool use, reducing manual lookup time and standardizing workspace automation. Built orchestration pipelines with Python and TypeScript, integrating React.js and Next.js dashboards for monitoring agent runs, tool usage, and model performance. Containerized agent services and MCP servers with Docker on AWS EKS, configured CI/CD with Bitbucket, hosted frontend on Amplify, and collaborated with QA in Jira while maintaining a 94 percent SLA resolution rate.`,
            },
        ],
    },
    {
        id: "company2",
        buttons: [
            {
                id: "startDate2",
                text: "Start Date",
                value: "06/2023",
            },
            {
                id: "endDate2",
                text: "End Date",
                value: "12/2023",
            },
            {
                id: "companyName2",
                text: "Company Name",
                value: "Midh Technologies",
            },
            {
                id: "jobTitle2",
                text: "Job Title",
                value: "Python Developer CO-OP",
            },
            {
                id: "description2",
                text: "Description",
                value: `Fine tuned the Llama 3.2 model on GPU backed workloads in AWS EKS and deployed low latency inference endpoints using FastAPI behind API Gateway with authentication and throttling. Built interactive analytics dashboards with React.js and D3.js, implementing granular role based access control for internal and client facing access. Integrated Fireblocks SDK and Metamask into a unified user dashboard, enabling secure on chain ID creation and blockchain asset interactions via AWS Lambda. Built and deployed the company web platform using Next.js with secure RBAC and scalable API integrations in AWS Amplify.`,
            },
        ],
    },
    {
        id: "company3",
        buttons: [
            {
                id: "startDate3",
                text: "Start Date",
                value: "06/2021",
            },
            {
                id: "endDate3",
                text: "End Date",
                value: "07/2022",
            },
            {
                id: "companyName3",
                text: "Company Name",
                value: "Compendious Medialabs Pvt. Ltd.",
            },
            {
                id: "jobTitle3",
                text: "Job Title",
                value: "Python/Web Developer",
            },
            {
                id: "description3",
                text: "Description",
                value: `Developed a responsive React frontend that consumed live data from a FastAPI backend to build interactive charts, graphs, and metrics dashboards with D3.js and Chart.js, improving data visualization efficiency by 45 percent. Built an in house Python scraping tool using Selenium and BeautifulSoup to automate data extraction and reduce manual collection time by 60 percent. Implemented real time updates with WebSockets to support continuous metric streaming for high frequency datasets. Designed and optimized a FastAPI backend with structured Pydantic models and REST endpoints, achieving an average response time of around 250 milliseconds. Improved frontend performance by refining React state management patterns and reducing unnecessary re renders.`,
            },
        ],
    },
    {
        id: "company4",
        buttons: [
            {
                id: "startDate4",
                text: "Start Date",
                value: "03/2020",
            },
            {
                id: "endDate4",
                text: "End Date",
                value: "09/2020",
            },
            {
                id: "companyName4",
                text: "Company Name",
                value: "VRoKCs",
            },
            {
                id: "jobTitle4",
                text: "Job Title",
                value: "Software Engineer",
            },
            {
                id: "description4",
                text: "Description",
                value: `Collaborated with machine learning engineers to help build a full sign language translation pipeline, contributing to data collection, annotation, and dataset preparation. Built a Flask web application using Python, HTML5, CSS3, and JavaScript to demo and evaluate sign language models, integrating TensorFlow Lite for real time, edge optimized inference directly in the browser. Connected the machine learning pipeline with Unity3D to enable real time ASL translation inside augmented reality environments. Implemented features including image upload, webcam streaming, and live prediction display using JavaScript and HTML5.`,
            },
        ],
    },
    {
        id: "company5",
        buttons: [
            {
                id: "startDate5",
                text: "Start Date",
                value: "03/2019",
            },
            {
                id: "endDate5",
                text: "End Date",
                value: "08/2019",
            },
            {
                id: "companyName5",
                text: "Company Name",
                value: "underDogs Gaming Studios",
            },
            {
                id: "jobTitle5",
                text: "Job Title",
                value: "Web/Game Developer",
            },
            {
                id: "description5",
                text: "Description",
                value: `Integrated and optimized the Quarters API across multiple games to support universal gaming currency transactions, including creating player wallets, processing secure transactions, and converting points to Quarters. Improved real time client server communication by validating and optimizing backend interaction flows using Python and C sharp. Built proof of concept modules connecting external services such as payments, inventory, and shipping to internal game systems to enable a unified transaction layer. Assisted in implementing secure transaction methods integrated with Unity3D and focused on API best practices, bug fixing, and comprehensive unit and integration testing for edge cases like payment failures and network drops.`,
            },
        ],
    },
    {
        id: "coverletter",
        buttons: [
            {
                id: "coverLetterText",
                text: "Cover Letter",
                value: `I am a fullstack developer with about five years of experience building scalable end to end web applications and AI driven automation systems. I work extensively with modern frontend frameworks including React.js, Next.js, TypeScript, and TailwindCSS, and pair that with robust backend development using Node.js, Python, and FastAPI. I have strong experience training and integrating AI and machine learning workflows such as large language models, fine tuned models, speech synthesis, and Whisper, and I use these to build intelligent automation pipelines and large scale data enrichment systems. I am also comfortable with AWS, Docker, Kubernetes, CI/CD, and distributed architectures, and I focus on designing secure, high performance, cloud native systems with real time data processing, analytics dashboards, and multi channel automation across web and content platforms. I am excited to bring this mix of practical engineering experience and AI driven automation to your team and contribute to building reliable, user focused products.`
            }
        ]
    },
    {
        id: "university1",
        buttons: [
            {
                id: "universityName",
                text: "University Name",
                value: "State University of New York at Binghamton",
            },
            {
                id: "major",
                text: "Major",
                value: "Computer Science",
            },
            {
                id: "degree",
                text: "Degree",
                value: "Master of Science",
            },
            {
                id: "gradDate",
                text: "Graduation Date",
                value: "Dec 2023",
            },
            {
                id: "gpa",
                text: "GPA",
                value: "3.44",
            },
        ],
    },
    {
        id: "project1",
        buttons: [
            {
                id: "projectName1",
                text: "Project Name",
                value: "LinkedIn Reverse Search Platform",
            },
            {
                id: "projectType1",
                text: "Project Type",
                value: "Personal Project",
            },
            {
                id: "projectDescription1",
                text: "Description",
                value: `Built a data enrichment platform in Python using fine tuned Hugging Face models and prompt engineered pipelines for LLM assisted extraction of LinkedIn profiles and company website URLs from unstructured data, processing 1000 plus records. Orchestrated a tool based pipeline with n8n using Selenium for scraping, SalesQL for validation, and LLM prompts for parsing, with Redis and MongoDB for caching and storage to reduce repeat request time by 45 percent. Designed extraction and validation prompts and MCP style tools for profile and company URL enrichment with quality checks, and integrated OpenAI for fallback parsing and normalization. Delivered a Next.js frontend with Excel upload and real time progress, secured with Firebase Auth and Firestore, and deployed with Docker and CI/CD using GitHub Actions to maintain 99.5 percent uptime across enrichment services and automation workflows.`,
            },
        ],
    },
    {
        id: "project2",
        buttons: [
            {
                id: "projectName2",
                text: "Project Name",
                value: "AI Powered Video Generation Pipeline",
            },
            {
                id: "projectType2",
                text: "Project Type",
                value: "Personal Project",
            },
            {
                id: "projectDescription2",
                text: "Description",
                value: `Developed an advanced FFMPEG based video generation pipeline using Python and machine learning models, integrating F5 TTS for high quality voice cloning and speech synthesis to create fully AI generated videos. Integrated the OpenAI API for dynamic script writing and WhisperAI for audio transcription, and used FFMPEG to embed subtitles and synchronize audio and visual elements, while using Chrome and Selenium for browser automation. Engineered a scalable video processing system that merges F5 TTS generated audio with trending gaming backgrounds and applies randomization for unique video variants using FFMPEG and custom overlays. Designed and deployed a multichannel automation system with Docker and cron jobs to schedule the generation and publishing of more than fifty videos per day across YouTube and Instagram, including platform specific metadata and formatting, and built a Gradio interface for real time pipeline monitoring, voice cloning status updates, and batch processing.`,
            },
        ],
    },
    {
        id: "certifications",
        buttons: [
            {
                id: "certificationName1",
                text: "Certification 1",
                value: "Microsoft Certified: DevOps Engineer Expert",
            },
            {
                id: "certificationLink1",
                text: "Credential Link 1",
                value: "https://drive.google.com/file/d/1AjPcmWMrnxSNEUaSC6XzCVqHik7d5M1M/view?usp=drive_link",
            },
            {
                id: "certificationName2",
                text: "Certification 2",
                value: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
            },
            {
                id: "certificationName3",
                text: "Certification 3",
                value: "AZ-900: Microsoft Certified: Azure Fundamentals",
            },
            {
                id: "certificationName4",
                text: "Certification 4",
                value: "Google IT Automation with Python (Specialization)",
            },
            {
                id: "certificationLink4",
                text: "Credential Link 4",
                value: "https://www.coursera.org/account/accomplishments/specialization/certificate/59YMRC67LBUQ",
            },
            {
                id: "certificationName5",
                text: "Certification 5",
                value: "DeepLearning.AI TensorFlow Developer (Specialization)",
            },
            {
                id: "certificationLink5",
                text: "Credential Link 5",
                value: "https://www.coursera.org/account/accomplishments/specialization/certificate/TQ7D6RBM58JJ",
            },
        ],
    },
];
