import { PageInfo } from "@/typing";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  console.log("fetching", pageInfo);
  return pageInfo;
};
