import { ADD_TODO, REMOVE_TODO } from "../action/action";

const initialState = { };

const addTodo = (state, action) =>{
    const newState = {...state};
    newState[
        (Math.random() * 9999999999).toFixed(0)
    ] = action.text
    return newState
}

const removeTodo = (state , action) =>{
    const newState = {...state};
    delete newState[action.id];
    return newState
}
 const todo = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
        return addTodo(state, action)
      break;
    case REMOVE_TODO :
     return removeTodo(state, action)
      break;

    default:
      break;
  }

  return state;
}

export default todo;
// const initialState = { };


// const todo = (state = initialState, action) => {
//   const newState = { ...state };

//   switch (action.type) {
//     case "ADD":
//       const id = Math.random() * 9999999999;
//       newState[id.toFixed(0)] = action.text;
//       break;
//     case "REMOVE":
//       delete newState[action.id];
//       break;

//     default:
//       break;
//   }

//   return newState;
// }

// export default todo;