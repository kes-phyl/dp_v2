export type Responsibility = {
  description: string;
};

export type Company = {
  name: string;
  jobTitle: string;
  location: string;
  date: string;
  responsibilities: Responsibility[];
};

export const companiesData: Record<string, Company> = {
  FXDigital: {
    name: 'FX Digital',
    jobTitle: 'Software Engineer (TypeScript, Lightning.js, React, Node.js)',
    location: 'London, UK',
    date: 'Jan 2025 – Present',
    responsibilities: [
      { description: 'Delivered features, integrations, and production fixes across BritBox WebTV and Kepler/Vega connected-TV applications, leading multiple major releases.' },
      { description: 'Built and improved Lightning.js and TypeScript user journeys, including authentication, subscriptions, in-app purchases, and platform-specific playback controls.' },
      { description: 'Led complex third-party integrations, including ATI Piano analytics, Redfast subscription prompts, commerce services, and Alexa voice controls, adapting solutions to connected-TV platform constraints.' },
      { description: 'Integrated third-party APIs and ensured reliable frontend behaviour under real-world usage.' },
    ],
  },
  OasisGroup: {
    name: 'Oasis Group',
    jobTitle: 'Software Engineer (TypeScript, React, Node.js)',
    location: 'London, UK',
    date: 'Mar 2024 – Jan 2025',
    responsibilities: [
      { description: 'Led development of a public-facing web platform using Next.js, focusing on performance, accessibility, and security.' },
      { description: 'Built reusable UI components and patterns with React to support a growing, content-driven product.' },
      { description: 'Worked closely with designers to accurately translate designs into responsive, accessible interfaces.' },
      { description: 'Integrated third-party APIs and ensured reliable frontend behaviour under real-world usage.' },
      { description: 'Mentored engineers through code reviews and design discussions, promoting consistent frontend standards.' },
    ],
  },
  Signapse: {
    name: 'Signapse AI',
    jobTitle: 'Frontend Engineer Lead (Next.js, TypeScript, Three.js)',
    location: 'London, UK',
    date: 'Dec 2022 – Mar 2024',
    responsibilities: [
      { description: 'Led development of a production video translation platform built with Next.js, contributing to architectural decisions and performance optimisation strategies.' },
      { description: 'Worked across frontend and backend integrations, consuming third-party APIs and ensuring resilient system behaviour under real-world usage.' },
      { description: 'Established CI/CD workflows using Jenkins and GitHub Actions, improving release reliability and deployment speed.' },
      { description: 'Mentored engineers through code reviews and technical guidance, fostering strong engineering standards within a growing team.' },
    ],
  },
  Conigital: {
    name: 'Conigital Group',
    jobTitle: 'Software Engineer (Node.js, NestJS, React, PostgreSQL, Python)',
    location: 'Birmingham, UK',
    date: 'Mar 2019 – Dec 2022',
    responsibilities: [
      { description: 'Built scalable backend services using Node.js and NestJS within a microservices architecture supporting real-time data processing.' },
      { description: 'Designed and implemented secure authentication and role-based access control, strengthening system security and compliance.' },
    ],
  },
};
