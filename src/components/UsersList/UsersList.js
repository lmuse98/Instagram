import React  from "react";
import styles from "./UsersList.module.css";
import PrivateLink from "../Route/PrivateLink";
import { useSelector } from "react-redux";

const UsersList = () => {

  const { users } = useSelector((state) => state.users);

  return (
    <div>
      {users.map((user, index) => (
        <PrivateLink
          to={`/Profile/${user.id}`}
          key={user.id}
          index={index}
          user={user}
          className={styles.displayOnlineUsers}
        >
          {" "}
          -{user.name} {user.surname}
          <br></br>{" "}
        </PrivateLink>
      ))}
    </div>
  );
};

export default UsersList;