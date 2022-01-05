import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import CardUI from "../components/CardUI";
import data from "../data/data.json";
import PageStyle from "../styles/MainPageStyle";

const IndexPage = () => {
  const [timeFrame, setTimeFrame] = useState("daily");

  useEffect(() => {
    document
      .getElementById(`${timeFrame}-button`)
      .classList.toggle("button-active", true);
    return () => {
      document
        .getElementById(`${timeFrame}-button`)
        .classList.toggle("button-active", false);
    };
  }, [timeFrame]);

  const handleClick = (e) => {
    setTimeFrame(e.target.value);
  };

  return (
    <PageStyle>
      <div id="grid-container">
        <div id="profile" className="card-ui">
          <div id="profile-identifier">
            <StaticImage
              src="../images/image-jeremy.png"
              alt="foto jeremy"
              id="profile-picture"
            />
            <div id="profile-name">
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <ul id="timeframe-menu">
            <li>
              <button
                id="daily-button"
                type="button"
                value="daily"
                onClick={handleClick}
              >
                Daily
              </button>
            </li>
            <li>
              <button
                id="weekly-button"
                type="button"
                value="weekly"
                onClick={handleClick}
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                id="monthly-button"
                type="button"
                value="monthly"
                onClick={handleClick}
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>
        {data.map((datum) => {
          const id = datum.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <CardUI datum={datum} id={id} timeFrame={timeFrame} key={id} />
          );
        })}
      </div>
      <p id="author">
        Coded by:{" "}
        <a
          href="https://sngkr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sngkr
        </a>
      </p>
    </PageStyle>
  );
};

export default IndexPage;
