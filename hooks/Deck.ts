import type { Menu } from "pages/api/menus";

export class Deck {
  static LIMIT_MENU_COUNT = 20;

  menus: Menu[];

  constructor(menus: Menu[] = []) {
    this.menus = menus;
  }

  totalPrice(): number {
    return this.menus
      .map((menu) => menu.price)
      .reduce((sum, price) => sum + price, 0);
  }

  canAdd(): boolean {
    return this.menus.length < Deck.LIMIT_MENU_COUNT;
  }

  addMenu(menu: Menu): Deck {
    if (!this.canAdd()) {
      throw Error(
        `Deck#add: メニューの個数の上限は${Deck.LIMIT_MENU_COUNT}個です`
      );
    }

    return new Deck([...this.menus, menu]);
  }

  deleteMenu(index: number): Deck {
    if (index > this.menus.length - 1) {
      throw Error(
        `Deck#delete: 0から${this.menus.length - 1}の値を指定してください`
      );
    }

    return new Deck([
      ...this.menus.slice(0, index),
      ...this.menus.slice(index + 1),
    ]);
  }
}
