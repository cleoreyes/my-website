import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "University of Washington",
    location: "Seattle, WA",
    description:
      "I am an undergraduate student at the University of Washington majoring in Informatics studying software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
  {
    title: "Research Assistant @ DAIS",
    location: "Bothell, Washington",
    description:
      'Worked on "iCare" project, an AI-driven chatbot initiative under Dr. Dong Si, focusing on enhancing user interactions and the overall functionality of the system.',
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - January 2024",
  },
  {
    title: "Software Developer @ MESH",
    location: "Seattle, Washington",
    description:
      "Developed professional public facing website for registered student organization at the University of Washington.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - June 2024",
  },
  {
    title: "Software Engineer Intern @ Allen Institute",
    location: "Seattle, Washington",
    description:
      "Worked on Brain Knowledge Platform by creating accessibility CI/CD pipeline and implemented new features, components, and UI/UX improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
  {
    title: "Undergraduate Researcher @ Code and Cognition Lab",
    location: "Seattle, Washington",
    description:
      'Conducting research for "Wordplay", an open-source project under the guidance of Dr. Amy J. Ko from the UW Information School and Paul G. Allen School for Computer Science and Engineering.',
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
  },
  {
    title: "Software Developer @ Eat Together",
    location: "Seattle, Washington",
    description:
      "Developing features for an student-based startup application that aims to connect students through shared meals..",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - Present",
  },
] as const;

type Project = {
  projectName: string;
  duration: string;
  typeOfProject: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubLink?: string;
  projectLink?: string;
  description: string;
};

