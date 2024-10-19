import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "@nextui-org/link";

import Links from "@/components/links";
import Recommendations from "@/components/recommendations";
import testimonials from "@/data/testimonials.json";
import Hidden from "@/components/hidden";

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
        <p className="text-lg">
          I`&apos;m Beaudelaire, A SOEN Student at Concordia, Montreal.
        </p>
        <p className="text-lg">
          I mostly do Full-stack development with an eye for good design and
          pretty good grasp of all parts of the stack including the frontend,
          backend, databases, devops, and cloud.
        </p>
        <p className="text-lg">
          I`&apos;ll write more about myself here soon.{" "}
          <Hidden
            content={
              <>
                In the meantime, you can check my{" "}
                <Link className="underline" href="/projects">
                  Projects
                </Link>
              </>
            }
          />
        </p>
      </div>

      <Links {...socialLinks} />

      <Recommendations testimonials={testimonials} />
    </section>
  );
}
