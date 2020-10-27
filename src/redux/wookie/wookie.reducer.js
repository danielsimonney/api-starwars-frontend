import wookieAction from './wookie.types';

const INITIAL_STATE = {
  langage:false,
}

const wookieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wookieAction.SWITCH_LANGAGE:
      return {
        ...state,
        langage: !state.langage
      }  
    default:
      return state
  }
}

export default wookieReducer;