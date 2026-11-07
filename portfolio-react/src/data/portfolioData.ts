export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Project {
  title: string;
  subtitle: string;
  technologies: string[];
  description: string[];
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personalInfo: {
    name: 'Dixita Mangroliya',
    title: 'Flutter & Mobile Application Developer',
    subtitle: 'Flutter | Dart | BLoC | Native Android (Kotlin) | Firebase',
    experienceYears: '2.5+',
    email: 'dixitamangroliya12@gmail.com',
    linkedin: 'https://linkedin.com/in/dixitamangroliya12',
    github: 'https://github.com/DIXITAMANGROLIYA',
    location: 'Surat, Gujarat, India',
    profileImage: '/profile_image.png',
    heroBg: '/hero-bg.jpg',
    summary:
      'Mobile Application Developer with 2.5+ years of experience building and maintaining production-ready mobile applications using Flutter and native Android (Kotlin).\n\n' +
      'Demonstrated expertise in scalable state management using BLoC & GetX, RESTful API integration, Firebase services (Auth, Firestore), WebSockets for real-time communication, and Flutter Flavors for multi-app architecture.\n\n' +
      'Proven track record of collaborating with cross-functional agile teams, leading project development end-to-end, and delivering high-quality, maintainable code for client and live production apps.',
  },

  stats: [
    { label: 'Years Experience', value: '2.5+' },
    { label: 'Production Apps', value: '4+' },
    { label: 'Tech Stack Skills', value: '10+' },
    { label: 'Client Satisfaction', value: '100%' },
  ],

  experiences: [
    {
      company: 'Square Infosoft',
      position: 'Flutter Developer',
      duration: 'August 2024 – Present',
      location: 'Surat',
      isCurrent: true,
      responsibilities: [
        'Developed and maintained production Flutter applications for client projects including FormulaP, MotoLap, ClimaPal, and TeamRecon.',
        'Architected FormulaP and MotoLap using a shared Flutter codebase with flavor-based configurations for car racing and motorcycle platforms.',
        'Implemented scalable application features using BLoC state management and integrated REST APIs, Firebase Authentication, WebSockets, and local notifications.',
        'Collaborated directly with clients and cross-functional teams to gather requirements, clarify business objectives, and deliver maintainable mobile app features.',
      ],
    },
    {
      company: 'Square Infosoft',
      position: 'Application Development Intern',
      duration: 'February 2024 – July 2024',
      location: 'Surat',
      isCurrent: false,
      responsibilities: [
        'Developed Flutter features for client applications during internship.',
        'Worked on client projects including Alarm App, Visit College, and Event Management systems.',
        'Gained hands-on experience with Flutter framework, Android activity lifecycle, REST API integration, and Firebase Authentication.',
      ],
    },
    {
      company: 'Aani Brothers Infotech',
      position: 'Android Development Intern',
      duration: 'April 2023 – May 2023',
      location: 'Surat',
      isCurrent: false,
      responsibilities: [
        'Developed an Android Kitchen Recipe application with custom like/unlike functionality.',
        'Implemented local data storage using RoomDB and executed seamless API calls using Retrofit.',
      ],
    },
  ] as Experience[],

  skills: [
    {
      category: 'Mobile & Frameworks',
      skills: ['Flutter', 'Dart', 'Android (Kotlin)', 'Flutter Flavors'],
    },
    {
      category: 'State & Architecture',
      skills: ['BLoC Pattern', 'GetX', 'Clean Architecture', 'RoomDB'],
    },
    {
      category: 'Backend & Cloud Services',
      skills: ['RESTful APIs', 'Firebase (Auth, Firestore)', 'WebSocket (Socket.IO)', 'SQLite / Local Storage', 'Retrofit'],
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git & GitHub', 'Postman API Testing', 'Jira / Agile', 'VS Code', 'Android Studio'],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: 'FormulaP & MotoLap',
      subtitle: 'Shared-Codebase Racing Results Applications',
      technologies: ['Flutter', 'Dart', 'BLoC', 'Flutter Flavors', 'REST APIs', 'WebSocket'],
      highlight: 'Multi-flavor app architecture built on a single unified codebase',
      description: [
        'Engineered car racing (FormulaP) and motorcycle (MotoLap) applications using a shared Flutter codebase with flavor-based build configurations.',
        'Implemented real-time chat and live racing data feeds using WebSockets to provide users with up-to-the-second results.',
        'Managed complex application state using BLoC and integrated RESTful APIs with error handling.',
        'Reused modular UI components across both apps, reducing code duplication and significantly improving long-term maintainability.',
      ],
    },
    {
      title: 'ClimaPal',
      subtitle: 'AI-Based Outfit & Travel Recommendation App',
      technologies: ['Flutter', 'BLoC', 'REST APIs', 'Weather APIs', 'Firebase'],
      highlight: 'Lead developer managing end-to-end client delivery',
      description: [
        'Led end-to-end development of a production mobile application providing outfit and travel recommendations based on real-time weather conditions.',
        'Acted as primary point of contact for clients, translating business requirements into scalable technical solutions.',
        'Designed application architecture and implemented robust state management using BLoC.',
        'Integrated multi-source weather APIs with error handling and data validation.',
      ],
    },
    {
      title: 'GoSomeplace',
      subtitle: 'Travel Discovery & Planning Application',
      technologies: ['Flutter', 'Firebase Auth', 'REST APIs', 'WebSocket', 'Local Notifications'],
      highlight: 'Live production app with real-time social & discovery features',
      description: [
        'Contributed to a live travel application used for trip planning and destination discovery.',
        'Implemented core features including real-time chat, content sharing, user interactions, and local notifications.',
        'Integrated REST APIs and Firebase Authentication for secure user onboarding.',
        'Collaborated in an agile team alongside backend developers and UI/UX designers.',
      ],
    },
  ] as Project[],

  education: [
    {
      institution: 'Sardar Vallabhbhai Patel Institute of Technology (GTU)',
      degree: 'Bachelor of Engineering in Information Technology',
      duration: '2020 – 2024',
      location: 'Vasad, Gujarat',
    },
    {
      institution: 'P.P.Savani Vidhyabhavan',
      degree: 'Higher Secondary Certificate (HSC)',
      duration: '2020',
      location: 'Surat, Gujarat',
    },
  ] as Education[],

  languages: ['English (Professional)', 'Hindi', 'Gujarati (Native)'],
};
