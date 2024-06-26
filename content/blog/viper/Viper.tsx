"use client";

import styled from "styled-components";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import viperDiagram from "@/content/blog/viper/Viper-diagram.png";
import giphy from "@/content/blog/viper/giphy.gif";
import directoryStructure from "@/content/blog/viper/directoryStructure.png";
import viewStructureImage from "@/content/blog/viper/viewStructureImage.png";
import testsStructureImage from "@/content/blog/viper/testsStructureImage.png";
import testCoverageImage from "@/content/blog/viper/testCoverageImage.png";
import NextImage from "next/image";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledCode } from "@/app/components/StyledCode";
import { StyledUnorderedList } from "@/app/components/StyledUnorderedList";
import { StyledListItem } from "@/app/components/StyledListItem";
import { CodeWrapper } from "@/app/composistions/CodeWrapper";
import {
  codeBlock1,
  codeBlock10,
  codeBlock11,
  codeBlock12,
  codeBlock13,
  codeBlock14,
  codeBlock15,
  codeBlock16,
  codeBlock2,
  codeBlock3,
  codeBlock4,
  codeBlock5,
  codeBlock6,
  codeBlock7,
  codeBlock8,
  codeBlock9,
} from "@/content/blog/viper/codeBlocks.";

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

const ImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px;
  }
`;

const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
`;

const DemoImageWrapper = styled(ImageWrapper)`
  width: 50%;
  align-self: center;
`;

const UnorderedList = styled(StyledUnorderedList)`
  padding-bottom: 16px;
`;

const InlineCode = styled(StyledCode)`
  padding: 0 4px;
`;

const CodeBlock = styled(StyledCode)`
  padding: 8px;
  flex: 1;
`;

