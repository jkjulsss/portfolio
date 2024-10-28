import { FaGithub } from "react-icons/fa";
import { Metadata } from "next";

import ProjectShowcase, { ProjectProps } from "@/components/project-showcase";
import { constructMetadata } from "@/utils";

export const metadata: Metadata = constructMetadata({
  title: "Projects",
  description: "Projects I have worked on",
  canonical: "/projects",
});

const projects: ProjectProps[] = [
  {
    title: "Flymile",
    description:
      "Flight search engine designed for credit card points enthusiasts.",
    stats: [
      { label: "Users", value: "1k+" },
      { label: "Flights Search", value: "10k+" },
      { label: "Reward Programs", value: "4" },
    ],
    links: [{ label: "Website", url: "https://flymile.pro" }],
    highlights: [
      {
        imageUrl: "/projects/flymile/home.png",
        title: "Home",
      },
      {
        imageUrl: "/projects/flymile/flights.png",
        title: "Flights",
      },
      {
        imageUrl: "/projects/flymile/flights-card.png",
        title: "Flight Card",
      },
      {
        imageUrl: "/projects/flymile/calendar-view.png",
        title: "Calendar View",
      },
      {
        imageUrl: "/projects/flymile/credit-cards.png",
        title: "Credit Cards",
      },
      {
        imageUrl: "/projects/flymile/shared-flight.png",
        title: "Shared Flight",
      },
    ],
    logoUrl: "/projects/flymile/flymile.png",
  },
  {
    title: "Concordia courses",
    description:
      "A platform offering course reviews and professor ratings to help students make informed academic choices.",
    stats: [
      { label: "Users", value: "270+" },
      { label: "MAU", value: "500+" },
    ],
    links: [
      { label: "Website", url: "https://concordia.courses" },
      {
        label: "Github",
        url: "https://github.com/Tsounguinzo/concordia-courses",
        icon: <FaGithub />,
      },
    ],
    highlights: [
      {
        imageUrl: "/projects/concordia-courses/home.png",
        title: "Home",
      },
      {
        imageUrl: "/projects/concordia-courses/course.png",
        title: "Course Page",
      },
      {
        imageUrl: "/projects/concordia-courses/instructor.png",
        title: "Instructor Page",
      },
      {
        imageUrl: "/projects/concordia-courses/explore-courses.png",
        title: "Explore Courses",
      },
      {
        imageUrl: "/projects/concordia-courses/explore-instructors.png",
        title: "Explore Instructors",
      },
      {
        imageUrl: "/projects/concordia-courses/auth.png",
        title: "Auth",
      },
      {
        imageUrl: "/projects/concordia-courses/user.png",
        title: "User Page",
      },
    ],
    logoUrl: "/projects/concordia-courses/concordia-courses.png",
  },
  {
    title: "Concordia groups",
    description:
      "Interface to join and create groups study groups for students at Concordia University.",
    stats: [{ label: "Users", value: "5K+" }],
    links: [
      { label: "Website", url: "https://concordia-groups.web.app/search" },
      {
        label: "Github",
        url: "https://github.com/Tsounguinzo/concordia-groups",
        icon: <FaGithub />,
      },
    ],
    highlights: [
      {
        imageUrl: "/projects/concordia-groups/home.png",
        title: "Home",
      },
      {
        imageUrl: "/projects/concordia-groups/join.png",
        title: "Join Group",
      },
      {
        imageUrl: "/projects/concordia-groups/create-group.png",
        title: "New Group",
      },
    ],
    logoUrl: "/projects/concordia-groups/concordia-groups.png",
  },
];

const moreProjects = [
  {
    title: "TA Beaudelaire",
    url: "https://ta.beaudelaire.ca",
    description: "My TA website",
  },
  {
    title: "concordia.nexus",
    url: "https://concordia.nexus",
    description: "Listing of good resources for Concordia students",
  },
  {
    title: "Restart",
    url: "https://github.com/Tsounguinzo/Restart",
    description: "Meditating song IOS app",
  },
  {
    title: "Predictor",
    url: "https://github.com/Tsounguinzo/airline_tickets",
    description: "ML project to predict airline tickets price",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ProjectShowcase moreProjects={moreProjects} projects={projects} />
    </div>
  );
}
