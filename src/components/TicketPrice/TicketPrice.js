import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./TicketPrice.css";

const TicketPrice = () => {
  return (
    <Container>
      <div className="ticket-container">
        <div className="ticket-price">
          <h4 style={{ marginBottom: 40 }}>CinePlan Ticket Price</h4>
          <h5>2D Movies:</h5>
          <div>
            <h6>Friday/Saturday & holidays:</h6>
            <p>Regular seat- 400.00</p>
            <p>Premium seat- 450.00</p>
          </div>
          <div>
            <h6>Sunday through Thursday:</h6>
            <p>Regular seat- 350.00</p>
            <p>Premium seat- 400.00</p>
          </div>
          <h5>3D Movies:</h5>
          <div>
            <h6>Friday/Saturday & holidays:</h6>
            <p>Regular seat- 500.00</p>
            <p>Premium seat- 550.00</p>
          </div>
          <div>
            <h6>Sunday through Thursday:</h6>
            <p>Regular seat- 450.00</p>
            <p>Premium seat- 500.00</p>
          </div>
        </div>
        <div className="movie-trailer">
          <ReactPlayer
            className="play-trailer"
            width="80"
            url="https://www.youtube.com/watch?v=BIhNsAtPbPI"
          />
          <ReactPlayer
            className="play-trailer"
            width="80"
            url="https://www.youtube.com/watch?v=CmRih_VtVAs"
          />
        </div>
      </div>
    </Container>
  );
};

export default TicketPrice;
