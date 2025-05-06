const skillList = {
  language: ["JavaScript", "TypeScript", "CSS/ SCSS", "PHP"],
  "library & framework": [
    "React",
    "Vue.js",
    "Ruby on Rails",
    "Node.js",
    "Express",
  ],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
};

const experienceList = [
  {
    company: "Self Employed",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Full-Stack Developer",
        duration: "JUN 2015 - Present",
        skill: [
          "CSS/ SCSS",
          "PHP",
          "JavaScript",
          "Node.js",
          "React",
          "React Native",
          "PostgreSQL",
          "REST API",
          "Wordpress",
          "Concrete",
          "Git",
        ],
        description: [
          {
            text: "Consult, design and develop over 20 successful web and mobile applications for various types of businesses using design methods and technologies relevant to customers' requirements and project details",
          },
          {
            text: "Enhance the performance of the website by creating a web content application with tailored features focusing on SEO, leading to an increase of over 1200% in organic traffic on the website after a few months of launching",
          },
          {
            text: "Solve the pain points of the existing system that customers are facing while providing practical and feasible solutions to ensure the highest efficiency of products for end users, resulting in more than 4000 non-tech savvy users accessing information and using the system more easily and conveniently",
          },
          {
            text: "Experience working with various programming languages, frameworks, CMS, and technologies, including implementing custom components and integrating websites with open-source technologies, third-party applications and extensions",
          },
        ],
      },
    ],
  },
  {
    company: "Hobbiz",
    image: "/src/assets/images/jamjann-01.jpg",
    position: [
      {
        title: "Software Developer",
        duration: "NOV 2018 - JUL 2022",
        skill: [
          "CSS/ SCSS",
          "PHP",
          "JavaScript",
          "Vue.js",
          "React Native",
          "REST API",
          "Wordpress",
          "Git",
        ],
        info: [
          {
            title: "Hobbiz",
            detail:
              "A creative digital design studio with an aim to create memorable visuals that could transform brand and drive business growth",
          },
        ],
        description: [
          {
            text: "Collaborate with marketing and design teams to discuss technical feasibility and suitability of the design for revisions and improvements before finalizing the final design for actual development, leading to a 40% decrease in development time to meet tight project deadlines",
          },
          {
            text: "Lead technical meetings with high-profile brands to pitch ideas and answer their development concerns, playing a key role in significantly helping the marketing team close deals with those customers",
          },
          {
            text: "Develop positive relationships with clients and partners through continuous support and delivery of quality outcomes, resulting in the team having over 95% repeat clients who decide to do multiple projects with the company",
          },
        ],
      },
    ],
  },
  {
    company: "SNEAK",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Software Engineer",
        duration: "JUN 2019 - DEC 2019",
        skill: [
          "TypeScript",
          "React",
          "Ruby",
          "Gatsby",
          "PostgreSQL",
          "GraphQL",
          "Git",
        ],
        info: [
          {
            title: "SNEAK",
            detail:
              "A startup company with a mission to simplify the way of trip planning by providing a visual-based travel planner platform where users can easily create a travel itinerary with travel photos in minutes",
          },
        ],
        description: [
          {
            text: "Develop a platform as a web application with a mobile-first strategy to create a user-friendly product suitable for the leading target group, resulting in over 10,000 itineraries created after launch and a 10x increase in users within 4 months",
          },
          {
            text: "Participate in all processes related to system development from UX testing to software implementation, including experience in product research and design based on user-centred design and A/B testing, resulting in an award-winning product at 2019 Thailand's MICE Startup and being selected as one of the top 15 finalists in the Dtac Accelerate Batch 7",
          },
          {
            text: "Lead the project in setting up and implementing a SNAEK web application on both the user-side and admin dashboard, focusing on SEO and page loading speed",
          },
          {
            text: "Collaborate with the team to create an outcome that simultaneously meets the product's objectives, the VC's conditions, and the end users' needs within resource and time constraints",
          },
        ],
      },
    ],
  },
  {
    company: "KOS Design",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Software Developer",
        duration: "SEP 2015 - MAY 2019",
        skill: [
          "CSS/ SCSS",
          "PHP",
          "JavaScript",
          "React Native",
          "Ruby on Rails",
          "Concrete",
          "Magento",
        ],
        info: [
          {
            title: "KOS Design",
            detail:
              "A dynamic and award-winning web and creative design agency specializing in design and IT security that successfully launched more than 1,000 projects for clients all across the globe",
          },
        ],
        description: [
          {
            text: "Propose, initiate, and implement the development of mobile applications as a new service for the company, including mentoring and guiding people in the entire engineering team in co-developing those applications, leading to increased new business opportunities and generating more than 20% additional revenue for the company",
          },
          {
            text: "Develop responsive web applications, including e-commerce websites, from scratch to the production with unique designs and tailored features for medium and large companies in Thailand and abroad i.e. Akyra, Bitdefender, Canterbury, Conergy, DM Home, Naraya, Takenaka, and Tris Rating",
          },
          {
            text: "Consult and offer technically applicable solutions closely with designers and customers throughout the project to ensure the results meet the requirements and everyone is on the same page",
          },
        ],
      },
    ],
  },
  {
    company: "SKUBA",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Software Engineer",
        info: [
          {
            title: "SKUBA",
            detail:
              "An intelligent autonomous robot laboratory mainly builds and develops a robot that can interact with human beings in daily life situations",
          },
          {
            title: "Robocup@Home",
            detail:
              "A competition that explores the possibilities of how robots can be useful and live alongside humans in everyday life, focusing on robots performing a wide range of automated household tasks",
          },
        ],
        duration: "JUN 2014 - MAY 2015",
        skill: ["Python", "MongoDB", "ROS"],
        description: [
          {
            text: "Participate as a core member of the sole robot development team from Thailand and one of the 14 finalist teams in the Robocup@Home competition, the world's largest robotics competition for autonomous service, held annually among students and robotics / AI experts worldwide",
          },
          {
            text: "Implement new object recognition algorithm and voice recognition system by using ROS (Robot Operating System), pocketsphinx, Flite, SURF (Speeded-Up Robust Features), and KNN (k-Nearest Neighbors) algorithm",
          },
          {
            text: "Design a data model and build a document database, using MongoDB, to store object data obtained from the robot's visual and audio recognition system",
          },
        ],
      },
    ],
  },
  {
    company: "Kasetsart University",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Teaching Assistant",
        subtitle: "Computer & Programming Course",
        info: [
          {
            title: "Computer & Programming",
            detail:
              "A compulsory introductory course that provides basic programming knowledge and skills using C# programming language",
          },
        ],
        duration: "JUN 2013 - MAY 2015",
        skill: ["C#"],
        description: [
          {
            text: 'Lead five classes of the course "Computer & Programming" in theory and practice to more than 250 first-year engineering students',
          },
          {
            text: "Provide one-on-one sessions to advise and assist students who need additional support during and outside class time",
          },
          {
            text: "Design C# problems, lessons, and exams for students to practice and assess learning, including assignments, weekly assessments, midterm and final exams",
          },
          {
            text: "Supervise students and ensure they can code with understanding and efficiency in a hands-on laboratory classroom",
          },
        ],
      },
    ],
  },
  {
    company: "GPSC",
    image: "/src/assets/images/jamjann-02.jpg",
    position: [
      {
        title: "Software Developer Intern",
        info: [
          {
            title: "GPSC",
            detail:
              "A global leading innovative and sustainable power company, which is the innovative power flagship of PTT Group, a Thai state-owned SET-listed oil and gas company",
          },
        ],
        duration: "APR 2014 - MAY 2014",
        skill: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
        description: [
          {
            text: "Design and implement an internal service that about 1000 employees use to manage and store data and usage history of all electronic devices used within the company",
          },
          {
            text: 'Maintain and manage two major internal systems used within the company: "ESS" (an employee attendance system) and "COACH" (an annual employee performance evaluation system)',
          },
          {
            text: "Design and develop a responsive website from scratch for the company's subsidiary business based on the requirements received from discussions with managers and stakeholders",
          },
        ],
      },
    ],
  },
];

