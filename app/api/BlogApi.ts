import { metadataForBlogPosts, slugs } from "@/content/blog/data";
import { BlogPostMetadata } from "@/app/models/BlogPostMetadata";

export interface Props {
  slug: keyof typeof slugs;
}

export const getMetadataForAllBlogPosts = () => metadataForBlogPosts;

export const getMetadata = ({ slug }: Props): BlogPostMetadata => {
  const post = metadataForBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    throw new Error(`Could not find any blog posts with the slug: ${slug}`);
  }

  return post;
};

export const getBlogPostComponent = ({ slug }: Props) => slugs[slug];
