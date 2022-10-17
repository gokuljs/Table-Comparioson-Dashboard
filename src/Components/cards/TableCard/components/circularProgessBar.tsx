import React from "react";
import { ProgressBarContainer } from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressBarProps } from "./types";

const progressBarWarning = (value: number) => {
  switch (true) {
    case value <= 3:
      return {
        textColor: "#A20000",
        pathColor: "#E00000",
        trailColor: "#E4E7EC",
        backgroundColor: "#FFECEC",
      };
    case value > 3 && value <= 6:
      return {
        textColor: "#D16603",
        pathColor: "rgb(234, 120, 14)",
        trailColor: "#E4E7EC",
        backgroundColor: "#FFF2E7",
      };
    default:
      return {
        textColor: "#006836",
        pathColor: "#008243",
        trailColor: "#E4E7EC",
        backgroundColor: "#EBF5F0",
      };
  }
};
function CircularProgressBar({ value }: CircularProgressBarProps) {
  return (
    <ProgressBarContainer>
      {value && (
        <CircularProgressbar
          value={value}
          text={`${value}`}
          minValue={1}
          maxValue={10}
          background={true}
          styles={buildStyles(progressBarWarning(value))}
        />
      )}
    </ProgressBarContainer>
  );
}

export default CircularProgressBar;
