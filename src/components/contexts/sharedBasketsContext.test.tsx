import { _reducer, actions } from "./sharedBasketsContext";
describe("SharedBasketsContext tests", () => {
  test("Should update new baskets list on update action", () => {

    const expectedState : SharedBasketModel[]= [{ id: "bsk_01", name: "bsk 01" }];
    const prevState : SharedBasketModel[]= [
      { id: "basket_1", name: "First basket" },
      { id: "basket_1", name: "First basket" },
    ];
    const dispatch : ReducerAction<SharedBasketModel[]> = { type: actions.UPDATE, payload: expectedState };

    expect(_reducer(prevState, dispatch)).toBe(expectedState);
  });

  test("Should clear baskets list on clear action", () => {

    const prevState : SharedBasketModel[]= [
      { id: "basket_1", name: "First basket" },
      { id: "basket_1", name: "First basket" },
    ];
    const dispatch : ReducerAction<SharedBasketModel[]> = { type: actions.UPDATE, payload: prevState };

    expect(_reducer(prevState, dispatch)).toBe(prevState);

  });

  test("Should return unchanged basket list on invalid action", () => {
    
    const prevState : SharedBasketModel[]= [
      { id: "basket_1", name: "First basket" },
      { id: "basket_1", name: "First basket" },
    ];
    const dispatch : ReducerAction<SharedBasketModel[]> = { type: "unknown", payload: {} as any };

    expect(_reducer(prevState, dispatch)).toBe(prevState);
  });
});
