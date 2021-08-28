import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../App";

const GetBuyingInfo = () => {
  const [buyingInfo, setBuyingInfo] = useState([]);
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  useEffect(() => {
    fetch("http://localhost:8000/buying?email=" + loggedInuser.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBuyingInfo(data));
  }, []);
  console.log(buyingInfo);
  return (
    <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
      <h5>Your Booking History</h5>
      <div>
        {buyingInfo.map((buying) => (
          <p
            key={buying._id}
            style={{ margin: 30, border: "1px solid purple", padding: 20 }}
          >
            Name: {buying.name}, Ticket Type: {buying.catagory}, Seat:{" "}
            {buying.seat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GetBuyingInfo;
