import { Experience } from "@/typing";

export const fetchExperience = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperience`
  );
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  console.log("fetching", experiences);
  return experiences;
};
