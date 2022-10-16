import { Grid, styled } from "@mui/material";

export const DashboardWrapper = styled(Grid)`
  width: fit-content;

  /* border: 1px solid black; */
  min-width: 14rem;
  .add-criteria {
    padding: 10px;
    border: 1px solid #e4e7ec;
    border-radius: 0.125rem;
    text-transform: uppercase;
    font-size: 0.725rem;
  }
  .add-criteria-text {
    color: #101828;
    font-size: 0.8rem;
    margin-left: 1rem;
    position: relative;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
  }
`;

export const DifferentCriteria = styled(Grid)(
  ({ showCriteria }: { showCriteria: boolean }) => ({
    position: "absolute",
    zIndex: "9",
    display: showCriteria ? "block" : "none",
    background: "#fff",
    minWidth: "15rem",
    left: "0rem",
    padding: 0,
    cursor: "pointer",
    top: "1.5rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    ".criteria-list": {
      padding: "1rem 0.725rem",
      borderTop: "0.5px solid #E4E7EC",
      margin: 0,
      color: "#101828",
      transition: "0.1s all ease-out",
      border: "2px solid transparent",
      ":hover": {
        border: "2px solid #A0A3F2",
        background: "#573FA7",
        color: "#EFEFFD",
      },
    },
  })
);
