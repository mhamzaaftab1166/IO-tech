import React from "react";
import Image from "next/image";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      imageUrl: "/OurMembers/cardImage.png",
      name: "Name Here",
      position: "Position Here",
    },
    {
      id: 2,
      imageUrl: "/OurMembers/cardImage.png",
      name: "Name Here",
      position: "Position Here",
    },
    {
      id: 3,
      imageUrl: "/OurMembers/cardImage.png",
      name: "Name Here",
      position: "Position Here",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-6 md:px-20 py-24 md:py-36 w-full bg-zinc-100">
      <div className="flex flex-col items-center w-full max-w-[1170px]">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none text-center text-yellow-950">
          Our Team
        </h2>
        <p className="mt-5 text-base md:text-lg font-medium leading-7 text-center opacity-70 text-stone-900 w-full md:w-[764px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="relative w-full mt-16 md:mt-20 flex justify-center items-center">
          <button className="cursor-pointer hidden md:flex absolute left-[-30px] sm:left-[-30px] top-1/2 transform -translate-y-1/2 z-10 p-2">
            <Image
              src="/OurMembers/leftArrow.png"
              alt="Left navigation arrow"
              width={13}
              height={13}
            />
          </button>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 w-full">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full md:w-[25%]">
                <TeamMember
                  imageUrl={member.imageUrl}
                  name={member.name}
                  position={member.position}
                />
              </div>
            ))}
          </div>

          <button className="cursor-pointer hidden md:flex absolute right-[-30px] sm:right-[-30px] top-1/2 transform -translate-y-1/2 z-10 p-2">
            <Image
              src="/OurMembers/rightArrow.png"
              alt="Right navigation arrow"
              width={13}
              height={13}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
