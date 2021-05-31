import * as type from '../types';

const initialState = {
  foods: [],
  loading: false,
  error: null,
}

export default function foods(state = initialState, action) {
  switch (action.type) {
    case type.GET_FOODS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_FOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.foods
      }
    case type.GET_FOODS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case type.GET_FOODDETAILS_REQUESTED:
      return {
        foods: state.foods.find(f => f.id === action.value.id),
        loading: false,
        error: action.message
      }
    case type.GET_FOODDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.foods
      }
    case type.GET_FOODDETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}