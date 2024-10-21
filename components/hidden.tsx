"use client";

import { ReactNode, useState } from "react";
import { PiFinnTheHumanDuotone } from "react-icons/pi";

const Hidden = ({ content }: { content: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <span className="text-lg">
      {!isVisible ? (
        <PiFinnTheHumanDuotone
          className="inline hover:cursor-help transition-transform duration-300 hover:scale-110"
          size={24}
          onClick={handleClick}
        />
      ) : (
        <span className="inline animate-fadeIn text-primary animate-bg-fade p-1 rounded-md">{content}</span>
      )}
    </span>
  );
};

export default Hidden;
