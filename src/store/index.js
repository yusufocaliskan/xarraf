import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

//Reducers
import languages from './languages';
import country from './country';
import app from './app';

// import {setToken} from '../services/targetClient';
// import {setSipayToken} from '../services/siPayApiClient';

const reducers = combineReducers({
  languages,
  country,
  app,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

//Persis config
//set to localstore
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['languages', 'app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
  // Add other middlewares specific to development here if needed
];

const configuredStore = configureStore({
  reducer: persistedReducer,
  middleware: () => {
    const middlewares = middleware;

    return middlewares;
  },
});

//Set the token to apiCenter header
const onRehydrate = () => {
  // setToken();
  // setSipayToken();
};

const persistor = persistStore(configuredStore, {}, onRehydrate);
export {configuredStore as store, persistor};
