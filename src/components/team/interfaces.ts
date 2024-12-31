// interfaces.ts

export interface SocialMediaLinks {
	github?: string;
	linkedin?: string;
	instagram?: string;
	twitter?: string;
  }
  
  export interface Member {
	firstName: string;
	lastName: string;
	email: string;
	socialMediaLinks: SocialMediaLinks;
  }
  
  export interface TeamMember {
	priority: number;
	role: string;
	member: Member;
	teamMemberFile: {
	  path: string;
	};
  }
  
export interface Team {
	id:string;
	title: string;
	teamMembers: TeamMember[];
  }
  