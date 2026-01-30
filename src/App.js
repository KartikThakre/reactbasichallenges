import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import DynamicList from "./components/DynamicList/DynamicList";
function App() {
  return (
    <div className="App">
      {/* <ToggleButton /> */}
      <DynamicList />
    </div>
  );
}

export default App;
