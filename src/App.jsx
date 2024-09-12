import React from "react";
import UseStateDemo from "./components/UseStateDemo";
import "./App.css";
import Tab from "./components/Tab";
import UseEffectDemo from "./components/UseEffectDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import ChildrenComponent from "./components/ChildrenComponent";
import GrandChildrenComponent from "./components/GrandChildrenComponent";
import Todolist from "./components/Todolist";

export default function App() {
  return (
    <div>
      {/* <UseStateDemo /> */}
      {/* <Tab /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseReducerDemo />
      <ChildrenComponent />
      <GrandChildrenComponent /> */}
      <Todolist />
    </div>
  );
}
