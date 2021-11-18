export const resetBalance = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "reset",
      payload: amount
    })
  }
}
