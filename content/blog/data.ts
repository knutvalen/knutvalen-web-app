import { Viper } from "@/content/blog/viper/Viper";
import { BlogPostMetadata } from "@/app/types/BlogPostMetadata";
import { StyledComponents } from "@/content/blog/styledComponents/StyledComponents";

export const slugs = {
  "viper-architecture": Viper,
  "styled-components": StyledComponents,
};

export const metadataForBlogPosts: BlogPostMetadata[] = [
  {
    title: "Styled Components with Next.js and TypeScript",
    author: "Knut Valen",
    published: new Date(2024, 4, 12),
    introduction:
      "Get started with Styled Components in your React web app using Next.js.",
    slug: "styled-components",
  },
  {
    title: "VIPER architecture in iOS",
    author: "Knut Valen",
    published: new Date(2019, 10, 9),
    introduction: "Learn how to use clean architecture for your iOS apps.",
    slug: "viper-architecture",
  },
];
