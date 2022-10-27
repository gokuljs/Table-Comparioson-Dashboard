import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import {
  CriteriaType,
  DummyDatasetProps,
} from "../../../Pages/Dashboard/types";
import CircularProgressBar from "./components/circularProgessBar";
import {
  CompanyCloseIcon,
  Note,
  OverAllScrollText,
  Table,
  TableElementText,
  Title,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from "./styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { DummyDataDeleteProps, TableCardProps } from "./types";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import InputFieldTableCell from "./components/inputFieldTableCell";

function TableCard({
  data,
  setDummyDataSet,
  dummyDataSet,
  setShowDetailedFundingHistory,
  showDetailedFundingHistory,
  chooseCriteria,
  setChooseCriteria,
  index,
  setNewVendor,
  criteriaStatus,
}: TableCardProps) {
  const deleteCompanyCard = (data: DummyDatasetProps) => {
    dummyDataSet.splice(
      dummyDataSet.findIndex((value) => value.id === data.id),
      1
    );
    setDummyDataSet([...dummyDataSet]);
  };

  const deleteData = (deleteAttribute: DummyDataDeleteProps) => {
    const tempArray = [...dummyDataSet];
    tempArray.forEach((value) => {
      if (
        deleteAttribute === DummyDataDeleteProps.PRODUCT_DESCRIPTION &&
        value?.productDescription
      ) {
        delete value?.productDescription;
      } else if (
        deleteAttribute === DummyDataDeleteProps.FUNDING_HISTORY &&
        value?.fundingHistory
      ) {
        delete value?.fundingHistory;
      }
    });
    setDummyDataSet([...tempArray]);
  };
  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell className="table-cell-header" align="center">
            <Grid item lg={12}>
              <CompanyCloseIcon
                item
                display="flex"
                justifyContent="flex-end"
                align-item="center"
                className="close-icon-container"
                required={data.id === "0" && dummyDataSet.length >= 5}
              >
                {data.id !== "0" && (
                  <CloseIcon
                    className="closeIcon"
                    onClick={() => deleteCompanyCard(data)}
                  />
                )}
              </CompanyCloseIcon>

              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
                className="company-logo-container"
              >
                {data?.id === "0" && dummyDataSet.length >= 5 ? (
                  <Note>
                    Note:To add more Vendors to compare you need to remove to
                    first remove one or more vendors.At a time maximum of fou
                    vendors are allowed to compare.
                  </Note>
                ) : (
                  <>
                    <img
                      alt="company-logo"
                      className="logo"
                      src={data?.image}
                    />
                    <Title
                      onClick={() => {
                        setNewVendor(true);
                      }}
                      isVendor={data?.id === "0"}
                    >
                      {data?.title}
                    </Title>
                  </>
                )}
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className="table-cell-progress-bar progress-bar"
            align="left"
          >
            <Grid
              item
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              {data?.overallScore ? (
                <CircularProgressBar value={data?.overallScore} />
              ) : (
                <OverAllScrollText>Overall Score</OverAllScrollText>
              )}
            </Grid>
          </TableCell>
        </TableRow>
        {data?.productDescription && (
          <TableRow>
            <TableCell className="table-cell" align="left">
              <Text>
                <Grid>
                  <TableElementText>
                    {data?.productDescription}
                  </TableElementText>
                </Grid>
                <Grid>
                  {" "}
                  {data.id === "0" && (
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.PRODUCT_DESCRIPTION)
                      }
                      className="circled-cancel-icon"
                    />
                  )}
                </Grid>
              </Text>
            </TableCell>
          </TableRow>
        )}
        {data?.fundingHistory && (
          <TableRow>
            <TableCell
              className="table-cell"
              align="left"
              onClick={() => {
                setShowDetailedFundingHistory(!showDetailedFundingHistory);
              }}
            >
              <Text>
                <Grid display="flex" alignItems="center">
                  <TableElementText>
                    {data?.fundingHistory?.funding}
                  </TableElementText>

                  {data.id === "0" && (
                    <>
                      {showDetailedFundingHistory ? (
                        <ArrowDropUpTwoToneIcon />
                      ) : (
                        <ArrowDropDownTwoToneIcon />
                      )}
                    </>
                  )}
                </Grid>
                <Grid>
                  {data.id === "0" && (
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.FUNDING_HISTORY)
                      }
                      className="circled-cancel-icon"
                    />
                  )}
                </Grid>
              </Text>
            </TableCell>
          </TableRow>
        )}
        {data?.fundingHistory &&
          data?.fundingHistory?.history &&
          showDetailedFundingHistory && (
            <>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <TableElementText>
                    {" "}
                    {data?.fundingHistory?.history?.founded}
                  </TableElementText>
                </TableCell>
              </TableRow>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <TableElementText>
                    {data?.fundingHistory?.history?.keyInvestors}
                  </TableElementText>
                </TableCell>
              </TableRow>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <TableElementText>
                    {data?.fundingHistory?.history?.founders}
                  </TableElementText>
                </TableCell>
              </TableRow>
            </>
          )}
        {(data.companyInfo || chooseCriteria === CriteriaType.COMPANY_INFO) &&
          criteriaStatus.companyInfo && (
            <InputFieldTableCell
              data={data}
              id={data?.id}
              value={data.companyInfo}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              chooseCriteria={chooseCriteria}
              setChooseCriteria={setChooseCriteria}
              deleteAttribute={DummyDataDeleteProps.COMPANY_INFO}
            />
          )}
        {(data.features || chooseCriteria === CriteriaType.FEATURES) &&
          criteriaStatus.features && (
            <InputFieldTableCell
              data={data}
              id={data?.id}
              value={data.features}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              chooseCriteria={chooseCriteria}
              setChooseCriteria={setChooseCriteria}
              deleteAttribute={DummyDataDeleteProps.FEATURES}
            />
          )}
        {(data.customerCaseStudies ||
          chooseCriteria === CriteriaType.CUSTOMER_CASE_STUDIES) &&
          criteriaStatus.customerCase && (
            <InputFieldTableCell
              data={data}
              id={data?.id}
              value={data.customerCaseStudies}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              chooseCriteria={chooseCriteria}
              setChooseCriteria={setChooseCriteria}
              deleteAttribute={DummyDataDeleteProps.CUSTOMER_CASE_STUDIES}
            />
          )}
      </TableBody>
    </Table>
  );
}

export default TableCard;
