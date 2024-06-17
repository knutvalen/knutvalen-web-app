"use client";

import styled from "styled-components";
import { StyledHeading1 } from "@/app/components/StyledHeading1";
import { StyledMain } from "@/app/components/StyledMain";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import { StyledHeading3 } from "@/app/components/StyledHeading3";
import { StyledUnorderedList } from "@/app/components/StyledUnorderedList";
import { StyledListItem } from "@/app/components/StyledListItem";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Heading1 = styled(StyledHeading1)`
  padding-bottom: 32px;
`;

const Heading2 = styled(StyledHeading2)`
  padding-bottom: 16px;
`;

const Heading3 = styled(StyledHeading3)`
  padding-bottom: 16px;
`;

const Paragraph = styled(StyledParagraph)`
  padding-bottom: 16px;
`;

export const PrivacyPolicy = () => {
  const websiteName = "knutvalen.dev";
  const paymentProcessorName = "[Processor Name]";
  const mailAddress = "knut.valen@gmail.com";
  const lastUpdated = new Date(2024, 7, 15);

  return (
    <Wrapper>
      <StyledMain>
        <Heading1>Privacy Policy</Heading1>
        <Heading2>Introduction</Heading2>
        <Paragraph>
          Welcome to {websiteName}. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website {websiteName}, including any other media form, media
          channel, mobile website, or mobile application related or connected
          thereto (collectively, the &quot;Site&quot;). Please read this privacy
          policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the site.
        </Paragraph>
        <Heading2>Information We Collect</Heading2>
        <Heading3>Personal Data</Heading3>
        <Paragraph>
          We may collect personally identifiable information, such as your name,
          shipping address, email address, and telephone number when you
          voluntarily provide it to us when you register on the Site, place an
          order, subscribe to our newsletter, or fill out a form.
        </Paragraph>
        <Heading3>Derivative Data</Heading3>
        <Paragraph>
          Information our servers automatically collect when you access the
          Site, such as your IP address, your browser type, your operating
          system, your access times, and the pages you have viewed directly
          before and after accessing the Site.
        </Paragraph>
        <Heading3>Financial Data</Heading3>
        <Paragraph>
          Financial information, such as data related to your payment method
          (e.g., valid credit card number, card brand, expiration date) that we
          may collect when you purchase, order, return, exchange, or request
          information about our services from the Site. We store only very
          limited, if any, financial information that we collect. Otherwise, all
          financial information is stored by our payment processor,{" "}
          {paymentProcessorName}, and you are encouraged to review their privacy
          policy and contact them directly for responses to your questions.
        </Paragraph>
        <Heading3>Mobile Device Data</Heading3>
        <Paragraph>
          Device information, such as your mobile device ID, model, and
          manufacturer, and information about the location of your device, if
          you access the Site from a mobile device.
        </Paragraph>
        <Heading3>Third-Party Data</Heading3>
        <Paragraph>
          Information from third parties, such as personal information or
          network friends, if you connect your account to the third party and
          grant the Site permission to access this information.
        </Paragraph>
        <Heading3>Data From Contests, Giveaways, and Surveys</Heading3>
        <Paragraph>
          Personal and other information you may provide when entering contests
          or giveaways and/or responding to surveys.
        </Paragraph>
        <Heading2>Use of Your Information</Heading2>
        <Paragraph>
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the Site to:
        </Paragraph>
        <StyledUnorderedList>
          <StyledListItem>Create and manage your account.</StyledListItem>
          <StyledListItem>
            Process your transactions and send you related information.
          </StyledListItem>
          <StyledListItem>
            Email you regarding your account or order.
          </StyledListItem>
          <StyledListItem>
            Fulfill and manage purchases, orders, payments, and other
            transactions related to the Site.
          </StyledListItem>
          <StyledListItem>
            Improve our website and product offerings.
          </StyledListItem>
          <StyledListItem>
            Monitor and analyze usage and trends to improve your experience with
            the Site.
          </StyledListItem>
          <StyledListItem>Notify you of updates to the Site.</StyledListItem>
          <StyledListItem>
            Offer new products, services, and/or recommendations to you.
          </StyledListItem>
          <StyledListItem>
            Perform other business activities as needed.
          </StyledListItem>
          <StyledListItem>
            Prevent fraudulent transactions, monitor against theft, and protect
            against criminal activity.
          </StyledListItem>
          <StyledListItem>
            Request feedback and contact you about your use of the Site.
          </StyledListItem>
        </StyledUnorderedList>
        <Heading2>Disclosure of Your Information</Heading2>
        <Paragraph>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </Paragraph>
        <Heading3>By Law or to Protect Rights</Heading3>
        <Paragraph>
          If we believe the release of information about you is necessary to
          respond to legal process, to investigate or remedy potential
          violations of our policies, or to protect the rights, property, and
          safety of others, we may share your information as permitted or
          required by any applicable law, rule, or regulation.
        </Paragraph>
        <Heading3>Third-Party Service Providers</Heading3>
        <Paragraph>
          We may share your information with third parties that perform services
          for us or on our behalf, including payment processing, data analysis,
          email delivery, hosting services, customer service, and marketing
          assistance.
        </Paragraph>
        <Heading3>Marketing Communications</Heading3>
        <Paragraph>
          With your consent, or with an opportunity for you to withdraw consent,
          we may share your information with third parties for marketing
          purposes, as permitted by law.
        </Paragraph>
        <Heading3>Business Transfers</Heading3>
        <Paragraph>
          We may share or transfer your information in connection with, or
          during negotiations of, any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business to another company.
        </Paragraph>
        <Heading3>Affiliates</Heading3>
        <Paragraph>
          We may share your information with our affiliates, in which case we
          will require those affiliates to honor this Privacy Policy. Affiliates
          include our parent company and any subsidiaries, joint venture
          partners, or other companies that we control or that are under common
          control with us.
        </Paragraph>
        <Heading3>Business Partners</Heading3>
        <Paragraph>
          We may share your information with our business partners to offer you
          certain products, services, or promotions.
        </Paragraph>
        <Heading3>Other Third Parties</Heading3>
        <Paragraph>
          We may share your information with advertisers and investors for the
          purpose of conducting general business analysis. We may also share
          your information with such third parties for marketing purposes, as
          permitted by law.
        </Paragraph>
        <Heading2>Tracking Technologies</Heading2>
        <Heading3>Cookies and Web Beacons</Heading3>
        <Paragraph>
          We may use cookies, web beacons, tracking pixels, and other tracking
          technologies on the Site to help customize the Site and improve your
          experience. When you access the Site, your personal information is not
          collected through the use of tracking technology. Most browsers are
          set to accept cookies by default. You can remove or reject cookies,
          but be aware that such action could affect the availability and
          functionality of the Site. You may not decline web beacons. However,
          they can be rendered ineffective by declining all cookies or by
          modifying your web browser’s settings to notify you each time a cookie
          is tendered, permitting you to accept or decline cookies on an
          individual basis.
        </Paragraph>
        <Heading3>Internet-Based Advertising</Heading3>
        <Paragraph>
          Additionally, we may use third-party software to serve ads on the
          Site, implement email marketing campaigns, and manage other
          interactive marketing initiatives. This third-party software may use
          cookies or similar tracking technology to help manage and optimize
          your online experience with us. For more information about opting out
          of interest-based ads, visit the Network Advertising Initiative
          Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
        </Paragraph>
        <Heading2>Security of Your Information</Heading2>
        <Paragraph>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </Paragraph>
        <Heading2>Policy for Children</Heading2>
        <Paragraph>
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13 without verification of parental
          consent, we will delete that information as quickly as possible. If
          you become aware of any data we have collected from children under age
          13, please contact us at {mailAddress}.
        </Paragraph>
        <Heading2>Controls for Do-Not-Track Features</Heading2>
        <Paragraph>
          Most web browsers and some mobile operating systems include a
          Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to
          signal your privacy preference not to have data about your online
          browsing activities monitored and collected. No uniform technology
          standard for recognizing and implementing DNT signals has been
          finalized. As such, we do not currently respond to DNT browser signals
          or any other mechanism that automatically communicates your choice not
          to be tracked online. If a standard for online tracking is adopted
          that we must follow in the future, we will inform you about that
          practice in a revised version of this Privacy Policy.
        </Paragraph>
        <Heading2>Options Regarding Your Information</Heading2>
        <Heading3>Account Information</Heading3>
        <Paragraph>
          You may at any time review or change the information in your account
          or terminate your account by:
        </Paragraph>
        <StyledUnorderedList>
          <StyledListItem>
            Logging into your account settings and updating your account.
          </StyledListItem>
          <StyledListItem>
            Contacting us using the contact information provided below.
          </StyledListItem>
        </StyledUnorderedList>
        <Paragraph>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, some information may be retained in our files to prevent
          fraud, troubleshoot problems, assist with any investigations, enforce
          our Terms of Use, and/or comply with legal requirements.
        </Paragraph>
        <Heading3>Emails and Communications</Heading3>
        <Paragraph>
          If you no longer wish to receive correspondence, emails, or other
          communications from us, you may opt-out by:
        </Paragraph>
        <StyledUnorderedList>
          <StyledListItem>
            Noting your preferences at the time you register your account with
            the Site.
          </StyledListItem>
          <StyledListItem>
            Logging into your account settings and updating your preferences.
          </StyledListItem>
          <StyledListItem>
            Contacting us using the contact information provided below.
          </StyledListItem>
        </StyledUnorderedList>
        <Paragraph>
          If you no longer wish to receive correspondence, emails, or other
          communications from third parties, you are responsible for contacting
          the third party directly.
        </Paragraph>
        <Heading2>Contact Us</Heading2>
        <Paragraph>
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </Paragraph>
        <Paragraph>E-mail: {mailAddress}</Paragraph>
        <Paragraph>
          This privacy policy was last updated on{" "}
          {lastUpdated.toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          .
        </Paragraph>
      </StyledMain>
    </Wrapper>
  );
};
