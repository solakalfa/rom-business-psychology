// ========================================
// TEAM DATA - Ready for Sanity Integration
// ========================================

// TODO: Import Sanity client when ready
// import { sanityClient } from '../lib/sanity';

// Hardcoded data (will be replaced with Sanity fetch)
const TEAM_DATA = {
  eldad: {
    id: "eldad",
    name: "Eldad Rom (Ph.D.)",
    role: "Founder & CEO",
    image: "/team/dreldadrom.jpeg",
    email: "eldad@rompsyc.com",
    bio: `Eldad is the owner of ROM Business Psychology. He is a certified psychologist and has extensive experience in leadership and organizational development.

More than 20 years ago Eldad has founded ROM Business Psychology LTD, a consultancy boutique firm that specializes in high tech enterprises and startups as well as pharmaceutical and bio-tech companies. In addition to being focused on fieldwork, Eldad is also vested in the academia. Namely, he served as a senior professor and faculty member, founded and headed programs for group facilitators and experiential learning. In addition to that, for the past several years, Eldad serves as a partner and group's psychologist at Team8 venture capital.

In his work Eldad is fully committed to apply simple, practical, and concrete solutions for leaders and teams. He holds a thorough managerial experience and a profound knowledge for guiding executives and teams throughout their present and future challenges.`
  },

  david: {
    id: "david",
    name: "David Segal (Ph.D.)",
    role: "Clinical Psychologist",
    image: "/team/dr-david-segal.jpg",
    email: "david@rompsyc.com",
    bio: `David is a licensed clinical psychologist and an organizational consultant specializes in executive coaching and family business consultation. In his work David integrate his vast clinical experience with extensive knowledge and experience working with numerous organizations. He is focused in providing management consultation for a variety of managerial levels from mid to high rank executives.

In addition to his professional work, David is a senior faculty member at the School of Behavioral Sciences at the College of Management Academic Studies. He is teaching graduate courses in psychology, organizational consulting, and family studies.`
  },

  ganit: {
    id: "ganit",
    name: "Ganit Rainer Sassover (M.A.)",
    role: "Group Facilitator & Executive Coach",
    image: "/team/Ganit.jpg",
    email: "ganit@rompsyc.com",
    bio: `Ganit is an experienced executive coach and workshop facilitator. She holds a master's degree in Labor Studies and a certified expert coach diploma.

Ganit assists leaders in promoting and developing their personal effectiveness and managerial skills.

In her work, Ganit is committed to utilizing practical personal and interpersonal tools for optimizing leaders' growth potential. She assists leaders in effectively coping with their managerial dilemmas as well as promoting their careers.

Prior to joining Rom Business Psychology, Ganit held several managerial HR positions in online high tech and growing startup companies. Ganit is also a faculty member at the Adler Institute.`
  },

  netta: {
    id: "netta",
    name: "Netta Gefen (M.A.)",
    role: "Organizational Consultant",
    image: "/team/Netta-Gefen-Organizational-consultant.jpg",
    email: "",
    bio: `Netta is an Organizational Consultant, with experience in personal & organizational development. Netta specializes in managers consulting and group facilitation.

She held several managerial positions in a global hi-tech company, leading teams & projects to success.

She is a certified group facilitator with vast experience in organizational & personal development. In her work, Netta facilitate people & teams to go beyond and fulfill their highest potential, in a practical & profound way.`
  },

  meital: {
    id: "meital",
    name: "Meital Drezner - Maimon (M.A.)",
    role: "Organizational Consultant",
    image: "/team/meital.jpg",
    email: "meital@rompsyc.com",
    bio: `Meital is an organizational consultant, with experience in personal and organizational development.

Meital specializes in executive consulting and groups facilitation. She holds a master's degree in counselling and organizational development.

Meital has previous experience as a senior attorney in a large law-firm and has a thorough understanding of the unique organizational characteristics of professional services companies.

In her work, Meital assists organizations and managers acquire new skills and habits, in order to improve organizational work processes and individual management capabilities.`
  },

  anat: {
    id: "anat",
    name: "Anat Frishman (M.A.)",
    role: "Organizational Consultant",
    image: "/team/anat-1.jpg",
    email: "anat@rompsyc.com",
    bio: `Anat is an organizational consultant with experience in leading personal organizational development processes.

Prior to joining Rom Business Psychology Anat held several leadership positions in global company, leading people, teams, and organizational processes that enhanced personal and organizational effectiveness.

In her work, Anat strives to enable people in expressing their unique skills and growth potential.`
  },

  edna: {
    id: "edna",
    name: "Edna Arbel (M.A.)",
    role: "Organizational Consultant, Executive Coach & Group Facilitator",
    image: "/team/עדנה-ארבל.jpg",
    email: "edna@rompsyc.com",
    bio: `Edna has more than 18 years of professional experience with organizational development and management.

Prior to joining Rom Business Psychology, Edna held several managerial positions in the US and Israel and provided consultation to companies in the private sector in a variety of industries – High-Tech, Real Estate, Diamonds and more.

In her work, Edna specializes in executive coaching and workshops facilitation, focusing on management skills training and team building. In addition, she assists consultees in forwarding their career, and promoting their growth and effectiveness.

Her work is driven by an emphasis on interpersonal and analytical skills, applying processes that are both focused and results oriented.

Edna is experienced with global organizations and teams, and currently works mainly with global High-Tech enterprises.

She facilitates workshops and executive coaching programs in both English and Hebrew.

Edna holds a Master's Degree in Counseling and Organizational Development (summa cum laude) and a Bachelor's Degree in Behavioral Science, specializing in Organizational Behavior (graduated with honors).`
  }
};


// ========================================
// Functions - Switch to Sanity when ready
// ========================================

/**
 * Get all team members
 * TODO: Replace with Sanity query:
 * const query = `*[_type == "teamMember"]{id, name, role, "image": image.asset->url, email, bio}`;
 * return await sanityClient.fetch(query);
 */
export async function getTeamMembers() {
  // TEMP: Return hardcoded data
  return TEAM_DATA;
  
  // SANITY VERSION (uncomment when ready):
  // const query = `*[_type == "teamMember"] | order(order asc) {
  //   "id": slug.current,
  //   name,
  //   role,
  //   "image": image.asset->url,
  //   email,
  //   bio
  // }`;
  // const members = await sanityClient.fetch(query);
  // return members.reduce((acc, member) => {
  //   acc[member.id] = member;
  //   return acc;
  // }, {});
}

/**
 * Get single team member by ID
 * TODO: Replace with Sanity query when ready
 */
export async function getTeamMember(id) {
  // TEMP: Return hardcoded data
  return TEAM_DATA[id] || null;
  
  // SANITY VERSION (uncomment when ready):
  // const query = `*[_type == "teamMember" && slug.current == $id][0]{
  //   "id": slug.current,
  //   name,
  //   role,
  //   "image": image.asset->url,
  //   email,
  //   bio
  // }`;
  // return await sanityClient.fetch(query, { id });
}

// Export hardcoded data for now (remove when using Sanity)
export const teamMembers = TEAM_DATA;
