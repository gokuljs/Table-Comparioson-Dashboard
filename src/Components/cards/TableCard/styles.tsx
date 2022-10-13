import { Grid, styled, Table as muiTable } from "@mui/material";

export const TableCard = styled(Grid)`
  min-width: 3rem;
  width: 100%;
  border: 1px solid black;
`;

export const Table = styled(muiTable)`
  border: 1px solid rgba(224, 224, 224, 1);
  min-width: 14rem;
  .table-cell {
    padding: 0.725rem 1rem;
    min-height: 10rem;
  }
  .logo {
    height: 3rem;
  }
  .title {
    font-size: 0.725rem;
  }
`;
