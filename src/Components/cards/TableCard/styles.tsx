import { Grid, styled, Table as muiTable } from "@mui/material";

export const TableCard = styled(Grid)`
  min-width: 3rem;
  width: 100%;
  border: 1px solid black;
`;

export const Table = styled(muiTable)`
  border: 1px solid #e4e7ec;
  min-width: 3rem;

  .table-cell-header {
    height: 7rem;
    padding: 0.25rem 0.5rem;
  }
  .table-cell-progress-bar {
    height: 4rem;
    margin: 0;
  }
  .company-logo-container {
    min-height: 4rem;
  }
  .table-cell {
    padding: 0.25em 1rem;
    height: 2.5rem;
    min-width: 1rem;
  }
  .logo {
    height: 3rem;
    width: 3rem;
    margin: 0;
    padding: 0;
    object-fit: contain;
  }

  .progress-bar {
    display: flex;
    justify-content: flex-start;
  }

  .closeIcon {
    color: #e4e7ec;
    font-size: 1.5rem;
    transition: 0.1s all ease-out;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
  .circled-cancel-icon {
    color: #e00000;
    font-size: 1.5rem;
    padding: 0;
    cursor: pointer;
  }
  .funding-history-table-row:nth-child(odd) {
    .funding-history-table-cell {
      background: #ecf2fc;
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
    fontSize: "0.8rem",
    marginTop: "0.725rem",
    textTransform: "capitalize",
    transition: "0.1s all ease-out",
    cursor: isVendor ? "pointer" : "default",
    color: isVendor ? "rgb(11, 92, 215)" : "black",
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
  font-family: sans-serif;
`;

export const Note = styled("p")`
  font-size: 0.7rem;
  color: rgb(11, 92, 215);
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
`;

export const TableElementText = styled("p")`
  font-size: 0.825rem;
  padding: 0;
  color: "#101828";
  text-transform: capitalize;
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
`;
export const OverAllScrollText = styled("p")`
  font-size: 1rem;
  padding: 0;
  color: "#101828";
  text-transform: capitalize;
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
`;

export const CompanyCloseIcon = styled(Grid)(
  ({ required }: { required: boolean }) => ({
    minHeight: "1.5rem",
    display: required ? "none" : "flex",
  })
);
