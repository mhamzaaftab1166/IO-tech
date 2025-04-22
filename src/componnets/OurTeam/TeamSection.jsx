import React, { useEffect, useState } from "react";
import Image from "next/image";
import TeamMember from "./TeamMember";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOurTeams,
  resetTeamsState,
} from "@/store/features/OurTeam/teamSlice";

export default function TeamSection() {
  const dispatch = useDispatch();
  const { loading, teams, error } = useSelector((state) => state.ourTeams);
  console.log(teams);

  const [toast, setToast] = useState(null);

  useEffect(() => {
    dispatch(fetchOurTeams());
    return () => {
      dispatch(resetTeamsState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setToast({ type: "error", message: error });
    }
  }, [error]);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const renderSkeleton = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 w-full">
      {[1, 2, 3].map((n) => (
        <div key={n} className="w-full md:w-[25%] animate-pulse space-y-4">
          <div className="h-48 bg-gray-300 rounded-md" />
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      ))}
    </div>
  );

  const renderTeam = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 w-full">
      {teams.map((team) => {
        const image = `http://localhost:1337${
          team.imageUrl?.formats?.medium?.url || team.imageUrl?.url
        }`;

        return (
          <TeamMember
            key={team.id}
            imageUrl={image}
            name={team.name}
            position={team.position}
          />
        );
      })}
    </div>
  );

  return (
    <section className="relative flex flex-col justify-center items-center px-6 md:px-20 py-24 md:py-36 w-full bg-zinc-100">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow">
          {toast.message}
        </div>
      )}

      <div className="flex flex-col items-center w-full max-w-[1170px]">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none text-center text-yellow-950">
          Our Team
        </h2>
        <p className="mt-5 text-base md:text-lg font-medium leading-7 text-center opacity-70 text-stone-900 w-full md:w-[764px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="relative w-full mt-16 md:mt-20 flex justify-center items-center">
          <button className="hidden md:flex absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 p-2">
            <Image
              src="/OurMembers/leftArrow.png"
              alt="Left"
              width={13}
              height={13}
            />
          </button>

          {loading ? renderSkeleton() : renderTeam()}

          <button className="hidden md:flex absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 p-2">
            <Image
              src="/OurMembers/rightArrow.png"
              alt="Right"
              width={13}
              height={13}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
