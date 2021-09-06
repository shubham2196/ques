import './App.css';
import Quiz from './Components/Quiz';
import { store } from './store';
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Quiz />
      </Provider>
    </div>
  );
}

export default App;
