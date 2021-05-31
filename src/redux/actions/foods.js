import * as type from '../types';

export function getFoods() {
  console.log('inside Action getFoods')
  return {
    type: type.GET_FOODS_REQUESTED,
  }
}

export function getFood() {
  console.log('inside Action getFood')
  return {
    type: type.GET_FOODDETAILS_REQUESTED,
  }
}