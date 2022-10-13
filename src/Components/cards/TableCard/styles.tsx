import { Grid, styled, Table as muiTable } from "@mui/material";

export const TableCard = styled(Grid)`
  min-width: 3rem;
  width: 100%;
  border: 1px solid black;
`;

export const Table = styled(muiTable)`
  border: 1px solid rgba(224, 224, 224, 1);
  min-width: 5rem;
  .table-cell {
    padding: 0.725rem 1rem;
    min-height: 5rem;
    min-width: 15rem;
  }
  .logo {
    height: 3rem;
    width: 3rem;
    margin: 0;
    padding: 0;
  }
  .title {
    font-size: 0.725rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
  }
  .progress-bar {
    display: flex;
    justify-content: center;
  }
  .closeIcon {
    color: #999d9f;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Text = styled(Grid)`
  font-size: 0.725rem;
  font-style: Inter, sans-serif;
  text-transform: capitalize;
`;
