import React from "react";
import "@pqina/flip/dist/flip.min.css";
import "./App.css";

export default function Agenda() {
  const agenda = process.env.PUBLIC_URL + "/agd.jpg";
  return (
    <div className="App">
      <div
        style={{
          paddingTop: 50,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div style={{
          padding: 100
        }}>
          <a href="https://www.google.com/maps/place/TOP+Afterwork+Pub/@11.5789591,104.907656,17z/data=!3m1!4b1!4m6!3m5!1s0x310951c6ffce1461:0x67c8ef6f91508df8!8m2!3d11.5789591!4d104.9102309!16s%2Fg%2F11t1jdnmwx?entry=ttu">
            Our Location
          </a>
        </div>
        <img
          style={{ objectFit: "contain", alignSelf: "center" }}
          src={agenda}
          alt="new"
        />
      </div>
    </div>
  );
}
