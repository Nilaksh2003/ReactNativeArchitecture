import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {thunk} from 'redux-thunk'; // Middleware for async actions
import {rootReducer} from '@/reducers'; // Import combined reducers
import {storage} from '@/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['error', 'status'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk),
);
export const persistor = persistStore(store);
