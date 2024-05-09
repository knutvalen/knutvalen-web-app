import { Post } from "@/app/composistions/Post";
import { getMetadata, Props } from "@/app/api/BlogApi";

export const revalidate = 3600;

const Page = ({ params }: { params: { slug: Props["slug"] } }) => {
  const metadata = getMetadata({ slug: params.slug });
  return <Post metadata={metadata} />;
};

export default Page;
