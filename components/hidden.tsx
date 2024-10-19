"use client";

import {ReactNode, useState} from "react";
import {PiFinnTheHumanDuotone} from "react-icons/pi";

const Hidden = ({content}: { content: ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    };

    return (
        <span className="text-lg">
            {!isVisible ? (
                <PiFinnTheHumanDuotone size={24}
                                       className="inline hover:cursor-help transition-transform duration-300 hover:scale-110"
                                       onClick={handleClick}
                />
            ) : (
                <span className="inline animate-fadeIn text-primary">{content}</span>
            )}
    </span>
    );
};

export default Hidden;
