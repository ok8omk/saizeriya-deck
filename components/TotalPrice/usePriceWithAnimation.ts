import { useState, useRef, useEffect, FC } from "react";

export const usePriceWithAnimation = (price: number) => {
  const [displayPrice, setDisplayPrice] = useState(price);

  const prices = useRef({ before: price, after: price });

  useEffect(() => {
    prices.current.before = prices.current.after;
    prices.current.after = price;
    setDisplayPrice(prices.current.before);

    const intervalId = setInterval(() => {
      setDisplayPrice((prevDisplayPrice) => {
        const delta = prices.current.after - prices.current.before;

        const nextDisplayPrice = Math.floor(prevDisplayPrice + delta / 10); // 小数点以下が表示されないように切り捨て
        if (
          (delta > 0 && nextDisplayPrice >= prices.current.after) ||
          (delta < 0 && nextDisplayPrice <= prices.current.after)
        ) {
          clearInterval(intervalId);
          return prices.current.after;
        }

        return nextDisplayPrice;
      });
    }, 50);
  }, [price]);

  return displayPrice;
};
