// "use client"

import { Main } from "@/app/composistions/Main";
import type { Viewport } from "next";

// type ViewportProps = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
//
// export const generateViewport = ({ params, searchParams }: ViewportProps): Viewport => {
//   console.log("params", params);
//   console.log("searchParams", searchParams);
//
//   return {
//     themeColor: 'blue'
//   }
// }

const Page = () => {
  // await new Promise((resolve) => setTimeout(resolve, 150000));
  return <Main />;
};

export default Page;
