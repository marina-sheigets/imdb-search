import { Provider } from "react-redux";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { store } from "./redux/store";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ErrorBoundary>
          <HeaderComponent />
          <MainComponent />
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
