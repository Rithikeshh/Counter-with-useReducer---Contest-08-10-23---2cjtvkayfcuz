const counterReducer = (state,action) =>{
  switch(action.type){
    case "Inc": return{...state, count: state.count+1}
    case "Dec": return{...state, count: state.count-1}
  }
}

export {counterReducer}
