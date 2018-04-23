export default (state = {text: "initial"}, action) => {

  switch(action.type) {
    case 'button_pressed':
      return { ...state, text: action.payload }

    case 'fetch_async_data':
      return { ...state, text: action.payload }
      
    case 'fetch_async_data_success':
      return { ...state, text: action.payload }

    default:
      return state
  }
}