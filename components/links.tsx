import { ReactNode } from "react";

type Node = {
  name: string;
  description?: string;
  url: string;
  icon: ReactNode;
};

type LinksProps = {
  heading: string;
  links: Node[];
  moreInfo?: {
    name: string;
    href: string;
  };
};

export default function Links({ heading, links, moreInfo }: LinksProps) {
  return (
    <div className="w-full py-8 space-y-6">
      {/* Heading */}
      <h2 className="text-gray-600 text-sm font-semibold tracking-wide">
        {heading.toUpperCase()}
      </h2>
      {/* Links */}
      <ul className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            className="flex justify-between items-baseline pb-4 group transition-colors"
            href={link.url}
          >
            <div>
              <p className="text-lg group-hover:text-primary">{link.name}</p>
              {link.description && (
                <p className="text-gray-500 text-sm group-hover:text-primary">
                  {link.description}
                </p>
              )}
            </div>
            <p className="w-full h-full border-b border-dashed border-gray-400 group-hover:border-primary mx-3" />
            <span className="group-hover:text-primary">{link.icon}</span>
          </a>
        ))}
      </ul>
      {/* (Optional) */}
      {moreInfo && (
        <div className="text-center">
          <a
            className="text-gray-800 text-sm hover:underline"
            href={moreInfo.href}
          >
            {`${moreInfo.name} →`}
          </a>
        </div>
      )}
    </div>
  );
}
