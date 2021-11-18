const reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload
    case "reset":
      return state = 0
    default:
      return state
  }
}

export default reducer;
