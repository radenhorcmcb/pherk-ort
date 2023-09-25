import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import Marquee from "react-fast-marquee";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const tea = process.env.PUBLIC_URL + "/tea.jpeg";
  const dataSponsor = [tea, tea, tea, tea, tea, tea, tea, tea, tea];
  return (
    <div className="App">
      <div
        style={{
          paddingTop: 50,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div>
          <img
            onClick={() => {}}
            width={100}
            style={{ objectFit: "contain", alignSelf: "center" }}
            src={process.env.PUBLIC_URL + "/clickhere.gif"}
            alt="new"
          />
        </div>

        <a href="/agenda">
          <img
            onClick={() => {}}
            width={100}
            style={{ objectFit: "contain", alignSelf: "center" }}
            src={process.env.PUBLIC_URL + "/29.png"}
            alt="new"
          />
        </a>
        <p style={{ fontSize: 30 }}>Save the date 29/09/2023</p>
        <p style={{ fontSize: 20 }}>Let countdown</p>
        <div style={{ fontSize: 100 }}>
          <FlipDate value={"80"} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            marginTop: 40,
            width: "100%",
            justifyContent: "space-around",
            overflow: "hidden",
          }}
        >
          <Marquee gradientWidth={200} speed={50}>
            <Space />
            <Card
              role={"🍆 សហស្ថាបនិក ២៩ កញ្ញា 🍆"}
              url={process.env.PUBLIC_URL + "/kh.png"}
            />
            <Space />
            <Card
              role={"🍆 ស្ថាបនិកធំ ២៩ កញ្ញា 🍆"}
              url={process.env.PUBLIC_URL + "/pd.png"}
            />
            <Space />
            <Card
              role={"🍆 Gym Manager 🍆"}
              url={process.env.PUBLIC_URL + "/nr.png"}
            />
          </Marquee>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            marginTop: 100,
            width: "100%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space />
          <Space />
          <p style={{ fontSize: 30 }}>សហការចូលរូមឧបត្ថម្ភដោយ</p>
          <Space />
          <a target="_blank" href="https://telegram.me/S_Pheakdey">
            <img
              onClick={() => {}}
              width={100}
              style={{ objectFit: "contain", alignSelf: "center" }}
              src={process.env.PUBLIC_URL + "/telegram.png"}
              alt="new"
            />
          </a>
        </div>

        <Marquee gradientWidth={200} speed={100}>
          {dataSponsor.map((url) => {
            return (
              <>
                <Space />
                <img width={400} src={url} alt="new" />
                <p style={{ fontSize: 30, color: "#EE9322" }}>តែជ្រក់អត់ស្ករ</p>
              </>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default App;

const Space = () => <div style={{ width: 30 }} />;

const Card = ({ url, role }) => (
  <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
    <img src={url} alt="new" />
    <p style={{ fontSize: 28, fontWeight: "bold" }}> {role}</p>
  </div>
);

export const FlipDate = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const offset = new Date();
    const date1 = dayjs("2023-09-29");
    const date2 = dayjs();

    let hours = date1.diff(date2, "hours");
    const days = Math.floor(hours / 24);
    hours = hours - days * 24;

    console.log("Days: ", days);
    console.log("Hours: ", hours);
    const diffDays = days;

    const timeDuration = Tick.helper.duration(diffDays, "days");

    // add 24 hours to get final deadline
    const deadline = new Date(
      offset.setMilliseconds(offset.getMilliseconds() + timeDuration)
    );

    const counter = Tick.count.down(deadline, {
      format: ["d", "h", "m", "s"],
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true">
        <span data-view="flip" />
      </div>
    </div>
  );
};
