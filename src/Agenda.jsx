import React from "react";
import "@pqina/flip/dist/flip.min.css";
import "./App.css";

export default function Agenda() {
  const agenda = process.env.PUBLIC_URL + "/agenda.jpg";
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
          <a href="https://www.google.com/maps/place/THE+STORM+Pub+%26+Restaurant/@11.5632292,104.9093156,17z/data=!3m1!4b1!4m6!3m5!1s0x31095113843dbe77:0x74b1946f62070385!8m2!3d11.5632292!4d104.9093156!16s%2Fg%2F11gc8b5652?entry=ttu">
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
