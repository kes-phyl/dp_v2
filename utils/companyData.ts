export type Responsibility = {
    description: string;
  };
  
  export type Company = {
    name: string;
    jobTitle: string;
    date: string;
    responsibilities: Responsibility[];
  };
  
  // export const companiesData: Record<string, Company> = {
  //   Upstatement: {
  //     name: 'Upstatement',
  //     jobTitle: 'Lead Engineer',
  //     date: 'May 2018 - Present',
  //     responsibilities: [
  //       { description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique molestias iure incidunt officiis nobis possimus at maiores minus aliquid, ipsa sequi voluptatum optio delectus qui non consequatur labore mollitia nostrum. 1' },
  //       { description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique molestias iure incidunt officiis nobis possimus at maiores minus aliquid, ipsa sequi voluptatum optio delectus qui non consequatur labore mollitia nostrum. 1' },
  //       { description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique molestias iure incidunt officiis nobis possimus at maiores minus aliquid, ipsa sequi voluptatum optio delectus qui non consequatur labore mollitia nostrum. 1' },
  //       { description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique molestias iure incidunt officiis nobis possimus at maiores minus aliquid, ipsa sequi voluptatum optio delectus qui non consequatur labore mollitia nostrum. 1' },
  //     ],
  //   },
  //   Apple: {
  //     name: 'Apple',
  //     jobTitle: 'Job Title for Apple',
  //     date: 'Date for Apple',
  //     responsibilities: [],
  //   },
  //   'Scout Studio': {
  //     name: 'Scout Studio',
  //     jobTitle: 'Job Title for Scout Studio',
  //     date: 'Date for Scout Studio',
  //     responsibilities: [],
  //   },
  //   Starry: {
  //     name: 'Starry',
  //     jobTitle: 'Job Title for Starry',
  //     date: 'Date for Starry',
  //     responsibilities: [],
  //   },
  //   MullenLowe: {
  //     name: 'MullenLowe',
  //     jobTitle: 'Job Title for MullenLowe',
  //     date: 'Date for MullenLowe',
  //     responsibilities: [],
  //   },
  // };





  export const companiesData: Record<string, Company> = {
    Conigital: {
      name: 'Conigital',
      jobTitle: 'Software Engineer',
      date: 'Jan 2023 - Present',
      responsibilities: [
        { description: 'Implemented & maintained JWT authentication strategy, in a MAAS application using NodeJs with Nest.Js ensuring security and reducing incidents in 12weeks.' },
        { description: 'Enhanced developers experience by 50%, using technologies like: ReactJs, Vite  to create compelling User Interfaces communicating with Backend modules.' },
        { description: 'Created a role module necessary for role-based access control, implemented guards and assigned roles to users, using decorators in Nest Js, enhancing user experience and reducing errors in 12 weeks.' },
        { description: 'Handled automation and monitoring using tools like Grafana, for role and other modules in a microservices ecosystem to display performance metrics.' },
      ],
    },
    Signapse: {
      name: 'Signapse',
      jobTitle: 'Frontend Engineer',
      date: 'Dec 2022 - Mar 2024',
      responsibilities: [
        { description: 'Created a web-based video translation plugin (translate from text to British/American Sign Language), using JavaScript, and AI for text-to-video translation in 21weeks.' },
        { description: 'Developed a real time flight announcement portal, with REACT JS that uses multiple data endpoints to display flight announcements on multiple screens in an airport, showcasing flight details & announcements realtime.' },
        { description: 'Applied Test Driven Development with frameworks like, JEST and Cypress, prioritizing application security, accessibility and best practice.' },
        { description: 'Collaborated in Design planning, testing, code reviews, user stories planning on JIRA while prioritizing efficiency and maintainability across codebase. ' },
      ],
    },
    BCR: {
      name: 'Basin_Cliff',
      jobTitle: 'Software Developer',
      date: 'Dec 2019 - Dec 2021',
      responsibilities: [
        { description: 'Collaborated with backend engineers, consumed REST API endpoints to deliver compelling interfaces, using React.' },
        { description: 'Led a team of four engineers, participated in code reviews, sprint planning, knowledge sharing and pair programming.' },
        { description: 'Integrated API from multiple data sources, to deliver real time project information increasing project/investors feedback within a quarter..' },
      ],
    },
  };