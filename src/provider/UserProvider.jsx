import React, { useState } from "react";
import ParentComponent from "../components/ParentComponent";

// Bước 1: Tạo ngữ cảnh
export const UserContext = React.createContext();

export default function UserProvider() {
  const [userName, setUserName] = useState("Nguyễn Văn A");
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 21,
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      age: 21,
    },
  ];

  const handleChangeName = () => {
    setUserName("Nguyễn Văn B");
  };

  return (
    <UserContext.Provider value={{ userName, handleChangeName, users }}>
      <ParentComponent />
    </UserContext.Provider>
  );
}
