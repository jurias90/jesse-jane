import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div>
      <p>First Name: {user.firstName}</p>

      <p>Last Name: {user.lastName}</p>

      <p>Address: {user.address}</p>

      <p>City: {user.city}</p>

      <p>State: {user.state}</p>

      <p>Zipcode: {user.zipcode}</p>

      <p>Email: {user.email}</p>

      <p>UserName: {user.username}</p>

      <p>Password: {user.password}</p>
    </div>
  );
};

export default User;
