import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
    return [action.payload.data, ...state]; // [city, city, city]
  }
  return state;
}

// need to add on to existing state, not replace the state!
//putting it in an array because multiple cities could be coming back

// opening a problem : return state.push(action.payload.data);
// because you are changing the state directly (never ever change the state!) only change it by using setState

// concat doesnt change the existing array, it creates a new one
// same as line 6     return state.concat([action.payload.data]);
// insert it in the state
