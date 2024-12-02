import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "@nextui-org/link";

import Links from "@/components/links";
import Recommendations from "@/components/recommendations";
import testimonials from "@/data/testimonials.json";
import ProjectShowcase, { ProjectProps } from "@/components/project-showcase";

const socialLinks = {
  heading: "Social",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/juliuskamina/",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/jkjulsss",
      icon: <FaGithub size={20} />,
    }
  ],
};

const projects: ProjectProps[] = [
  {
    title: "Thermoelectric Car",
    description:
        "A miniature vehicle that runs on a thermoelectric engine.",
    stats: [
      { label: "Mechanical Efficiency", value: "26.4%" },
      { label: "Top Speed", value: "102.5mm/s" },
      { label: "Mechanical Horsepower", value: "7.241519e-5" },
    ],
    highlights: [
      {
        imageUrl: "/projects/thermo/car1.png",
        title: "",
        description: "Developed a miniature thermoelectric vehicle using " +
        "sustainable materials for the body and wheels. The design incorporates " + 
        "a Peltier device to convert thermal energy from a tealight into electric " +
        "power, driving a motor connected to the front wheel. This three-wheeled " +
        "vehicle highlights the innovative application of themoelectric energy in mobility solutions."
      },
      {
        imageUrl: "/projects/thermo/car2.png",
        title: "",
      },
      {
        imageUrl: "/projects/thermo/car3.png",
        title: "",
      },
    ],
    logoUrl: "/projects/thermo/carsss.jpg",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p className="text-lg">
          I&apos;m Julius, An Aerospace Engineering Student at Concordia University
        </p>
        <p className="text-lg">
          I enrolled into Option A: Aerodynamics and Propulsion
          to explore the principles of flight and engine efficiency, 
          driving innovation in aerospace technology. My goal is to combine my
          theoretical and practical skills to contribute to the evolution
          of cutting edge technologies within the field of Aeronautics. 
        </p>
      </div>

      <img
        alt="Adraa"
        className="w-full h-full mx-auto rounded-lg"
        src="/v2500-2.avif"
      />

      <Links {...socialLinks} />

      <ProjectShowcase projects={projects} />

      <Recommendations testimonials={testimonials} />
    </section>
  );
}
