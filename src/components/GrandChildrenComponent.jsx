import React, { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

export default function GrandChildrenComponent() {
  // Lấy giá trị từ context
  const { userName, handleChangeName, users } = useContext(UserContext);

  const handleChangeUserName = () => {
    handleChangeName();
  };

  return (
    <div>
      <h3>Name: {userName}</h3>
      <button onClick={handleChangeUserName}>Change Name</button>

      <ul>
        {/* {users.map((user, index) => (
          <li>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </li>
        ))} */}
        {users.map((user, index) => {
          return (
            <li key={user.id}>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
