import { Grid } from "@mui/material";
import React, { useState } from "react";
import TableCard from "../../Components/cards/TableCard";
import { DashboardWrapper, DifferentCriteria } from "./styles";
import { DummyDatasetProps } from "./types";
import { dummyDataset as dummyData } from "./utils";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";

function Dashboard() {
  const [dummyDataSet, setDummyDataSet] =
    useState<DummyDatasetProps[]>(dummyData);
  const [showDetailedFundingHistory, setShowDetailedFundingHistory] =
    useState<boolean>(false);
  const [showCriteria, setShowCriteria] = useState(false);

  return (
    <DashboardWrapper>
      <div className="add-criteria">
        <div
          className="add-criteria-text"
          onClick={() => {
            setShowCriteria(!showCriteria);
          }}
        >
          <Grid display="flex" alignItems="center">
            Add criteria{" "}
            {showCriteria ? (
              <ArrowDropUpTwoToneIcon />
            ) : (
              <ArrowDropDownTwoToneIcon />
            )}
          </Grid>
          <DifferentCriteria showCriteria={showCriteria}>
            <Grid className="criteria-list">Company Info</Grid>
            <Grid className="criteria-list">Features</Grid>
            <Grid className="criteria-list">Customer Cases Studies</Grid>
          </DifferentCriteria>
        </div>
      </div>

      <Grid display="flex" flexWrap="nowrap">
        {Array.isArray(dummyDataSet) &&
          dummyDataSet.map((value) => (
            <TableCard
              data={value}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              setShowDetailedFundingHistory={setShowDetailedFundingHistory}
              showDetailedFundingHistory={showDetailedFundingHistory}
            />
          ))}
      </Grid>
    </DashboardWrapper>
  );
}

export default Dashboard;
