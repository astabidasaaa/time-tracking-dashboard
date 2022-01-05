import React from "react";
import IconWork from "../images/icon-work.svg";
import IconPlay from "../images/icon-play.svg";
import IconStudy from "../images/icon-study.svg";
import IconExercise from "../images/icon-exercise.svg";
import IconSocial from "../images/icon-social.svg";
import IconSelfCare from "../images/icon-self-care.svg";

const CardIcon = ({ id, size }) => {
  switch (id) {
    case "work":
      return <IconWork className="bg-icon" />;
    case "play":
      return <IconPlay className="bg-icon" />;
    case "study":
      return <IconStudy className="bg-icon" />;
    case "exercise":
      return <IconExercise className="bg-icon" />;
    case "social":
      return <IconSocial className="bg-icon" />;
    case "self-care":
      return <IconSelfCare className="bg-icon" />;
    default:
      return null;
  }
};

export default CardIcon;
