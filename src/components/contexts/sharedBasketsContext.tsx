import React, { createContext, useReducer } from "react";

export const SharedBasketsContext = createContext<any>(null)

export const actions = {
  UPDATE: "UPDATE_BASKETS",
  CLEAR: "CLEAR_BASKETS",
};

export const _reducer = (
  state: SharedBasketModel[],
  { type, payload }: ReducerAction<SharedBasketModel[]>
): SharedBasketModel[] => {
  console.log(state, type, payload)
  switch (type) {
    case actions.UPDATE:
      return [...state, ...(payload ?? [])];
    case actions.CLEAR:
      return [];
    default:
      return state;
  }
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SharedBasketContextProvider = ({ children }: Props) => {
  const [baskets, dispatch] = useReducer(_reducer, []);

  return (
    <SharedBasketsContext.Provider value={{ baskets, dispatch }}>
      {children}
    </SharedBasketsContext.Provider>
  );
};

export default SharedBasketContextProvider;
