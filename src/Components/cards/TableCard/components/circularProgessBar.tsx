import React from "react";
import { ProgressBarContainer } from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const progressBarWarning = (value: number) => {
  switch (true) {
    case value <= 3:
      return {
        textColor: "red",
        pathColor: "red",
        trailColor: "#e4ece7",
        backgroundColor: "#f6000020",
      };
    case value > 3 && value <= 6:
      return {
        textColor: "#f5bf0d",
        pathColor: "#f5bf0d",
        trailColor: "#e4ece7",
        backgroundColor: "#edd00f1f",
      };
    default:
      return {
        textColor: "green",
        pathColor: "green",
        trailColor: "#e4ece7",
        backgroundColor: "#0ad10a1f",
      };
  }
};
function CircularProgressBar({ value }: { value: number }) {
  return (
    <ProgressBarContainer>
      <CircularProgressbar
        value={value}
        text={`${value}`}
        minValue={1}
        maxValue={10}
        background={true}
        styles={buildStyles(progressBarWarning(value))}
      />
    </ProgressBarContainer>
  );
}

export default CircularProgressBar;
