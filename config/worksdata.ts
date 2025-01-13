import {
  FiSettings,
  FiActivity,
  FiDatabase,
  FiCpu,
  FiTerminal,
  FiLayers,
  FiFolder,
  FiSearch,
  FiCode,
  FiCloud,
  FiMap,
} from "react-icons/fi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaAws, FaCss3Alt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiPrisma,
  SiRedux,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { CiCloudOn } from "react-icons/ci";
import { BsFiletypeJson } from "react-icons/bs";

import { Project } from "@/config/project";

export const projectsData: Project[] = [
  {
    title: "Allview",
    imageUrl: "/assets/aview.png",
    description: "Stock management system",
    fullDescription:
      "A responsive inventory control platform that streamlines stock management through real-time monitoring and automated tracking capabilities.",
    githubLink: "https://github.com/schneble/all-View.git",
    liveLink: "https://main.d103fh40oxa2yj.amplifyapp.com/",
    id: "project1",
    goseekFeature: false,
    filescopeFeature: false,
    techStack: [
      {
        name: "Next.js",
        description: "Server rendering",
        color: "bg-blue-500",
        icon: RiNextjsFill,
      },
      {
        name: "AWS",
        description: "Cloud infrastructure",
        color: "bg-yellow-500",
        icon: FaAws,
      },
      {
        name: "Node.js",
        description: "Scalable backend",
        color: "bg-green-500",
        icon: FaNodeJs,
      },
      {
        name: "Prisma",
        description: "Database toolkit",
        color: "bg-indigo-500",
        icon: SiPrisma,
      },
      {
        name: "Redux",
        description: "State management",
        color: "bg-purple-500",
        icon: SiRedux,
      },
      {
        name: "TypeScript",
        description: "Type-safe components",
        color: "bg-sky-500",
        icon: SiTypescript,
      },
    ],
    features: [
      {
        title: "Dashboards ",
        description: "Personalized interfaces for streamlined data management.",
        icon: FiSettings,
        technicalDetails: [
          "Drag-and-drop components",
          "Persistent user configurations",
        ],
      },
      {
        title: "Data Monitoring",
        description: "Track and visualize key metrics with precision.",
        icon: FiActivity,
        technicalDetails: [
          "Scalable monitoring with AWS",
          "Dynamic chart rendering using backend data",
        ],
      },
      {
        title: "Database Efficiency",
        description: "Leverages Prisma for efficient database interactions.",
        icon: FiDatabase,
        technicalDetails: [
          "Efficient querying with Prisma ORM",
          "Support for complex relational models",
        ],
      },
    ],
  },
  {
    title: "GoSeek Guard",
    imageUrl: "/assets/seekguard.png",
    description: "On-demand virus scan",
    fullDescription:
      "Initially built as GoSeek, a basic file scanner with limited signature detection, now GoSeek Guard—a comprehensive antivirus solution with multiple layers of detection.",
    goseekFeature: true,
    filescopeFeature: false,
    id: "project3",
    githubUrl: "https://github.com/schneble/go-seek.git",
    liveUrl: "https://github.com/schneble/go-seek.git",
    techStack: [
      {
        name: "Python",
        description: " ",
        color: " ",
        icon: FaPython,
      },
    ],
    features: [
      {
        title: "Additions",
        icon: FiFolder,
        description: " ",
        technicalDetails: [
          " GUI with multiple tabs",
          " Extensive file type support",
          " Quarantine system",
          " Multiple viewing options",
        ],
      },
      {
        title: "Detection",
        icon: FiSearch,
        description: " ",
        technicalDetails: [
          " Entropy analysis",
          " Behavioral patterns",
          " Archive scanning",
          " Deep file inspection",
        ],
      },
      {
        title: "Capabilities",
        icon: FiCode,
        description: " ",
        technicalDetails: [
          " Multi-threaded scanning",
          " Detailed error handling",
          " Advanced file operations",
          " Professional logging system",
        ],
      },
    ],
  },
  {
    title: "Filescope",
    imageUrl: "/assets/scopefileimg.png",
    description:
      "Developed to improve comprehension of file integrity, multithreaded environments, and GUI design.",
    fullDescription:
      "Filescope is a file analysis tool designed to compute SHA-256 hashes, verify file integrity, and provide detailed insights into directory contents. ",
    goseekFeature: false,
    filescopeFeature: true,
    id: "project3",
    githubUrl: "https://github.com/schneble/filescope.git",
    liveUrl: "https://github.com/schneble/filescope.git",
    techStack: [
      {
        name: "Python",
        description: " ",
        color: " ",
        icon: FaPython,
      },
    ],
    features: [
      {
        title: "Integrity",
        description: " ",
        icon: FiFolder,
        technicalDetails: [
          "Computed SHA-256 hashes can be used to verify the integrity of files by comparing the hashes against expected values.",
        ],
      },
      {
        title: "Auditing",
        description: " ",
        icon: FiSearch,
        technicalDetails: [
          "Helps generate an inventory of files, including their sizes and hashes.",
        ],
      },
      {
        title: "Analysis",
        description: " ",
        icon: FiCode,
        technicalDetails: [
          "The hashing system can identify malicious files by matching their hashes against known malware signatures.",
        ],
      },
    ],
  },
  {
    title: "Kinetiq",
    imageUrl: "/assets/showkinetiq.png",
    description: "Vite front-end template",
    fullDescription:
      "Kinetiq frontend template includes a clean, modern design with interactive, reusable UI components, dynamic data rendering, and responsive layouts. Optimized for usability and scalability, Kinetiq delivers a seamless development and user experience.",
    githubLink: "https://github.com/schneble/kinetiq-vite.git",
    liveLink: "https://bd223d15.kinetiq-vite.pages.dev/",
    id: "project2",
    goseekFeature: false,
    filescopeFeature: false,
    techStack: [
      {
        name: "ReactJS",
        color: "bg-yellow-400",
        description:
          "Focused on client-side interactions and a wide range of libraries and tools.",
        icon: FaReact,
      },
      {
        name: "Vite",
        color: "bg-yellow-400",
        description:
          "Increased development speed, overall performance, and flexible configuration.",
        icon: SiVite,
      },
      {
        name: "TypeScript",
        color: "bg-blue-400",
        description:
          "Ensured strong types to minimize errors and improve maintainability.",
        icon: SiTypescript,
      },
      {
        name: "Tailwind",
        color: "bg-purple-400",
        description: "Responsive utilities that maintain design consistency.",
        icon: RiTailwindCssFill,
      },
    ],
    features: [
      {
        title: "Reusable Components",
        description: " ",
        icon: FiTerminal,
        technicalDetails: [
          "Flexibility with dynamic behavior",
          "Application scalability",
          "Code readability",
        ],
      },
      {
        title: "TypeScript Integration",
        description: " ",
        icon: FiCpu,
        technicalDetails: [
          "Accessible components",
          "Type-safe props",
          "Early error detection",
        ],
      },
      {
        title: "Optimized Development",
        description: " ",
        icon: FiLayers,
        technicalDetails: [
          "Swift build times and HMR updates",
          "Clean and simple configuration",
          "Fully supported JS features",
        ],
      },
    ],
  },
  {
    title: "Forecast",
    imageUrl: "/assets/foryou.png",
    description: "Access current weather data for any location",
    fullDescription:
      "A modern weather application leveraging React and TypeScript to deliver real-time and accurate forecasts with a user-friendly interface.",
    githubLink: "https://github.com/schneble/weather-forecast-app.git",
    liveLink: "https://your-forecast.vercel.app/",
    id: "project4",
    goseekFeature: false,
    filescopeFeature: false,
    techStack: [
      {
        name: "React",
        color: "bg-blue-500",
        description: "Dynamic UI rendering and component-based architecture.",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        color: "bg-blue-400",
        description:
          "Type-safe development ensuring robust and predictable code.",
        icon: SiTypescript,
      },
      {
        name: "OpenWeatherMapAPI",
        color: "bg-yellow-400",
        description:
          "Reliable weather data source for forecasts and conditions.",
        icon: CiCloudOn,
      },
    ],
    features: [
      {
        title: "Real-Time Updates",
        description: " ",
        icon: FiCloud,
        technicalDetails: [
          "RESTful API integration",
          "Asynchronous data fetching",
          "Custom error handling for API responses",
        ],
      },
      {
        title: "Location-Based",
        description: " ",
        icon: FiMap,
        technicalDetails: [
          "Automatic location detection",
          "User permission handling",
          "Fallback options for manual location entry",
        ],
      },
      {
        title: "Search Functionality",
        description: " ",
        icon: FiSearch,
        technicalDetails: [
          "Debounced search inputs",
          "OpenWeatherMap search endpoints",
          "Error messaging for invalid queries",
        ],
      },
    ],
  },
  {
    title: "BlackRoulette",
    imageUrl: "/assets/roulette.png",
    description: "A minimal dark mode VSCode theme.",
    fullDescription: "A self-introducing terminal.",
    githubLink: "https://github.com/schneble/blackroulette.git",
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme",
    id: "project5",
    goseekFeature: false,
    filescopeFeature: false,
    techStack: [
      {
        name: "Json",
        color: "bg-yellow-400",
        description: "Core logic and interactive terminal functionality.",
        icon: BsFiletypeJson,
      },
      {
        name: "Json",
        color: "bg-yellow-400",
        description: "Core logic and interactive terminal functionality.",
        icon: SiJavascript,
      },
      {
        name: "CSS",
        color: "bg-yellow-400",
        description: "Core logic and interactive terminal functionality.",
        icon: FaCss3Alt,
      },
    ],
    features: [
      {
        title: "Recent updates",
        description: " ",
        icon: FiTerminal,
        technicalDetails: [
          "Redesigned Command Center",
          "MacOS spotlight style",
        ],
      },

      {
        title: "Additions",
        description: " ",
        icon: FiLayers,
        technicalDetails: [
          "JS file: A backdrop blur to the Command Palette",
          "CSS file: Style adjustments made via Developer Tools",
        ],
      },
    ],
  },
];
