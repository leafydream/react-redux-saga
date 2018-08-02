import { put, call, takeEvery, all } from 'redux-saga/effects';
import watchIncrement from './increment';
import watchFetchData from './fetchData'


// function* incrementAsync(action) {
//   console.log(action)
//   debugger;
//   yield delay(1000);
//   yield put(increment());
// }

// // Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
// function* watchIncrementAsync() {
//   yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
// }



// function* fetchData(action) {
//   let response = yield call(axios.get, 'https://api.github.com/users/torvalds');
//   debugger
//   yield put(fetchUserFulfilled(response.data));
// }

// function* watchFetchData() {
//   debugger;
//   yield takeEvery(actionTypes.FETCH_DATA, fetchData);
// }




export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchFetchData()
  ]) 
}
