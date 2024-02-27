export type Responsibility = {
    description: string;
  };
  
  export type Company = {
    name: string;
    jobTitle: string;
    date: string;
    responsibilities: Responsibility[];
  };
  
  export const companiesData: Record<string, Company> = {
    Signapse: {
      name: 'Signapse',
      jobTitle: 'Frontend Engineer',
      date: 'Dec 2022 - Mar 2024',
      responsibilities: [
        { description: 'Imlemented a web-based video translation plugin (translate from text to British/American Sign Language), using JavaScript, and AI for text-to-video translation in 21weeks.' },
        { description: 'Developed a real time flight announcement portal, with REACT JS that uses multiple data endpoints to display flight announcements on screens in an airport, showcasing flight details & announcements realtime.' },
        { description: 'Applied Test Driven Development with frameworks like, JEST and Cypress, prioritizing application security, accessibility and best practice.' },
        { description: 'Collaborated in Design planning, code reviews, user stories planning on JIRA while prioritizing efficiency and maintainability across codebase.' },
      ],
    },
    Conigital: {
      name: 'Conigital',
      jobTitle: 'Software Engineer',
      date: 'Jan 2023 - Present',
      responsibilities: [
        { description: 'Implemented & maintained JWT authentication strategy, in a MAAS application using NodeJs with Nest.Js ensuring security and reducing incidents in 12weeks.' },
        { description: 'Enhanced developers experience by 50%, using technologies like: ReactJs, Vite  to create compelling User Interfaces communicating with Backend modules.' },
        { description: 'Created a role module necessary for role-based access control, implemented guards and assigned roles to users, using decorators in Nest Js, enhancing user experience and reducing errors in 12 weeks.' },
        { description: 'Managed automation and monitoring processes within a microservices ecosystem, utilizing Grafana and other tools to track and display performance metrics across various modules and roles.' },
      ],
    },
    BCR: {
      name: 'Basin_Cliff',
      jobTitle: 'Software Developer',
      date: 'Dec 2019 - Dec 2021',
      responsibilities: [
        { description: 'Worked closely with backend engineers to create engaging user interfaces by integrating REST API endpoints using React.' },
        { description: 'Managed a team of four engineers, overseeing code reviews, sprint planning, knowledge sharing sessions, and pair programming activities.' },
        { description: 'Integrated APIs from various data sources to provide real-time project information, significantly improving project and investor feedback within a quarter.' },
      ],
    },
  };