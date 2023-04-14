import { ForkEffect, takeLatest } from 'redux-saga/effects';

import { handleFetchDishes } from './dish-handlers';
import { fetchDishes } from './dish-slice';

export default function * dishSaga (): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(fetchDishes.type, handleFetchDishes);
}
