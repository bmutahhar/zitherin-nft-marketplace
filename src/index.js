import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./App";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
