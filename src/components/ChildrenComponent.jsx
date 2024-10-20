import React from "react";
import GrandChildrenComponent from "./GrandChildrenComponent";

export default function ChildrenComponent() {
  return (
    <div>
      <h1>ChildrenComponent</h1>
      <GrandChildrenComponent />
    </div>
  );
}
