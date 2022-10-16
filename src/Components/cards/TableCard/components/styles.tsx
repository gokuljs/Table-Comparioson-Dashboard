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
    padding: 0.25em 1rem;
    height: 3.5rem;
    min-width: 1rem;
  }
  .inputTextField {
    width: 85%;
    margin: 0;
    padding: 0.5rem 0.725rem;
    border: 1px solid rgb(228, 231, 236);
    color: #667085;
  }
  .circled-cancel-icon {
    color: #e00000;
    font-size: 1.5rem;
    padding: 0;
    cursor: pointer;
  }
`;
