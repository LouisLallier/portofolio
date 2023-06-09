import { Social } from "@/typing";

export const fetchSocials = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSocials`
  );
  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log("fetching", socials);
  return socials;
};
