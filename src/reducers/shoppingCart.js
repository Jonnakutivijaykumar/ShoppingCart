import initialState from "../initialState";
import _ from "lodash";
import { CHANGE_QUANTITY, DELETE_PRODUCT } from "../actions/shoppingCart";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUANTITY:
      const index = _.findIndex(state.shoppingCart, ["id", action.id]);
      const newState = [...state.shoppingCart];
      newState.map((item) => {
        if (item.id === newState[index].id) {
          (newState[index].quantity = action.value),
            (newState[index].totalQuantityPrice =
              newState[index].price * action.value);
        }
      });
      return { ...state, newState };
    case DELETE_PRODUCT:
      let actualState = _.remove(state.shoppingCart, (product) => {
        return product.id == action.id;
      });
      return {
        ...state,
        actualState,
      };

    default:
      return state;
  }
};
