import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];

const persistConfig = {
  key: "customerJourney",
  storage: storage,
};

const persistantReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistantReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export { store, persistor };
