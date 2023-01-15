import { useReducer, useContext, createContext, Dispatch } from "react";
import type { Menu } from "pages/api/menus";
import { Deck } from "../models/Deck";

type State = {
  menus: Menu[];
};

type Action =
  | {
      type: "addMenu";
      menu: Menu;
    }
  | {
      type: "deleteMenu";
      index: number;
    };

const toState = (deck: Deck) => ({
  menus: deck.menus,
});

const initialState: State = {
  menus: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addMenu": {
      return toState(new Deck(state.menus).addMenu(action.menu));
    }

    case "deleteMenu": {
      return toState(new Deck(state.menus).deleteMenu(action.index));
    }

    default: {
      console.error("Invalid action ->", action);
      throw new Error(`Invalid action.`);
    }
  }
};

export const useDeckReducer = (deck: Deck): [Deck, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, toState(deck));
  return [new Deck(state.menus), dispatch];
};

export const DeckDispatchContext = createContext<Dispatch<Action>>(
  undefined as never
);

export const useDeckDispatch = () => {
  const dispatch = useContext(DeckDispatchContext);
  return dispatch;
};
