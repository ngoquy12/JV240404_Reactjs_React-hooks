import React from "react";
import UseStateDemo from "./components/UseStateDemo";
import "./App.css";
import Tab from "./components/Tab";
import UseEffectDemo from "./components/UseEffectDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import ChildrenComponent from "./components/ChildrenComponent";
// import GrandChildrenComponent from "./components/GrandChildrenComponent";
import Todolist from "./components/Todolist";
import UseRefDemo from "./components/UseRefDemo";
import ParentComponent from "./components/ParentComponent";
import UseMemoDemo from "./components/UseMemoDemo";

export default function App() {
  return (
    <div>
      {/* <UseStateDemo /> */}
      {/* <Tab /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseReducerDemo />
      <ChildrenComponent />
      <GrandChildrenComponent /> */}
      {/* <Todolist /> */}
      {/* <UseRefDemo /> */}

      {/* <ParentComponent /> */}
      <UseMemoDemo />
    </div>
  );
}
