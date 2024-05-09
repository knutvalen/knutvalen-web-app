import { slugs } from "@/content/blog/data";

export type BlogPostMetadata = {
  title: string;
  author: string;
  published: Date;
  introduction: string;
  slug: keyof typeof slugs;
};
