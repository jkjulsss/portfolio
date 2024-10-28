import { Metadata } from "next";

import EmploymentHistory, {
  EmploymentProps,
} from "@/components/employment-history";
import { constructMetadata } from "@/utils";

export const metadata: Metadata = constructMetadata({
  title: "Work",
  description: "My work experience and history.",
  canonical: "/work",
});

const employments: EmploymentProps[] = [
  {
    location: "Montreal, CA",
    title: "Teacher Assistant",
    company: "Concordia University",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Concordia University is North America's top university under 50 years and a leader in software engineering research. As a Teaching Assistant in the Software Engineering department, I assist professors in delivering course content, conduct labs, provide academic support to students, and develop programming assignments.",
    tags: ["DSA", "Node.js", "HTML/CSS/JS", "Java", "GitHub", "Git"],
    additionalInfo: [
      "Automated lab sign-in and report processes",
      "Developed a platform to receive assignments feedbacks",
      "Created review notes and slides for programming concepts",
    ],
    badgeText: "Why am I a TA?",
    badgeInfo: {
      title: "Why am I a TA?",
      content: [
          "In high school, I earned the nickname \"JJ-Particle\" because of my grasp of physics, math, and chemistry. I often helped classmates prepare for GCE A-Levels, guiding them through concepts, labs, and experiments.",
          "As an international student at Concordia, paying around 20K CAD per semester, I quickly realized that many TAs didn’t meet the quality of instruction students deserved. Only a handful of tutorials were genuinely effective, and I often learned more from these than in actual classes.",
          "To change this, I set out to help fellow students. I built my own website with detailed slides and created a custom check-in system for lab sessions. When I grade, I use a personalized review platform, featuring high-quality illustrations to break down algorithms in courses like Data Structures and Algorithms (DSA)."
      ]
    },
  },
  {
    location: "Montreal, CA",
    title: "Software Developer Intern",
    company: "Straumann Group",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description:
      "Straumann Group is a global leader in dental implantology and orthodontics. I worked as a java developer and contributed to several projects.",
    tags: ["Java", "JavaFX", "Microservices", "Jira", "CI/CD", "Jenkins"],
    additionalInfo: [
      "Developed and deployed a new design for the visibility toolkit",
      "Implementing undo/redo throughout the design workVlow.",
    ],
  },
  {
    location: "Montreal, CA",
    title: "Software Developer Intern",
    company: "Straumann Group",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description:
      "Straumann Group is a global leader in dental implantology and orthodontics. I worked as a java developer and contributed to several projects.",
    tags: ["Java", "JavaFX", "Microservices", "Jira", "CI/CD", "Jenkins"],
    additionalInfo: [
      "Created test case generation tool which creates random XML docs from XML Schema.",
      "Implementing tooth tagging from AI tooth segmentation data.",
      "Designed and implemented an automated solution to track artifacts from various design workflows.",
    ],
  },
  {
    location: "Montreal, CA and Yaounde, CM",
    title: "Non Tech Jobs",
    company: "McDonald, CIUSSS, Résidence Mont Royal RMR, etc.",
    startDate: "Jan 2014",
    endDate: "Present",
    description:
      "Over the years, I have gained diverse experience through various non-technical roles across multiple organizations in both Montreal, Canada, and Yaounde, Cameroon. I started working when I was 10 years old at my father's store in Cameroun.",
    tags: [
      "Customer Service",
      "Pressure Handling",
      "Teamwork",
      "Leadership",
      "Problem Solving",
      "Time Management",
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen">
      <EmploymentHistory employments={employments} />
    </div>
  );
}
