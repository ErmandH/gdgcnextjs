"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import MemberCard from "./MemberCard";
import { HeroSection } from "../common/HeroSection";
import { Team } from "./interfaces";



export default function Teams({teams}: {teams:Team[]}) {
  const [activeTeam, setActiveTeam] = useState(teams[0].id);

  return (
    <>
		<HeroSection title="Ekibimiz" />
      <div className="mx-auto max-w-7xl rounded-lg border bg-white shadow-sm my-8">
        <div className="flex flex-col md:flex-row">
          {/* Vertical Tabs */}
          <div className="w-full border-b md:w-64 md:border-b-0 md:border-r">
            <nav className="flex overflow-x-auto md:flex-col md:overflow-visible">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => setActiveTeam(team.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50",
                    activeTeam === team.id
                      ? "border-b-2 border-blue-500 bg-blue-50/50 text-blue-500 md:border-b-0 md:border-r-2"
                      : "text-gray-600"
                  )}
                >
                  {team.title}
                  <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-600">
                    {team.teamMembers.length}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {teams.find((t) => t.id === activeTeam)?.title}
              </h2>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {teams.find((t) => t.id === activeTeam)?.teamMembers.length}{" "}
                  members
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {teams
                .find((t) => t.id === activeTeam)
                ?.teamMembers.map((member) => (
                  <MemberCard key={member.priority} teamMember={member} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
