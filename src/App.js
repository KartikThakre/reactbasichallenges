import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import DynamicList from "./components/DynamicList/DynamicList";
import FormValidation from "./components/FormValidation/FormValidation";
import CountDown from "./components/CountDown/CountDown";
//import ConditionalUI from "./components/ConditionalUI/ConditionalUI";
function App() {
  return (
    <div className="App">
      {/* <ToggleButton /> */}
      {/* <DynamicList /> */}
      {/* <FormValidation /> */}
      {/* <ConditionalUI /> */}
      <CountDown />
    </div>
  );
}

export default App;
