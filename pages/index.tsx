import Head from "next/head";
import styled from "@emotion/styled";
import { Header } from "components/Header";
import { WHITE_GRAY_COLOR } from "styles/colors";

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
    </div>
  </>
);

const StyledComponent = styled(Component)`
  background: ${WHITE_GRAY_COLOR};
  min-height: 100vh;
`;

const Index = () => {
  return <StyledComponent />;
};

export default Index;
