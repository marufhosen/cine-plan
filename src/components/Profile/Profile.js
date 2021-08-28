import { Divider } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { userContext } from "../../App";
import "./Profile.css";

const Profile = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="profile-content">
      <h5>Name: {loggedInuser.name}</h5>
      <Divider></Divider>
      <h5>Email: {loggedInuser.email}</h5>
    </div>
  );
};

export default Profile;
