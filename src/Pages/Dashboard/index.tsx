import { Grid } from "@mui/material";
import React, { useState } from "react";
import TableCard from "../../Components/cards/TableCard";
import { DashboardWrapper } from "./styles";
import { DummyDatasetProps } from "./types";
import { dummyDataset as dummyData } from "./utils";

function Dashboard() {
  const [dummyDataSet, setDummyDataSet] =
    useState<DummyDatasetProps[]>(dummyData);
  return (
    <DashboardWrapper>
      <div className="add-criteria">Add criteria</div>
      <Grid display="flex" flexWrap="nowrap">
        {Array.isArray(dummyDataSet) &&
          dummyDataSet.map((value) => (
            <TableCard
              data={value}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
            />
          ))}
      </Grid>
    </DashboardWrapper>
  );
}

export default Dashboard;
