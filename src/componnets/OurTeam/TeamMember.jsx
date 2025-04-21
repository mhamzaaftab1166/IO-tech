import React from "react";
import Image from "next/image";

const TeamMember = ({ imageUrl, name, position }) => {
  const iconPaths = [
    "/OurMembers/wp.png",
    "/OurMembers/caller.png",
    "/OurMembers/mail.png",
  ];

  return (
    <article className="flex flex-col grow items-center text-center max-md:mt-8 max-w-[270px] w-full">
      <Image
        src={imageUrl}
        alt={`${name} - ${position}`}
        width={270}
        height={250}
        className="rounded-xl w-full h-auto object-contain"
      />
      <h3 className="mt-5 text-2xl font-medium leading-none text-yellow-950">
        {name}
      </h3>
      <p
        className="mt-2.5 text-sm font-bold leading-7 uppercase tracking-[2px]"
        style={{ color: "rgba(21, 20, 57, 0.4)" }}
      >
        {position}
      </p>

      <div className="flex gap-4 mt-4 cursor-pointer">
        {iconPaths.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            width={18}
            height={18}
            className="object-contain"
          />
        ))}
      </div>
    </article>
  );
};

export default TeamMember;
