import React from 'react';

type TeamMemberCardProps = {
  name: string;
  title: string;
  photoSrc: string;            // e.g., "/images/team/donnell.webp"
  photoAlt: string;
  objectPosition?: string;     // e.g., "50% 30%" to nudge crop vertically
  children?: React.ReactNode;  // description
};

export default function TeamMemberCard({
  name,
  title,
  photoSrc,
  photoAlt,
  objectPosition = "50% 30%",
  children
}: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
      {/* Fixed 4:3 ratio wrapper */}
      <div className="relative w-full overflow-hidden rounded-t-xl" style={{ paddingTop: "75%" }}>
        <img
          src={photoSrc}
          alt={photoAlt}
          width={1200}
          height={900}
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Existing card body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 text-center">{name}</h3>
        <p className="text-[#049704] font-medium mb-4 text-center">{title}</p>
        {children}
      </div>
    </div>
  );
}