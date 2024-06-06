"use client";

import styled from "styled-components";
import { StyledMain } from "@/app/components/StyledMain";
import { Loader } from "@/app/components/Loader";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Wrapper>
    <Main>
      <Loader size={"large"} />
    </Main>
  </Wrapper>
);

export default Loading;
