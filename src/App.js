import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import DynamicList from "./components/DynamicList/DynamicList";
import FormValidation from "./components/FormValidation/FormValidation";
import CountDown from "./components/CountDown/CountDown";
import CounterLimits from "./components/CounterLimits/CounterLimits";
import Tabs from "./components/Tabs/Tabs";
import TogglePassword from "./components/TogglePassword/TogglePassword";
import ConditionalUI from "./components/ConditionalUI/ConditionalUI";
import TaskManager from "./components/TaskManager/TaskManager";
function App() {
  return (
    <div className="App">
      {/* <ToggleButton /> */}
      {/* <DynamicList /> */}
      {/* <FormValidation /> */}
      {/* <ConditionalUI /> */}
      {/* <CountDown /> */}
      {/* <TogglePassword /> */}
      {/* <CounterLimits/> */}
      {/* <Tabs/> */}
      <TaskManager />
    </div>
  );
}

export default App;
