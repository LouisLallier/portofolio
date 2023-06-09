import { Project } from "@/typing";

export const fetchProjects = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;

  console.log("fetching", projects);
  return projects;
};
