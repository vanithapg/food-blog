import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = `http://localhost:6800/food`;
function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchFoods(action) {
  try {
    const foods = yield call(getApi);
    yield put({ type: "GET_FOODS_SUCCESS", foods: foods });
  } catch (e) {
    yield put({ type: "GET_FOODS_FAILED", message: e.message });
  }
}

function* getFood(action)
{
  console.log('get one Food');
  try {
    const food = yield call({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }}, `http://localhost:6800/food/${action.value.id}`);
    yield put({ type: "GET_FOODDETAILS_SUCCESS", foods: food });
  } catch (e) {
    yield put({ type: "GET_FOODDETAILS_FAILED", message: e.message });
  }
}

function* foodSaga() {
  yield takeEvery("GET_FOODS_REQUESTED", fetchFoods);
}

export default foodSaga;
