"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Image,
  Card, Button, useDisclosure
} from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsArrowThroughHeartFill, BsGlobe } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { LinkPreview } from "@/components/link-preview";

export type ProjectProps = {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  links: { label: string; url: string; icon?: ReactNode }[];
  highlights: { imageUrl: string; title: string }[];
  logoUrl: string;
  badgeText?: string;
  badgeInfo?: {
    title: string;
    content: string;
  };
};

const ProjectCard = ({
  title,
  description,
  stats,
  links,
  highlights,
  logoUrl,
  badgeText,
  badgeInfo,
}: ProjectProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showHighlights, setShowHighlights] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleHighlights = () => setShowHighlights(!showHighlights);

  const updateIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < highlights.length) {
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <>
      <Card className="relative overflow-hidden rounded-lg bg-background p-3 mb-6">
        <div>
          <h2 className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
              <a
                className="text-lg font-medium sm:text-xl"
                href={links[0]?.url}
                rel="noreferrer"
                target="_blank"
              >
                {title}
              </a>
              {badgeText && badgeInfo && (
                <button
                  className="flex items-center gap-1 rounded-3xl px-2 py-0.5 text-xs transition-colors bg-yellow-400 text-black hover:bg-yellow-600"
                  onClick={onOpen}
                >
                  {badgeText}
                </button>
              )}
            </div>
            <div className="absolute right-4 top-4 hidden sm:block">
              <Image
                alt={title}
                className="h-12 w-12 opacity-40"
                src={logoUrl}
              />
            </div>
          </h2>
          <p className="my-3 text-sm sm:text-base pr-0 sm:pr-14">
            {description}
          </p>
          <div className="my-5 grid grid-cols-2 justify-between gap-2 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rouded-md flex flex-grow flex-col rounded-lg bg-gradient-to-b from-gray-400/40 px-3 py-3"
              >
                <span className="mb-1 text-xs uppercase tracking-wide">
                  {stat.label}
                </span>
                <span className="text-gray-600 text-xl">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="-mx-3 -mb-3 -mt-3 flex items-center justify-between p-3">
          <div>
            <button
              className="flex items-center gap-1 rounded-lg py-2 pl-2 pr-2 text-sm hover:bg-gray-600/60 sm:py-1 sm:pr-3 bg-gray-600/40"
              onClick={toggleHighlights}
            >
              {showHighlights ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <span className="hidden sm:inline-block">Highlights</span>
            </button>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            {links.map((link, index) => (
              <LinkPreview
                key={index}
                className="flex items-center gap-1 rounded-lg py-1 text-base transition-colors hover:font-bold sm:text-sm"
                url={link.url}
              >
                {link.icon ?? <BsGlobe />}
                <span className="hidden sm:inline-block">{link.label}</span>
              </LinkPreview>
            ))}
          </div>
        </div>
        {showHighlights && (
          <div className="-mx-3 -mb-3 mt-2 bg-gradient-to-b to-gray-900 p-3">
            <div className="flex items-center gap-2 sm:gap-0 justify-between sm:flex-row flex-row">
              <div className="relative flex flex-row items-center gap-2">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className={`rounded-full bg-gray-400 ${index === currentImageIndex ? "px-3 py-0.5" : "w-3 h-3"} text-sm`}
                  >
                    {index === currentImageIndex ? highlight.title : ""}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="rounded-lg bg-gray-300 p-1 hover:bg-gray-400"
                  onClick={() => updateIndex(currentImageIndex - 1)}
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="rounded-lg bg-gray-300 p-1 hover:bg-gray-400"
                  onClick={() => updateIndex(currentImageIndex + 1)}
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-row overflow-hidden">
              <Image
                alt={title}
                className="w-full rounded-lg"
                src={highlights[currentImageIndex].imageUrl}
              />
            </div>
          </div>
        )}
      </Card>
      {/* Modal for badge text details */}
      <Modal isOpen={isOpen} placement={"auto"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {badgeInfo?.title}
              </ModalHeader>
              <ModalBody>
                <p>{badgeInfo?.content}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default function ProjectShowcase({
  projects,
  moreProjects,
}: {
  projects: ProjectProps[];
  moreProjects: { title: string; url: string; description: string }[];
}) {
  return (
    <section>
      <h2 className="text-3xl mb-4">Projects</h2>
      <p className="mb-8">
        I have worked on a variety of projects over the years; some of them as a
        hobby, some as a proof of concept, and others to solve my own pain
        points. Here are some of the projects that I have worked on.
      </p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <h3 className="my-4">
          Here are some more projects that I have worked on. You can find the
          complete list of projects on my{" "}
          <LinkPreview
            className="font-medium underline decoration-2 underline-offset-2 transition-colors hover:font-bold"
            url="https://github.com/Tsounguinzo"
          >
            GitHub profile
          </LinkPreview>
        </h3>
        <div className="flex flex-col gap-1.5">
          {moreProjects.map((project, index) => (
            <LinkPreview
              key={index}
              className="flex flex-col flex-wrap items-start rounded-md bg-gray-300 bg-gradient-to-l from-background px-2 py-2 transition-colors hover:bg-gray-300/40 sm:flex-row sm:items-center"
              url={project.url}
            >
              <span className="flex items-center gap-2 font-medium">
                <BsArrowThroughHeartFill />
                {project.title}
              </span>
              <span className="mx-2 hidden sm:inline-block">-</span>
              <span className="text-base sm:text-lg">
                {project.description}
              </span>
            </LinkPreview>
          ))}
        </div>
      </div>
    </section>
  );
}
