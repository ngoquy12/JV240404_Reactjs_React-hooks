import React, { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildrenComponent />
    </div>
  );
}
