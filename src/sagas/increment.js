import { delay } from 'redux-saga';
import { put, call, takeEvery, all } from 'redux-saga/effects';

import { increment, fetchUserFulfilled } from '../actions';
import * as actionTypes from '../constants/actionTypes';


function* incrementAsync(action) {
  yield delay(1000);
  yield put(increment());
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export default function* watchIncrementAsync() {
  yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
}