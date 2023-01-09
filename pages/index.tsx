import Head from "next/head";
import styled from "@emotion/styled";
import { Container, Stack } from "@mui/material";
import { Header } from "components/Header";
import { TotalPrice } from "components/TotalPrice";
import { TweetButton } from "components/TweetButton";
import { OrderButton } from "components/OrderButton";
import { MenuItem } from "components/MenuItem";
import { theme } from "styles/theme";

const Component: FCX = ({ className }) => (
  <>
    <Head>
      <title>サイゼデッキ！</title>
      <meta
        name="description"
        content="あなただけのサイゼリヤのフルコースを作ろう！"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={className}>
      <Header />
      <Container className={className + "--main"} maxWidth="md">
        <div className="top">
          <TotalPrice />
          <div className="buttons">
            <TweetButton />
            <OrderButton />
          </div>
        </div>

        <Stack spacing={2}>
          {[1, 2, 3].map((n) => (
            <MenuItem key={n} />
          ))}
        </Stack>
      </Container>
    </div>
  </>
);

const StyledComponent = styled(Component)`
  --header-height: 48px;

  background-color: ${theme.palette.grey[100]};
  &--main {
    min-height: calc(100vh - var(--header-height));
    margin-top: var(--header-height);
    padding: ${theme.spacing(2, 1)};

    > .top {
      display: flex;
      margin-bottom: ${theme.spacing(2)};
      > .buttons {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: ${theme.spacing(1)};
      }
    }
  }
`;

const Index = () => {
  return <StyledComponent />;
};

export default Index;
