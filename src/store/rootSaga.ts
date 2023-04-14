import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';

import dishSaga from './dish/dish-saga';

export default function * rootSaga (): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(dishSaga)]);
}
