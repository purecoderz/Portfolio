import React from "react";


export const projectsData = [
  {
  id: 1,
  title: "Osun State Ministry of Youth Affairs Portal",
  description: "Developed and deployed the official website for the Osun State Ministry of Youth Affairs while working as a Full-Stack Developer at MStar Innovations Limited. The platform allows youth registration, event updates, and digital communication between the ministry and citizens, built with a responsive, secure full-stack architecture.",
  image: "https://www.osunyouthaffairs.com/uploads/news/68d9c156d7858.jpeg", // replace if needed
  category: "Government / Youth Empowerment Platform",
  technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "HTML"],
  role: "Full-Stack Developer",
  company: "MStar Innovations Limited",
  demo: "https://www.osunyouthaffairs.com/",
  live: true
},

  {
    id:1,
    title: "Portfolio Website",
    description: "Modern portfolio website with React and Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    category: "frontend",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/purecoderz/Portfolio",
    demo: "/",
  },
  {
    id:2,
    title: "CodePoints",
    description: "A simple web app to store and organize key points from your coding journey. Perfect for saving concepts, " + 
    "snippets, and tips as you learn and grow.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/purecoderz/code-point",
    demo: "https://purecoderz.github.io/code-point/",
  },
];

export const categories = ["All", "Fullstack", "Frontend", "Backend"];
