import { Grid, styled, Table as muiTable } from "@mui/material";

export const TableCard = styled(Grid)`
  min-width: 3rem;
  width: 100%;
  border: 1px solid black;
`;

export const Table = styled(muiTable)`
  border: 1px solid rgba(224, 224, 224, 1);
  .table-cell-header {
    height: 6.8rem;
    padding: 0.25rem 0.5rem;
  }
  .table-cell-progress-bar {
    height: 4rem;
    margin: 0;
  }
  .table-cell {
    padding: 0.5em 1rem;
    height: 2.5rem;
    min-width: 1rem;
  }
  .logo {
    height: 3rem;
    width: 3rem;
    margin: 0;
    padding: 0;
  }

  .progress-bar {
    display: flex;
    justify-content: flex-start;
  }
  .closeIcon {
    color: #999d9f;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
  .close-icon-red {
    color: red;
    font-size: 1rem;
    cursor: pointer;
  }
  .funding-history-table-row:nth-child(odd) {
    .funding-history-table-cell {
      background: #c5dfe1;
    }
  }
  .inputTextField {
    width: 90%;
    padding: 0.5rem 0.725rem;
    border: 1px solid #e4e6e7;
  }
  .circle-tick-icon {
    color: green;
  }
  .table-cell-input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export const Title = styled(Grid)(
  ({ isVendor = false }: { isVendor: boolean }) => ({
    fontSize: "0.725rem",
    marginTop: "0.5rem",
    textTransform: "capitalize",
    cursor: isVendor ? "pointer" : "default",
    color: isVendor ? "blue" : "black",
    fontFamily: "Inter,sans-serif",
  })
);

export const Text = styled(Grid)`
  font-size: 0.725rem;
  font-style: Inter, sans-serif;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