export const Viper = () => {
  return (
    <Wrapper>
      <Paragraph>
        VIPER is an implementation of clean architecture for iOS. This
        architectural pattern differs from the more commonly known patterns like
        MVC, MVVM and MVP in that a module is split into five different parts -
        each with its own specific responsibility. These are: View, Interactor,
        Presenter, Entity and Router.
      </Paragraph>
      <ImageWrapper>
        <Image
          src={viperDiagram}
          alt={"Diagram of the Viper architecture."}
          priority
        />
      </ImageWrapper>
      <Paragraph>
        We are now going to learn how to use the VIPER architecture for iOS by
        going through a fully working example.
      </Paragraph>
      <Heading2>Implementation</Heading2>
      <Paragraph>
        The entire code we will be going through is available at GitHub, but you
        can read along here without checking it out. You can clone it with
      </Paragraph>
      <CodeWrapper
        title={"terminal"}
        copy={"git clone https://github.com/knutvalen/VIPER-architecture.git"}
      >
        <CodeBlock>
          git clone https://github.com/knutvalen/VIPER-architecture.git
        </CodeBlock>
      </CodeWrapper>
      <Paragraph>
        The app is simple. It shows information about the light side and the
        dark side of the Star Wars universe. It has a navigation bar that you
        can navigate to the other side using buttons to go back and forth
        between the view controllers.
      </Paragraph>
      <DemoImageWrapper>
        <Image src={giphy} alt={"Demo of the app."} unoptimized />
      </DemoImageWrapper>
      <Paragraph>
        We have two VIPER modules in our app: the light-side screen and the
        dark-side screen. In our <InlineCode>LightSideScreen</InlineCode> module
        we have a file called{" "}
        <InlineCode>LightSideScreenTypes.swift</InlineCode> and a folder for
        each of the VIPER parts of our module - View, Interactor, Presenter,
        Entity and Router. Inside our{" "}
        <InlineCode>LightSideScreenTypes.swift</InlineCode> file we have defined
        a protocol for each VIPER part:
      </Paragraph>
      <CodeWrapper title={"LightSideScreenTypes.swift"} copy={codeBlock1}>
        <CodeBlock>{codeBlock1}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        I like to call these protocols “types” because they define what a type
        of each VIPER part should implement. Here you can see that:
      </Paragraph>
      <UnorderedList>
        <StyledListItem>View reference to the Presenter</StyledListItem>
        <StyledListItem>
          Interactor reference to the Entity and the web service
        </StyledListItem>
        <StyledListItem>
          Presenter reference to View, the Interactor and the Router
        </StyledListItem>
        <StyledListItem>
          Entity reference to the models or data structures
        </StyledListItem>
        <StyledListItem>
          Router has a <InlineCode>create()</InlineCode> function
        </StyledListItem>
      </UnorderedList>
      <ImageWrapper>
        <Image
          alt={"Directory structure showing the Viper architecture."}
          src={directoryStructure}
        />
      </ImageWrapper>
      <Paragraph>
        These are the key aspects for a VIPER module. There are more going on in
        these protocols that we will look into later, but for now this is all we
        need to know about the types to understand the basics of VIPER.
      </Paragraph>
      <Heading2>Router</Heading2>
      <Paragraph>
        The Router is responsible for navigating to other modules and acts as
        the single point of routing between its VIPER module and other VIPER
        modules. Between VIPER modules only the Routers are directly connected
        to each other. Now, let’s look at the Router implementation in{" "}
        <InlineCode>LightSideScreenRouter.swift</InlineCode>.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenRouter.swift"} copy={codeBlock2}>
        <CodeBlock>{codeBlock2}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        All VIPER parts have its own type, and here you can see that the{" "}
        <InlineCode>LightSideScreenRouter</InlineCode> inherits from the{" "}
        <InlineCode>LightSideScreenRouterType</InlineCode>. In the{" "}
        <InlineCode>create()</InlineCode> function of the{" "}
        <InlineCode>LightSideScreenRouter</InlineCode> the VIPER module is wired
        up and returns its View.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenRouter.swift"} copy={codeBlock3}>
        <CodeBlock>{codeBlock3}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        We can now use this module as our initial screen by configuring it in
        the <InlineCode>SceneDelegate</InlineCode>. Opening the{" "}
        <InlineCode>SceneDelegate</InlineCode> at the project root level we can
        find the <InlineCode>scene(_:willConnectTo:options:)</InlineCode>{" "}
        function.
      </Paragraph>
      <CodeWrapper title={"SceneDelegate.swift"} copy={codeBlock4}>
        <CodeBlock>{codeBlock4}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        This is where we use our Router’s <InlineCode>create()</InlineCode>{" "}
        function as the root view controller for the app’s navigation
        controller.
      </Paragraph>
      <Heading2>View</Heading2>
      <Paragraph>
        The next VIPER part we will look into is the View. The View is
        responsible for showing whatever the Presenter tells it to and it is
        responsible for passing events like button clicks to the Presenter. The
        View implementation is under the folder{" "}
        <InlineCode>Screens/LightSideScreen/View</InlineCode>.
      </Paragraph>
      <ImageWrapper>
        <Image
          alt={"Directory structure showing the View structure."}
          src={viewStructureImage}
        />
      </ImageWrapper>
      <Paragraph>
        Here you’ll find the files{" "}
        <InlineCode>LightSideScreenView.swift</InlineCode> and{" "}
        <InlineCode>LightSideScreenView.storyboard</InlineCode> that together
        implements the View. The <InlineCode>LightSideScreenView</InlineCode>{" "}
        class implements <InlineCode>UIViewController</InlineCode>,{" "}
        <InlineCode>UICollectionViewDataSource</InlineCode> and{" "}
        <InlineCode>UICollectionViewDelegateFlowLayout</InlineCode> for showing
        its list of Jedi, and the{" "}
        <InlineCode>LightSideScreenViewType</InlineCode> for implementing its
        VIPER type.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenView.swift"} copy={codeBlock5}>
        <CodeBlock>{codeBlock5}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        When the Router returns its view controller in its{" "}
        <InlineCode>create()</InlineCode> function, the view controller’s{" "}
        <InlineCode>viewDidLoad()</InlineCode> function will be invoked. Next,
        the <InlineCode>viewDidAppear(_:)</InlineCode> function will be invoked
        and this is where we invoke the Presenter’s{" "}
        <InlineCode>viewDidAppear()</InlineCode> function.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenView.swift"} copy={codeBlock6}>
        <CodeBlock>{codeBlock6}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        This is an important step in the VIPER module lifecycle because this is
        where we “start” the Presenter.
      </Paragraph>
      <Heading2>Presenter</Heading2>
      <Paragraph>
        So, we have loaded our View and started our Presenter, but the View has
        no data to show. Now it’s time for the Presenter to do its thing. The
        Presenter is responsible for acquiring the data needed for the View to
        display and it is responsible for using the Router.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock7}>
        <CodeBlock>{codeBlock7}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        In the Presenter function <InlineCode>viewDidAppear()</InlineCode> we
        first start a loading animation on the View, then we ask the Interactor
        to get the data we need to display. Specifically we ask for the Jedi
        code and the list of Jedi masters, both with its own completion
        handlers, and we ask for cached data if it’s available. We’ll look into
        what’s going on in the Interactor soon, but for now all the Presenter is
        concerned about is waiting for the data to arrive in its completion
        handlers.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock8}>
        <CodeBlock>{codeBlock8}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        The completion handlers <InlineCode>onJediCode(_:_:)</InlineCode> and{" "}
        <InlineCode>onJediList(_:_:)</InlineCode>, are functions that takes two
        parameters - an optional model (the data we want) and an optional error.
        The model will be not nil if the data was successfully loaded. So we use
        this optional model by safely unwrapping and adding it to our View with
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock9}>
        <CodeBlock>{codeBlock9}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        and by invoking a refresh of the list of Jedi masters with
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock10}>
        <CodeBlock>{codeBlock10}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        When all the data is loaded we finish the loading animation on the View
        so that the data can be displayed:
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock11}>
        <CodeBlock>{codeBlock11}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        The Presenter is also reacting to user events. When the user clicks the
        “Dark side” button in the navigation bar, it will invoke the View’s{" "}
        <InlineCode>onDarkSideSelected(_:)</InlineCode> function that first
        invokes the Presenter’s <InlineCode>onDarkSideSelected()</InlineCode>{" "}
        function that in turn will invoke the Router’s{" "}
        <InlineCode>routeToDarkSideScreen(from:)</InlineCode> function.
      </Paragraph>
      <CodeWrapper title={"LightSideScreenPresenter.swift"} copy={codeBlock12}>
        <CodeBlock>{codeBlock12}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        This will push the dark-side VIPER module’s view controller onto the
        navigation stack.
      </Paragraph>
      <Heading2>Entity & Interactor</Heading2>
      <Paragraph>
        We’ve looked into what the Router, View and Presenter is doing, so now
        it’s time to see what is going on in the last two VIPER parts - Entity
        and Interactor. The Interactor is responsible for interacting with API’s
        - typically through network HTTP requests - to load the data needed for
        the Presenter to handle.
      </Paragraph>
      {/* prettier-ignore */}
      <CodeWrapper title={"LightSideScreenInteractor.swift"} copy={codeBlock13}>
        <CodeBlock>
          {codeBlock13}
        </CodeBlock>
      </CodeWrapper>
      <Paragraph>
        When the Interactor gets data, it decodes it to an entity type and
        caches it in the Entity:
      </Paragraph>
      <CodeWrapper title={"LightSideScreenInteractor.swift"} copy={codeBlock14}>
        <CodeBlock>{codeBlock14}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        An entity type is a typealias for a data structure/model referenced in
        the Entity:
      </Paragraph>
      <CodeWrapper title={"LightSideScreenTypes.swift"} copy={codeBlock15}>
        <CodeBlock>{codeBlock15}</CodeBlock>
      </CodeWrapper>
      <Paragraph>
        The Entity is responsible for keeping references to models and storing
        the cache of the models used by the VIPER module. This enables us to use
        the models indirectly in all parts of the VIPER module by referencing to
        the Entity’s entity types. The next time the Presenter asks the
        Interactor for data, it can first look into the Entity cache and see if
        there is available data present and return this instantly instead of
        doing a lengthy network request:
      </Paragraph>
      <CodeWrapper title={"LightSideScreenInteractor.swift"} copy={codeBlock16}>
        <CodeBlock>{codeBlock16}</CodeBlock>
      </CodeWrapper>
      <Heading2>Wrapping up</Heading2>
      <Paragraph>
        And that’s about all there is to using VIPER in an iOS app 🎉
      </Paragraph>
      <Paragraph>
        Navigating to the dark-side screen using the navigation bar will start
        the other VIPER module in the app - which is very similar to the
        light-side screen when we look at the structural flow of the code. The
        View is a little different and there are other entity types here, but
        everything else should be familiar.
      </Paragraph>
      <ImageWrapper>
        <Image
          alt={"Directory structure showing the UI tests and Unit tests."}
          src={testsStructureImage}
        />
      </ImageWrapper>
      <Paragraph>
        The VIPER architectural pattern can make unit testing your code a
        delightful experience. You can easily write unit tests for any part of a
        VIPER module. By mocking and stubbing the other parts you can inject
        them as dependencies in the VIPER part (or system) under test. I added a
        complete set of unit tests to our app, specifically testing the two
        VIPER modules. There’s also a basic UI test included. I managed to get
        as much as 98% test coverage with these tests.
      </Paragraph>
      <ImageWrapper>
        <Image alt={""} src={testCoverageImage} />
      </ImageWrapper>
      <Paragraph>
        You can run these tests in Xcode by hitting{" "}
        <InlineCode>command + U</InlineCode>.
      </Paragraph>
    </Wrapper>
  );
};
