import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shopSaga';
import { usersSaga } from './user/userSaga';
import { cartSaga } from './cart/cartSaga';

export default function* rootSaga() {
  yield all([call(shopSaga), call(usersSaga), call(cartSaga)]);
}
