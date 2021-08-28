import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./BuyTicket.css";
import { useContext } from "react";
import { userContext } from "../../App";
import GetBuyingInfo from "../GetBuyingInfo/GetBuyingInfo";

const BuyTicket = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [buyTicket, setBuyTicket] = useState({});
  const handleOnBlur = (e) => {
    const ticketInfo = { ...buyTicket };
    ticketInfo[e.target.name] = e.target.value;
    setBuyTicket(ticketInfo);
  };
  const handleSubmit = (e) => {
    const ticketBooking = { ...loggedInuser, ...buyTicket };
    fetch("http://localhost:8000/buyTicket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketBooking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2 className="buy-ticket-header">We are appreciate you to choose us</h2>
      <div className="ticket-form">
        <form action="">
          <Form.Label>Choose Your Favorite Movie</Form.Label>
          <Form.Select
            onBlur={handleOnBlur}
            type="select"
            name="movieName"
            size="sm"
          >
            <option>Select Movie</option>
            <option value="No time to die">No time to die</option>
            <option value="F9: The Fast Saga">F9: The Fast Saga</option>
            <option value="Jungle Cruise">Jungle Cruise</option>
            <option value="The Green Knight">The Green Knight</option>
          </Form.Select>
          <Form.Label>Select Catagory</Form.Label>
          <Form.Check
            onBlur={handleOnBlur}
            type="radio"
            label="Regular"
            name="catagory"
            value="Regular"
          />
          <Form.Check
            onBlur={handleOnBlur}
            type="radio"
            label="Premium"
            name="catagory"
            value="Premium"
          />
          <Form.Label style={{ display: "block" }}>
            Choose seat amount:{" "}
          </Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            type="text"
            name="seat"
            placeholder="Enter seat"
          />
        </form>
        <Button onClick={handleSubmit}>CONFIRM</Button>
        {/* <p>
          Congratulation! {loggedInuser.name}, you booked {buyTicket.seat}{" "}
          premium ticket for {buyTicket.movieName}
        </p> */}
      </div>
      <GetBuyingInfo></GetBuyingInfo>
    </div>
  );
};

export default BuyTicket;