const educationList = [
  {
    topic: "Kasetsart University",
    fields: [
      { title: "Degree", value: "Bachelor of Engineering with Distinction" },
      { title: "Field of study", value: "Computer Engineering" },
      { title: "Year", value: "2011 - 2015" },
    ],
  },
];

const certificationList = [
  {
    type: "certificate with distinction",
    topic: "Introduction to Canadian Business Management",
    fields: [{ title: "By", value: "VGC International College" }],
  },
  {
    type: "certificate",
    topic: "Foundations of User Experience (UX) Design",
    link: "https://www.coursera.org/verify/EK4H9CRX2WK5",
    fields: [{ title: "By", value: "Google on Coursera" }],
  },
  {
    type: "certificate",
    topic: "The Complete Ruby on Rails Developer Course",
    link: "https://www.udemy.com/certificate/UC-f9ffb187-bb18-4d1a-bd76-bd1faa78b77c/",
    fields: [{ title: "By", value: "Codestars on Udemy" }],
  },
  {
    type: "certificate",
    topic: "YC Startup School 2019",
    fields: [{ title: "By", value: "Y Combinator" }],
  },
];

const projectList = [
  {
    name: "How's the weather there?",
    image: "/src/assets/images/project-01.png",
    description:
      "A simple weather app that provides current weather information and forecasts for any location. Users can search for a city and view the current temperature, humidity, wind speed, and a 7-day forecast.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

export {
  skillList,
  experienceList,
  educationList,
  certificationList,
  projectList,
};
