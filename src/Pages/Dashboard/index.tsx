import { Grid } from "@mui/material";
import React from "react";
import TableCard from "../../Components/cards/TableCard";
import { DashboardWrapper } from "./styles";

function Dashboard() {
  return (
    <DashboardWrapper>
      <div className="add-criteria">Add criteria</div>
      <Grid display="flex" flexWrap="nowrap">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </Grid>
    </DashboardWrapper>
  );
}

export default Dashboard;
