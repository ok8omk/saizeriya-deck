import { Deck } from "../Deck";
import { Menu, readMenusCsv } from "pages/api/menus";

// 内部的にnodejsのfsモジュールを利用しているため、サーバーサイドでしか呼び出せない
// getServerSideProps内でのみ利用する
export const deserializeShareQuery = async (query: {
  [key: string]: string | string[] | undefined;
}): Promise<Deck> => {
  const value = query["menus"];
  if (typeof value !== "string") return new Deck();
  const menuIds = decodeURIComponent(value).split(",");
  const menus = readMenusCsv();

  const menuDict: { [id: string]: Menu } = Object.fromEntries(
    menus.map((menu) => [menu.id, menu])
  );

  const selectedMenus = menuIds.map((menuId) => {
    const menu = menuDict[menuId];
    if (!menu) throw Error(`Deck.fromShareQuery: ${menuId}は存在しません`);
    return menu;
  });

  return new Deck(selectedMenus);
};
