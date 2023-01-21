import { FC } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Header } from "components/Header";
import { Container, Link } from "@mui/material";
import { theme } from "styles/theme";

const Component: FCX = ({ className }) => (
  <>
    <Head>
      <title>このサイトについて | サイゼデッキ！</title>
      <meta name="description" content="このサイトについて | サイゼデッキ！" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={className}>
      <Header />
      <Container className={className + "--main"} maxWidth="md">
        <h2>このサイトについて</h2>
        <p>
          サイゼデッキ！は
          <Link
            href="https://www.saizeriya.co.jp"
            target="_blank"
            rel="noreferrer"
          >
            サイゼリヤ
          </Link>
          非公式のファンサイトです。ご質問・ご要望等、お問い合わせは
          <Link
            href="https://twitter.com/saize_deck"
            target="_blank"
            rel="noreferrer"
          >
            @saize_deck
          </Link>
          までどうぞ。
        </p>
        <p></p>
      </Container>
    </div>
  </>
);

const StyledComponent = styled(Component)`
  --header-height: 48px;
  &--main {
    min-height: calc(100vh - var(--header-height));
    margin-top: var(--header-height);
    padding: ${theme.spacing(2, 1)};

    h2 {
      font-size: 16px;
      margin: 8px 0;
    }
    p {
      font-size: 12px;
    }
  }
`;

const About: FC = () => {
  return <StyledComponent />;
};

export default About;
