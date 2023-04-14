import { createStore } from "redux";
import rootReducers from "./Reducer/index";

const Store = createStore(
  rootReducers,
  
);

export default Store;
