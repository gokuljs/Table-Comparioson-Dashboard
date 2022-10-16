import { Grid, TableRow as muiTableRow } from "@mui/material";
import { styled } from "@mui/system";

export const ProgressBarContainer = styled(Grid)`
  height: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const TableRoW = styled(muiTableRow)`
  .circle-tick-icon {
    color: green;
  }
  .table-cell-input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 3rem;
  }
  .submit-button {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .table-cell {
    padding: 0.5em 1rem;
    height: 3rem;
    min-width: 1rem;
  }
  .inputTextField {
    width: 90%;
    margin: 0;
    padding: 0.5rem 0.725rem;
    border: 1px solid #e4e6e7;
  }
`;
