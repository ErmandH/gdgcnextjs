import React from "react";
import { TeamMember } from "../interfaces";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

interface TeamMemberCardProps {
  teamMember: TeamMember;
}

const MemberCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {
  const { member, role, teamMemberFile } = teamMember;
  const { firstName, lastName, email, socialMediaLinks } = member;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Resim */}
      <img
        src={teamMemberFile.path}
        alt={`${firstName} ${lastName}`}
        className="w-full h-64 object-cover"
      />
      {/* İçerik */}
      <div className="p-4 text-center">
        {/* İsim */}
        <h4 className="text-lg font-semibold text-gray-900">
          {firstName} {lastName}
        </h4>
        {/* Rol */}
        <p className="text-sm text-gray-600">{role}</p>
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-4 mt-3">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialMediaLinks.instagram && (
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {socialMediaLinks.twitter && (
            <a
              href={socialMediaLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="block mt-3 text-blue-600 hover:underline text-sm"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
