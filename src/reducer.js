function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

export default reducer;
