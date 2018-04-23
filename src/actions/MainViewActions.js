export const buttonPressed = (btnID) => {
  return {
    type: 'button_pressed',
    payload: btnID
  }
}

export const fetchAsyncData = () => {
  return(dispatch) => {
    fetch("https://www.reddit.com/r/")
    .then(response => {
      dispatch({
        type: 'fetch_async_data_success',
        payload: response.url
      })
      console.log(response)
    })
  }
}