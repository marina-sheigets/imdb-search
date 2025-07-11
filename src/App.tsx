import { Provider } from "react-redux";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { store } from "./redux/store";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeToggleButton } from "./components/ThemeToggleButton/ThemeToggleButton";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="app">
          <ErrorBoundary>
            <HeaderComponent />
            <MainComponent />
            <ThemeToggleButton />
          </ErrorBoundary>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
