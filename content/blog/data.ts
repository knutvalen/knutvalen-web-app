import { Viper } from "@/content/blog/viper/Viper";
import { BlogPostMetadata } from "@/app/types/BlogPostMetadata";
import { ReactAndStyledComponents } from "@/content/blog/reactAndStyledComponents/ReactAndStyledComponents";

export const slugs = {
  "viper-architecture-in-iOS": Viper,
  "styled-components-in-react-with-next": ReactAndStyledComponents,
};

export const metadataForBlogPosts: BlogPostMetadata[] = [
  // {
  //   title: "Using Styled Components with Next.js",
  //   author: "Knut Valen",
  //   published: new Date(2024, 4, 9),
  //   introduction: "Get started with Styled Components in your React web app using Next.js.",
  //   slug: "styled-components-in-react",
  // },
  {
    title: "How to use the VIPER architecture in iOS",
    author: "Knut Valen",
    published: new Date(2019, 10, 9),
    introduction: "Learn to use clean architecture for your iOS apps.",
    slug: "viper-architecture-in-iOS",
  },
];
