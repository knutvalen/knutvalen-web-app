"use client";

import styled, { css } from "styled-components";
import NextLink from "next/link";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import { StyledCode } from "@/app/components/StyledCode";
import { CodeWrapper } from "@/app/composistions/CodeWrapper";
import {
  codeBlock1,
  codeBlock10,
  codeBlock11,
  codeBlock12,
  codeBlock13,
  codeBlock14,
  codeBlock2,
  codeBlock3,
  codeBlock4,
  codeBlock5,
  codeBlock6,
  codeBlock7,
  codeBlock8,
  codeBlock9,
} from "@/content/blog/styledComponents/codeBlocks";
import { useState } from "react";
import { Button } from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Heading2 = styled(StyledHeading2)`
  padding: 16px 0;
`;

const Paragraph = styled(StyledParagraph)`
  padding-bottom: 16px;
`;

const InlineCode = styled(StyledCode)`
  padding: 0 4px;
`;

const CodeBlock = styled(StyledCode)`
  padding: 8px;
  flex: 1;
`;

const StyledLink = styled(NextLink)`
  display: inline-block;
  color: inherit;
`;

const StyledButton = styled(Button)`
  margin-bottom: 16px;
`;

const demo = css`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey[200]};
  padding: 8px;
  margin-bottom: 16px;
`;

const Demo1 = styled(StyledParagraph)`
  ${demo}
`;

const Demo2 = styled(Demo1)`
  color: ${(props) => props.theme.colors.primary.normal};
`;

const Demo3Wrapper = styled.div`
  ${demo}
`;

const Demo3Paragraph = styled(StyledParagraph)<{ $isPrimaryColored: boolean }>`
  color: ${(props) =>
    props.$isPrimaryColored
      ? props.theme.colors.primary.normal
      : props.theme.colors.grey[500]};
`;

