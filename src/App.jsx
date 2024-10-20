import "./App.css";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoUseReducer from "./components/DemoUseReducer";
import DemoUseRef from "./components/DemoUseRef";
import DemoUseState from "./components/DemoUseState";
import ParentComponent from "./components/ParentComponent";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    <>
      {/* <DemoUseState /> */}

      {/* <DemoUseEffect /> */}

      {/* <DemoUseReducer /> */}

      {/* <UserProvider></UserProvider> */}

      <DemoUseRef />
    </>
  );
}

export default App;
