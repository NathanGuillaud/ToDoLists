const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
      console.log(action)
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
      default:
        return state
    }
  }
  
  export default tasks