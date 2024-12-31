import { Team } from "@/components/team/interfaces";
import Teams from "@/components/team/TeamsPage";

const mockTeams: Team[] = [
  {
    id: "6e7924f0-9bfe-45df-a873-69a4a1c91c61",
    title: "Development Team",
    teamMembers: [
      {
        priority: 1,
        role: "Team Lead / Full Stack Developer",
        member: {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice.smith@example.com",
          socialMediaLinks: {
            github: "https://github.com/alicesmith",
            linkedin: "https://linkedin.com/in/alicesmith",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=1",
        },
      },
      {
        priority: 2,
        role: "Frontend Developer",
        member: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          socialMediaLinks: {
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/john.doe",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=2",
        },
      },
      {
        priority: 3,
        role: "Backend Developer",
        member: {
          firstName: "Emily",
          lastName: "Brown",
          email: "emily.brown@example.com",
          socialMediaLinks: {
            github: "https://github.com/emilybrown",
            twitter: "https://twitter.com/emilyb",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=3",
        },
      },
    ],
  },
  {
    id: "2a44cc6b-89b7-41ab-afb0-a7e2906b95e3",
    title: "Design Team",
    teamMembers: [
      {
        priority: 1,
        role: "Lead Designer",
        member: {
          firstName: "Oscar",
          lastName: "Miller",
          email: "oscar.miller@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/oscarmiller",
            instagram: "https://instagram.com/oscar.designs",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=4",
        },
      },
      {
        priority: 2,
        role: "UX Researcher",
        member: {
          firstName: "Chloe",
          lastName: "Johnson",
          email: "chloe.johnson@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/chloejohnson",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=5",
        },
      },
      {
        priority: 3,
        role: "UI/Graphic Designer",
        member: {
          firstName: "Liam",
          lastName: "Garcia",
          email: "liam.garcia@example.com",
          socialMediaLinks: {
            instagram: "https://instagram.com/liamarts",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=6",
        },
      },
    ],
  },
  {
    id: "3d1a7e82-eaf1-4e9c-b9d6-d79adf74c915",
    title: "Marketing Team",
    teamMembers: [
      {
        priority: 1,
        role: "Marketing Manager",
        member: {
          firstName: "Sophia",
          lastName: "Wilson",
          email: "sophia.wilson@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/sophiawilson",
            twitter: "https://twitter.com/sophiamarketing",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=7",
        },
      },
      {
        priority: 2,
        role: "Content Strategist",
        member: {
          firstName: "Ethan",
          lastName: "Martin",
          email: "ethan.martin@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/ethanmartin",
            instagram: "https://instagram.com/ethancontent",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=8",
        },
      },
    ],
  },
  {
    id: "3d1a9e82-eaf1-4e9c-b9d6-d79adf74c915",
    title: "Test Team",
    teamMembers: [
      {
        priority: 1,
        role: "Marketing Manager",
        member: {
          firstName: "Sophia",
          lastName: "Wilson",
          email: "sophia.wilson@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/sophiawilson",
            twitter: "https://twitter.com/sophiamarketing",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=7",
        },
      },
      {
        priority: 2,
        role: "Content Strategist",
        member: {
          firstName: "Ethan",
          lastName: "Martin",
          email: "ethan.martin@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/ethanmartin",
            instagram: "https://instagram.com/ethancontent",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=8",
        },
      },
    ],
  },
  {
    id: "3d1a9e82-eaf1-4e9c-b9d6-d79adf74ca15",
    title: "Test Team 2",
    teamMembers: [
      {
        priority: 1,
        role: "Marketing Manager",
        member: {
          firstName: "Sophia",
          lastName: "Wilson",
          email: "sophia.wilson@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/sophiawilson",
            twitter: "https://twitter.com/sophiamarketing",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=7",
        },
      },
      {
        priority: 2,
        role: "Content Strategist",
        member: {
          firstName: "Ethan",
          lastName: "Martin",
          email: "ethan.martin@example.com",
          socialMediaLinks: {
            linkedin: "https://linkedin.com/in/ethanmartin",
            instagram: "https://instagram.com/ethancontent",
          },
        },
        teamMemberFile: {
          path: "https://picsum.photos/800/600?random=8",
        },
      },
    ],
  },
];

export default function TeamsPage() {
  return (
    <Teams teams={mockTeams} />
  );
}
