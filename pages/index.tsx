import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Container, Stack } from "@mui/material";
import { theme } from "styles/theme";
import { Header } from "components/Header";
import { TotalPrice } from "components/TotalPrice";
import { TweetButton } from "components/TweetButton";
import { OrderButton } from "components/OrderButton";
import { MenuItem } from "components/MenuItem";
import { AddFab } from "components/AddFab";
import { SearchDrawer } from "components/SearchDrawer";
import { useDeckReducer, DeckDispatchContext } from "hooks/useDeckReducer";
import { Menu } from "pages/api/menus";

type ComponentProps = {
  totalPrice: number;
  menus: Menu[];
  openSearchDrawer: boolean;
  onClickAddFab: () => void;
  onCloseSearchDrawer: () => void;
};

const Component: FCX<ComponentProps> = ({
  className,
  totalPrice,
  menus,
  openSearchDrawer,
  onClickAddFab,
  onCloseSearchDrawer,
}) => (
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
          <TotalPrice price={totalPrice} />
          <div className="buttons">
            <TweetButton />
            <OrderButton />
          </div>
        </div>

        <Stack spacing={2}>
          {menus.map((menu, index) => (
            <MenuItem key={index} index={index} menu={menu} />
          ))}
        </Stack>
      </Container>

      <AddFab className="add-fab" onClick={onClickAddFab} />

      <SearchDrawer open={openSearchDrawer} onClose={onCloseSearchDrawer} />
    </div>
  </>
);

const StyledComponent = styled(Component)`
  --header-height: 48px;

  position: relative;
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

  > .add-fab {
    position: fixed;
    bottom: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
  }
`;

const Index = () => {
  const [deck, deckDispatch] = useDeckReducer();

  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const onClickAddFab = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    setOpenSearchDrawer(true);
  };
  const onCloseSearchDrawer = () => {
    setOpenSearchDrawer(false);
  };

  const componentProps: ComponentProps = {
    totalPrice: deck.totalPrice(),
    menus: deck.menus,
    openSearchDrawer,
    onClickAddFab,
    onCloseSearchDrawer,
  };

  return (
    <DeckDispatchContext.Provider value={deckDispatch}>
      <StyledComponent {...componentProps} />
    </DeckDispatchContext.Provider>
  );
};

export default Index;
