import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Links from "@/components/links";
import Recommendations from "@/components/recommendations";
import testimonials from "@/data/testimonials.json";

const socialLinks = {
  heading: "Social",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/beaudelaire-tsoungui-nzodoumkouo-223810299/",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Tsounguinzo",
      icon: <FaGithub size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/beaudelaire001/",
      icon: <FaInstagram size={20} />,
    },
  ],
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">Hello!</h1>
      </div>

      <Links {...socialLinks} />

      <Recommendations testimonials={testimonials} />
    </section>
  );
}
