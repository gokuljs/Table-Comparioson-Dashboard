import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import TableCard from "../../Components/cards/TableCard";
import { DashboardWrapper, DifferentCriteria } from "./styles";
import { CriteriaStatusTypes, CriteriaType, DummyDatasetProps } from "./types";
import { dummyDataset as dummyData } from "./utils";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import useOutsideClick from "../../hooks/clickAway/useClickAway";
import DialogModal from "../../Components/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import Checkbox from "@mui/material/Checkbox";

function Dashboard() {
  const ref = useRef(null);

  const matches = useMediaQuery("(max-width:1000px)");
  const [dummyDataSet, setDummyDataSet] =
    useState<DummyDatasetProps[]>(dummyData);
  const [showDetailedFundingHistory, setShowDetailedFundingHistory] =
    useState<boolean>(false);
  const [showCriteria, setShowCriteria] = useState(false);
  const [showHideCriteria, setShowHideCriteria] = useState(false);
  const [chooseCriteria, setChooseCriteria] = useState<CriteriaType>(
    CriteriaType.DEFAULT
  );
  const [criteriaStatus, setCriteriaStatus] = useState<CriteriaStatusTypes>({
    companyInfo: true,
    features: true,
    customerCase: true,
  });
  const [addNewVendor, setNewVendor] = useState<boolean>(false);
  useOutsideClick(ref, () => {
    setShowCriteria(false);
  });

  console.log({ dummyDataSet }, "ssss");

  return (
    <DashboardWrapper>
      <Grid
        container
        lg={12}
        display="flex"
        justifyContent="space-between"
        className="add-criteria"
      >
        <Grid ref={ref} className="add-criteria-text">
          <Grid
            display="flex"
            alignItems="center"
            onClick={() => {
              setShowCriteria(!showCriteria);
            }}
          >
            Add criteria{" "}
            {showCriteria ? (
              <ArrowDropUpTwoToneIcon />
            ) : (
              <ArrowDropDownTwoToneIcon />
            )}
          </Grid>
          <DifferentCriteria showCriteria={showCriteria}>
            <Grid
              className="criteria-list"
              onClick={() => setChooseCriteria(CriteriaType.COMPANY_INFO)}
            >
              Company Info
            </Grid>
            <Grid
              className="criteria-list"
              onClick={() => setChooseCriteria(CriteriaType.FEATURES)}
            >
              Features
            </Grid>
            <Grid
              className="criteria-list"
              onClick={() =>
                setChooseCriteria(CriteriaType.CUSTOMER_CASE_STUDIES)
              }
            >
              Customer Cases Studies
            </Grid>
          </DifferentCriteria>
        </Grid>
        <Grid className="add-criteria-text">
          <Grid
            onClick={() => setShowHideCriteria(!showHideCriteria)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Hide criteria{" "}
            {showHideCriteria ? (
              <ArrowDropUpTwoToneIcon />
            ) : (
              <ArrowDropDownTwoToneIcon />
            )}
          </Grid>
          <DifferentCriteria showCriteria={showHideCriteria}>
            <Grid
              className="criteria-list"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() =>
                setCriteriaStatus({
                  ...criteriaStatus,
                  companyInfo: !criteriaStatus?.companyInfo,
                })
              }
            >
              Company Info
              <Checkbox
                checked={
                  criteriaStatus?.companyInfo && !!dummyDataSet[0].companyInfo
                }
              />
            </Grid>
            <Grid
              className="criteria-list"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() =>
                setCriteriaStatus({
                  ...criteriaStatus,
                  features: !criteriaStatus?.features,
                })
              }
            >
              Features
              <Checkbox
                checked={criteriaStatus?.features && !!dummyDataSet[0].features}
              />
            </Grid>
            <Grid
              className="criteria-list"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() =>
                setCriteriaStatus({
                  ...criteriaStatus,
                  customerCase: !criteriaStatus?.customerCase,
                })
              }
            >
              Customer Cases Studies
              <Checkbox
                checked={
                  criteriaStatus?.customerCase &&
                  !!dummyDataSet[0].customerCaseStudies
                }
              />
            </Grid>
          </DifferentCriteria>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        container
        lg={12}
        flexWrap={matches ? "wrap" : "nowrap"}
      >
        {Array.isArray(dummyDataSet) &&
          dummyDataSet.map((value, index) => (
            <TableCard
              data={value}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              setShowDetailedFundingHistory={setShowDetailedFundingHistory}
              showDetailedFundingHistory={showDetailedFundingHistory}
              chooseCriteria={chooseCriteria}
              setChooseCriteria={setChooseCriteria}
              index={index}
              setNewVendor={setNewVendor}
              criteriaStatus={criteriaStatus}
            />
          ))}
      </Grid>
      <DialogModal
        open={addNewVendor}
        handleClose={() => {
          setNewVendor(false);
        }}
        dummyDataSet={dummyDataSet}
        setDummyDataSet={setDummyDataSet}
      />
    </DashboardWrapper>
  );
}

export default Dashboard;
