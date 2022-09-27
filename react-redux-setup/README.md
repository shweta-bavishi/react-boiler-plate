# Steps for integrating redux to react project:

1. npm i redux react-redux
2. Create store in main index file


File index.js: 

```
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
```


3. Wrap the whole application with Provider, passing store inside the provider

File index.js

```
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

4. Adding root reducer function

File reducer/index.js

```
export default () => {};
```