export const StyledComponents = () => {
  const [isPrimaryColored, togglePrimaryColored] = useState(false);
  const router = useRouter();

  return (
    <Wrapper>
      <Paragraph>
        <StyledLink href={"https://styled-components.com"}>
          Styled Components
        </StyledLink>{" "}
        is a CSS-in-JS solution where every style is also a{" "}
        <StyledLink href={"https://react.dev"}>React</StyledLink> component. I
        absolutely love working with it, and I&apos;ll show you how you can get
        started with it in your{" "}
        <StyledLink href={"https://nextjs.org"}>Next.js</StyledLink> web app
        using{" "}
        <StyledLink href={"https://nextjs.org/docs/app"}>App Router</StyledLink>{" "}
        and{" "}
        <StyledLink href={"https://www.typescriptlang.org"}>
          TypeScript
        </StyledLink>
        .
      </Paragraph>
      <Heading2>Install it</Heading2>
      <Paragraph>Install the dependency:</Paragraph>
      <CodeWrapper title={"terminal"} copy={"npm install styled-components"}>
        <CodeBlock>npm install styled-components</CodeBlock>
      </CodeWrapper>
      <Heading2>Configure it</Heading2>
      <Paragraph>
        Configure the Next.js compiler to use Styled Components:
      </Paragraph>
      <CodeWrapper title={"next.config.mjs"} copy={codeBlock1}>
        <CodeBlock>{codeBlock1}</CodeBlock>
      </CodeWrapper>
      <Paragraph>Create a registry component:</Paragraph>
      <CodeWrapper title={"app/Registry.tsx"} copy={codeBlock2}>
        <CodeBlock>{codeBlock2}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        Use the registry component in your root layout file:
      </Paragraph>
      <CodeWrapper title={"app/layout.tsx"} copy={codeBlock3}>
        <CodeBlock>{codeBlock3}</CodeBlock>
      </CodeWrapper>
      <Heading2>Use it</Heading2>
      <Paragraph>Open a page file and use some Styled Components:</Paragraph>
      <CodeWrapper title={"app/page.tsx"} copy={codeBlock4}>
        <CodeBlock>{codeBlock4}</CodeBlock>
      </CodeWrapper>
      <Paragraph>Let&apos;s run the app:</Paragraph>
      <CodeWrapper title={"terminal"} copy={"npm run dev"}>
        <CodeBlock>npm run dev</CodeBlock>
      </CodeWrapper>
      <Paragraph>This will output to:</Paragraph>
      <Demo1>Hello, Styled Components!</Demo1>
      <Paragraph>
        This is server-rendered as static content using{" "}
        <StyledLink
          href={
            "https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default"
          }
        >
          Static Rendering
        </StyledLink>{" "}
        because we&apos;re not using any dynamic functions or uncached data. We
        can verify it&apos;s statically rendered by building the app with:
      </Paragraph>
      <CodeWrapper title={"terminal"} copy={"npm run build"}>
        <CodeBlock>npm run build</CodeBlock>
      </CodeWrapper>
      <Paragraph>You&apos;ll get an output like:</Paragraph>
      <CodeWrapper title={"terminal"} copy={codeBlock5}>
        <CodeBlock $isOutput>{codeBlock5}</CodeBlock>
      </CodeWrapper>
      <Heading2>Theme it</Heading2>
      <Paragraph>Create a theme:</Paragraph>
      <CodeWrapper title={"app/theme.ts"} copy={codeBlock6}>
        <CodeBlock>{codeBlock6}</CodeBlock>
      </CodeWrapper>
      <Paragraph>Create a global style:</Paragraph>
      <CodeWrapper title={"app/GlobalStyle.ts"} copy={codeBlock7}>
        <CodeBlock>{codeBlock7}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        Create a theme provider and use the theme and global style:
      </Paragraph>
      <CodeWrapper title={"app/ThemeProvider.tsx"} copy={codeBlock8}>
        <CodeBlock>{codeBlock8}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        Use the <InlineCode>ThemeProvider</InlineCode> in your root layout file:
      </Paragraph>
      <CodeWrapper title={"app/layout.tsx"} copy={codeBlock9}>
        <CodeBlock>{codeBlock9}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        We want type safety for our theme, since we&apos;re using TypeScript. So
        let&apos;s{" "}
        <StyledLink
          href={
            "https://styled-components.com/docs/api#create-a-declarations-file"
          }
        >
          add a declarations file
        </StyledLink>
        :
      </Paragraph>
      <CodeWrapper title={"app/styled.d.ts"} copy={codeBlock13}>
        <CodeBlock>{codeBlock13}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        Now that we have our theme available through Styled Components, we can
        for example apply a background color to the{" "}
        <InlineCode>body</InlineCode> tag:
      </Paragraph>
      <CodeWrapper title={"app/GlobalStyle.ts"} copy={codeBlock10}>
        <CodeBlock>{codeBlock10}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        Or maybe we want our paragraph to have our theme&apos;s primary color:
      </Paragraph>
      <CodeWrapper title={"app/page.tsx"} copy={codeBlock11}>
        <CodeBlock>{codeBlock11}</CodeBlock>
      </CodeWrapper>
      <Paragraph>This will output to:</Paragraph>
      <Demo2>Hello, Styled Components!</Demo2>
      <Paragraph>
        We can even pass state to our Styled Components. For example when we
        click a button, the paragraph toggles between our theme&apos;s primary
        color and a grey color:
      </Paragraph>
      <CodeWrapper title={"app/page.tsx"} copy={codeBlock12}>
        <CodeBlock>{codeBlock12}</CodeBlock>
      </CodeWrapper>
      <Paragraph>Try this interactive output:</Paragraph>
      <Demo3Wrapper>
        <Demo3Paragraph $isPrimaryColored={isPrimaryColored}>
          Hello, Styled Components!
        </Demo3Paragraph>
        <button onClick={() => togglePrimaryColored(!isPrimaryColored)}>
          Toggle
        </button>
      </Demo3Wrapper>
      <Heading2>Conclusion</Heading2>
      <Paragraph>
        We successfully got started using Styled Components by installing,
        configuring, using and theming it in our Next.js React app using App
        Router and TypeScript. We verified that Styled Components can be
        statically rendered on the server, which is good for performance. This
        website is actually built using Styled Components, and it&apos;s a
        public repository at GitHub. If you want to dig deeper into Styled
        Components usage I&apos;d recommend exploring that repository,
        especially the <InlineCode>StyledButton</InlineCode> and{" "}
        <InlineCode>Button</InlineCode> components. Click the button below to go
        to the repository on GitHub:
      </Paragraph>
      <StyledButton
        size={"small"}
        variant={"outlined"}
        onClick={() =>
          router.push("https://github.com/knutvalen/knutvalen-web-app")
        }
      >
        Repo on GitHub
      </StyledButton>
      <Paragraph>
        You can also dig deeper into the documentation for Styled Components:
      </Paragraph>
      <StyledButton
        size={"small"}
        variant={"outlined"}
        onClick={() =>
          router.push(
            "https://styled-components.com/docs/basics#getting-started",
          )
        }
      >
        Styled Components docs
      </StyledButton>
      <Paragraph>
        Before we applied our theme we verified it was server-rendered using
        Static Rendering. Is it still statically rendered after applying our
        theme? Yes it is. Just verify it by using{" "}
        <InlineCode>npm run build</InlineCode>:
      </Paragraph>
      <CodeWrapper title={"terminal"} copy={codeBlock14}>
        <CodeBlock $isOutput>{codeBlock14}</CodeBlock>
      </CodeWrapper>
    </Wrapper>
  );
};
