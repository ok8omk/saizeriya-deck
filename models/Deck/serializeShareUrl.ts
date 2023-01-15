import { Deck } from "../Deck";

// WebWorkerでしか使えないURLSearchParamsを使っているため、サーバーサイドでは呼び出せない
// サーバーサイドレンダリングで呼び出されないよう、useEffectでラップするなどする
export const serializeShareUrl = (deck: Deck) => {
  const menusParam = deck.menus.map((menu) => menu.id).join(",");

  let searchParams = new URLSearchParams();
  if (menusParam) searchParams.set("menus", menusParam);
  const queryString = searchParams.toString();

  let url = location.origin + location.pathname;
  if (queryString) url += `?${queryString}`;

  return encodeURI(url);
};
