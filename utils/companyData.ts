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
        { description: 'Implemented password encryption with bcrypt, in a MAAS application built with NodeJs and Nest.Js ensuring application security and removing raw-text password exposure' },
        { description: 'Enhanced developers experience by 50%, using technologies like React with Vite to create compelling User Interfaces for visual testing on our backend modules.' },
        { description: 'Created a role module necessary for role-based access control, implemented guards, and assigned roles to users, using decorators in Nest Js, enhancing user experience and reducing errors in 12 weeks.' },
        { description: 'Utilize proficiency in Docker containerization and MQTT server technologies to integrate messaging capabilities within our microservices architecture, ensuring seamless communication and data exchange between distributed components of the application' },
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