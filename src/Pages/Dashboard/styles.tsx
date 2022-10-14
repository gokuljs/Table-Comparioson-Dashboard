import { Grid, styled } from "@mui/material";

export const DashboardWrapper = styled(Grid)`
  width: fit-content;

  /* border: 1px solid black; */
  min-width: 14rem;
  .add-criteria {
    padding: 10px;
    color: #958e8e;
    border: 1px solid #e4ece7;
    border-radius: 0.125rem;
    text-transform: uppercase;
    font-size: 0.725rem;
  }
  .add-criteria-text {
    position: relative;
    cursor: pointer;
  }
`;

export const DifferentCriteria = styled(Grid)(
  ({ showCriteria }: { showCriteria: boolean }) => ({
    borderLeft: "2px solid #d6dbd8",
    borderRight: "2px solid #d6dbd8",
    borderRadius: "8px",
    position: "absolute",
    zIndex: "9",
    display: showCriteria ? "block" : "none",
    background: "#fff",
    minWidth: "7rem",
    left: "1rem",
    padding: 0,
    cursor: "pointer",
    top: "1.5rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    ".criteria-list": {
      padding: "0.8rem 0.725rem",
      borderTop: "0.5px solid #d6dbd8",
      borderRadius: "3px",
      margin: 0,
    },
  })
);