export const projectsData: Project[] = [
  {
    projectName: "T9 Predictive Text",
    duration: "November 2024",
    typeOfProject: "DubHacks 2024 Project",
    technologies: ["C", "Emacs"],
    image: "/t_9.png",
    imageAlt: "T9 Thumbnail",
    description:
      "Developed a T9 predictive text system in C, utilizing dynamic memory allocation, custom trie data structures, and efficient coding practices. Implemented numeric key sequence translation into words with a modular Makefile structure and ensured memory safety using Valgrind. Gained expertise in dynamic data handling, text processing, and test-driven development.",
  },
  {
    projectName: "Eterna",
    duration: "October 2024",
    typeOfProject: "DubHacks 2024 Project",
    technologies: ["React.js", "JavaScript", "HTML/CSS"],
    image: "/eterna.png",
    imageAlt: "Eterna Thumbnail",
    githubLink: "https://github.com/cleoreyes/eterna",
    projectLink: "https://eterna-app.vercel.app/",
    description:
      "Eterna is a web application designed to store personal messages, final wishes, and documents could provide a more intentional and secure way for individuals to maintain control over their digital legacy. Users are able to upload various forms of media to preserve for an end-of-life event. These digital artifacts will be sent to loved ones when the time is right.",
  },
  {
    projectName: "MESH UW",
    duration: "January 2024 - June 2024",
    typeOfProject: "Web Impact UW 2023-2024 Client Project",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Sanity",
      "HTML/CSS",
      "JavaScript",
    ],
    image: "/mesh.jpg",
    imageAlt: "MESH UW Website",
    githubLink: "https://github.com/cleoreyes/mesh.git",
    projectLink: "https://mesh-eight.vercel.app/",
    description:
      "Website for MESH, a Registered Student Organization at the University of Washington which is a creative collective based at the University of Washington that centers fashion design education and exploration. Using a headless content manager service (CMS) being Sanity, the client will be able to maintain the website code free.",
  },
  {
    projectName: "Vaccine Scheduler",
    duration: "May 2024",
    typeOfProject: "CSE 414 Project",
    technologies: ["Java", "SQL", "Microsoft Azure Database"],
    image: "/vaccine-scheduler.png",
    imageAlt: "User Interface of Vaccine Scheduler",
    githubLink: "https://github.com/cleoreyes/vaccine-scheduler.git",
    projectLink: "cleoreyes.com",
    description:
      "Architected and developed a tailored database system to manage user data effectively and facilitate interactive appointment scheduling through a command-line interface. The system was built using Java and SQL, with data tables securely hosted in Microsoft Azure SQL Database. To safeguard sensitive data, I implemented robust security protocols, including encryption, hashing, and identity management. These measures ensured data confidentiality without compromising the system's performance, allowing for efficient and secure query processing.",
  },
  {
    projectName: "StyleU",
    duration: "March 2024 - June 2024",
    typeOfProject: "INFO 340 Capstone Project",
    technologies: [
      "React.js",
      "Bootstrap",
      "Firebase",
      "HTML/CSS",
      "JavaScript",
    ],
    image: "/styleu.png",
    imageAlt: "styleU Palette Quiz",
    githubLink: "https://github.com/cleoreyes/styleU.git",
    projectLink: "https://styleu.vercel.app/",
    description:
      'Developed and built "StyleU", a web application focused on personal styling and mitigating fast fashion and clothing waste. The platform allows users to take quizzes to identify their seasonal color palette and fashion style, providing tailored recommendations. Users can also explore additional styles and palettes to expand their fashion knowledge. The application features an interactive and responsive interface, enhancing user engagement and helping users refine their personal style.',
  },
  {
    projectName: "reUse",
    duration: "January 2024 - March 2024",
    typeOfProject: "INFO 360 Capstone Project",
    technologies: ["Figma"],
    image: "/reUse.png",
    imageAlt: "reUse Wireframes",
    projectLink:
      "https://www.figma.com/proto/gGEfVADkdn9NkJmPrmqIV8/reUse?node-id=6-55&t=jrlRCQT1ENBQTXYt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A52&show-proto-sidebar=1",
    description:
      'Engineered and visualized "reUse", a mobile application designed to encourage University of Washington students to use reusable bags while shopping, reducing the environmental impact of plastic bags. I designed and prototyped an intuitive rewards system where users earn points for using reusable bags, tracked via a unique barcode scan. Points can be redeemed for discounts at local businesses or donated to environmental causes. The app also includes personalized reminders based on shopping habits and campaigns to raise awareness about the environmental impact of plastic waste and ways to reduce it.',
  },
  {
    projectName: "I WAS HERE",
    duration: "January 2024",
    typeOfProject: "WINFO 12th Hackathon Project",
    technologies: ["Figma"],
    image: "/i-was-here.png",
    imageAlt: "I WAS HERE Thumbnail",
    projectLink:
      "https://www.figma.com/proto/KgenoAMZzANY7vIuZsKcuC/I-WAS-HERE?page-id=431%3A851&node-id=461-851&viewport=429%2C636%2C0.66&t=1Oe9ZNkpGK4686nP-1&scaling=min-zoom",
    description:
      'Designed and prototyped "I WAS HERE" is a social media app focused on voice messages, location, photos, and videos. It aims to move away from performative content creation, prioritizing authentic connections between friends. Users can post Memories (long-term) or Moments (short-term) tied to specific locations, unlocking content when friends visit those places. The platform ensures that users only see content created by their friends, embodying the value: by friends FOR friends.',
  },
  {
    projectName: "Michelin Star and Countries",
    duration: "October 2023 - December 2023",
    typeOfProject: "INFO 201 Capstone Project",
    technologies: ["R"],
    image: "/info201.png",
    imageAlt: "Data analysis graphs",
    githubLink:
      "https://github.com/cleoreyes/Country-Data-and-Michelin-Star-Data-Analysis.git",
    projectLink:
      "https://drive.google.com/file/d/1EN5PySpVfnsCRgy7br4k9_UpruYdbElr/view?usp=sharing",
    description:
      "Analyzed the relationship between Michelin-starred restaurants and every country worldwide as a guide for avid foodies and travelers on potential destinations.",
  },
  {
    projectName: "Edu4All",
    duration: "September 2023 - December 2023",
    typeOfProject: "INFO 200 Capstone Project",
    technologies: ["Figma"],
    image: "/edu4all.png",
    imageAlt: "Edu4All prototype",
    projectLink:
      "https://www.figma.com/proto/yG5QrF3kg8mfxAUR7BmZef/Website-Prototype?type=design&node-id=267-1487&t=u45lClUFgp5nLqmJ-1&scaling=scale-down&page-id=16%3A2&starting-point-node-id=267%3A1487",
    description:
      "Edu4All is a proposed resource we conducted user research on and created a user interfect for. It targets students in underprivileged and underrepresented communities especially those from low-income and first-generation households. Education is vital to the success of one and holds the potential for these individuals to live a better life and provide for their families. With this resource, these students and their families would be able to gain more knowledge about the college application process providing more clarity.",
  },
  {
    projectName: "caf-fiend",
    duration: "October 2023",
    typeOfProject: "DubHacks 2023 Project",
    technologies: ["HTML/CSS", "JavaScript"],
    image: "/caffiend.png",
    imageAlt: "caffiend Web Application",
    githubLink: "https://github.com/cleoreyes/Caf-Fiend",
    projectLink: "https://gordondhuang.github.io/Caf-Fiend/index.html",
    description:
      "Caf-Fiend is your ultimate caffeine companion where you can seamlessly input your caffeine intake to help you manage and monitor your daily caffeine consumption with precision. Caf-Fiend not only provides real-time tracking but also offers personalized guidance, ensuring that you stay well within recommended daily caffeine limits for a healthier, more balanced lifestyle. Beyond daily tracking, Caf-Fiend lets you log your caffeine intake by week, month, and year, granting you invaluable insights into your long-term health and wellness patterns.",
  },
  {
    projectName: "Daily Quote",
    duration: "July 2023",
    typeOfProject: "Personal Project",
    technologies: ["HTML/CSS", "JavaScript"],
    image: "/dailyquote.png",
    imageAlt: "Daily Quote Web Application",
    githubLink: "https://github.com/cleoreyes/DailyQuote",
    projectLink: "https://cleoreyes.github.io/DailyQuote/",
    description:
      "Daily Quote is an innovative and inspiring random quote generator designed specifically to motivate and uplift students at the University of Washington. By delivering daily doses of wisdom, encouragement, and positivity, Daily Quote aims to enhance the academic and personal lives of the university's diverse student body.",
  },
] as const;
