"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { useCookiesContext } from "@/app/CookiesProvider";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { X } from "react-feather";
import { useEffect, useState } from "react";
import { getAllCookies, setCookies } from "@/app/serverActions";
import { Button } from "@/app/components/Button";

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px) brightness(80%);
`;

const Content = styled(Dialog.Content)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: min(85%, 518px);
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.grey[50]};
  border: 1px solid ${(props) => props.theme.colors.grey[200]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    background-color: ${(props) => props.theme.colors.grey[900]};
    border: 1px solid ${(props) => props.theme.colors.grey[800]};
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey[200]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[800]};
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey[200]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[800]};
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${40 / 16}rem;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.grey[700]};
  font-size: ${14 / 16}rem;
  flex: 1;
  user-select: none;

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.grey[300]};
  }
`;

const Input = styled.input`
  border-radius: 2px;
  padding: 12px 14px;
  height: ${40 / 16}rem;
  border: 1px solid ${(props) => props.theme.colors.grey[300]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border: 1px solid ${(props) => props.theme.colors.grey[300]};
  }
`;

const Checkbox = styled(Input)`
  --size: 24px;
  height: var(--size);
  width: var(--size);
  padding: 0;
  accent-color: ${(props) => props.theme.colors.primary.normal};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    accent-color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
`;

export const CookiePreferences = () => {
  const { isPreferencesOpen, setPreferencesOpen } = useCookiesContext();
  const [googleAnalytics, setGoogleAnalytics] = useState(true);

  useEffect(() => {
    getAllCookies().then((allCookies) => {
      const googleAnalyticsCookie = allCookies.find(
        (cookie) => cookie.name === "googleAnalytics",
      );
      setGoogleAnalytics(
        googleAnalyticsCookie ? googleAnalyticsCookie.consent : true,
      );
    });
  }, []);

  const savePreferences = async () => {
    await setCookies([
      { name: "necessary", consent: true },
      { name: "googleAnalytics", consent: googleAnalytics },
    ]);
    setPreferencesOpen(false);
  };

  const toggleAll = (consent: boolean) => {
    setGoogleAnalytics(consent);
  };

  return (
    <Dialog.Root open={isPreferencesOpen} onOpenChange={setPreferencesOpen}>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <StyledHeader>
              <StyledHeading2>Cookie preferences</StyledHeading2>
              <Dialog.Close asChild={true}>
                <Button size={"medium"} variant={"text"}>
                  <X />
                </Button>
              </Dialog.Close>
            </StyledHeader>
            <Main>
              <OptionWrapper>
                <Label htmlFor={"necessary"}>Basic necessary cookies</Label>
                <Checkbox
                  id={"necessary"}
                  type={"checkbox"}
                  disabled={true}
                  checked={true}
                />
              </OptionWrapper>
              <OptionWrapper>
                <Label htmlFor={"googleAnalytics"}>Google Analytics</Label>
                <Checkbox
                  id={"googleAnalytics"}
                  type={"checkbox"}
                  checked={googleAnalytics}
                  onChange={(event) => setGoogleAnalytics(event.target.checked)}
                />
              </OptionWrapper>
            </Main>
            <StyledFooter>
              {/*<OptionWrapper>*/}
              {/*  <Label htmlFor={"all"}>Select all</Label>*/}
              {/*  <Checkbox*/}
              {/*    id={"all"}*/}
              {/*    type={"checkbox"}*/}
              {/*    checked={[googleAnalytics].every((value) => value)}*/}
              {/*    onChange={(event) => toggleAll(event.target.checked)}*/}
              {/*  />*/}
              {/*</OptionWrapper>*/}
              <Button
                size={"medium"}
                variant={"contained"}
                onClick={savePreferences}
              >
                Done
              </Button>
            </StyledFooter>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
