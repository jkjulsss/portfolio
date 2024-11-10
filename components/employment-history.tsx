"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Card,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { PiFinnTheHumanDuotone } from "react-icons/pi";

export type EmploymentProps = {
  location: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  badgeText?: string;
  description: string;
  tags: string[];
  additionalInfo?: string[];
  badgeInfo?: {
    title: string;
    content: string[];
  };
};

const EmploymentCard = ({
  location,
  title,
  company,
  startDate,
  endDate,
  badgeText,
  description,
  tags,
  additionalInfo,
  badgeInfo,
}: EmploymentProps) => {
  const {
    isOpen: isBadgeModalOpen,
    onOpen: onBadgeModalOpen,
    onOpenChange: onBadgeModalOpenChange,
  } = useDisclosure();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  return (
    <>
      <Card className="bg-background text-black p-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">{location}</div>
          <div className="text-sm">
            {startDate} — {endDate}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            {title} <span className="font-normal">at {company}</span>
          </h3>
          {badgeText && badgeInfo && (
            <Button
              className="w-fit h-fit p-1.5 text-green-600 border-2 border-green-600 border-dotted bg-background hover:border-green-500 hover:text-green-500"
              onPress={onBadgeModalOpen}
            >
              {badgeText}
            </Button>
          )}
        </div>
        <p className="mb-4 text-medium">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="w-fit h-fit px-1.5 text-sm border-2 border-primary-500 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        {additionalInfo && (
          <>
            <Button
              className={`flex items-center justify-center bg-primary-300 px-1 mb-2 text-sm font-normal transition-colors hover:bg-primary-400 hover:font-bold hover:opacity-100 w-full py-2 sm:py-1.5 ${showAdditionalInfo ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-background`}
              onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}
            >
              <PiFinnTheHumanDuotone size={24} />
              {showAdditionalInfo ? "Hide" : "Show"} additional info
            </Button>
            <div className={`inline ${showAdditionalInfo ? "" : "hidden"}`}>
              <ul className="flex flex-col gap-1">
                {additionalInfo.map((info, index) => (
                  <li
                    key={index}
                    className="bg-primary-100 px-1 font-normal bg-gradient-to-l from-background py-2 sm:py-1.5 rounded-md"
                  >
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Card>
      {/* Modal for badge text details */}
      <Modal
        backdrop="blur"
        className="bg-background"
        isOpen={isBadgeModalOpen}
        placement={"auto"}
        onOpenChange={onBadgeModalOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {badgeInfo?.title}
              </ModalHeader>
              <ModalBody>
                {badgeInfo?.content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
                ;
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

export default function EmploymentHistory({
  employments,
}: {
  employments: EmploymentProps[];
}) {
  return (
    <div className="">
      <h2 className="text-3xl mb-4">Employment History</h2>
      <p className="mb-8">
        I have been fortunate to work with some amazing teams. I did two
        internships with Straumann group but also as a teacher assistant at
        Concordia University. Here is a brief overview of my employment history.
      </p>
      <div>
        {employments.map((employment, index) => (
          <EmploymentCard key={index} {...employment} />
        ))}
      </div>
    </div>
  );
}
