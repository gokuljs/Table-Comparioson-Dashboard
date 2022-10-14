import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import React, { Dispatch } from "react";
import { DummyDatasetProps } from "../../../Pages/Dashboard/types";
import CircularProgressBar from "./components/circularProgessBar";
import { Table } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from "./styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { DummyDataDeleteProps, TableCardProps } from "./types";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";

function TableCard({
  data,
  setDummyDataSet,
  dummyDataSet,
  setShowDetailedFundingHistory,
  showDetailedFundingHistory,
}: TableCardProps) {
  const deleteCompanyCard = (data: DummyDatasetProps) => {
    dummyDataSet.splice(
      dummyDataSet.findIndex((value) => value.id === data.id),
      1
    );
    setDummyDataSet([...dummyDataSet]);
  };

  const deleteData = (deleteAttribute: DummyDataDeleteProps) => {
    dummyDataSet.forEach((value) => {
      if (deleteAttribute === DummyDataDeleteProps.PRODUCT_DESCRIPTION) {
        delete value.productDescription;
      } else if (deleteAttribute === DummyDataDeleteProps.FUNDING_HISTORY) {
        delete value.fundingHistory;
      }
      //   else if()
    });
    setDummyDataSet([...dummyDataSet]);
  };

  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell className="table-cell-header" align="center">
            <Grid lg={12}>
              <Grid
                item
                display="flex"
                justifyContent="flex-end"
                align-item="center"
              >
                {data.id !== 0 && (
                  <CloseIcon
                    className="closeIcon"
                    onClick={() => deleteCompanyCard(data)}
                  />
                )}
              </Grid>
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {data?.id === 0 && dummyDataSet.length >= 5 ? (
                  <Text>
                    Note:To add more Vendors to compare you need to remove to
                    first remove one or more vendors.At a time maximum of fou
                    vendors are allowed to compare.
                  </Text>
                ) : (
                  <>
                    <img
                      alt="company-logo"
                      className="logo"
                      src={data?.image}
                    />
                    <Grid className="title">{data?.title}</Grid>
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
                <>Overall Score</>
              )}
            </Grid>
          </TableCell>
        </TableRow>{" "}
        {data?.productDescription && (
          <TableRow>
            <TableCell className="table-cell" align="left">
              <Text>
                <Grid>{data?.productDescription}</Grid>
                <Grid>
                  {" "}
                  {data.id === 0 && (
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.PRODUCT_DESCRIPTION)
                      }
                      className="close-icon-red"
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
                  {data?.fundingHistory?.funding}
                  {data.id === 0 && (
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
                  {data.id === 0 && (
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.FUNDING_HISTORY)
                      }
                      className="close-icon-red"
                    />
                  )}
                </Grid>
              </Text>
            </TableCell>
          </TableRow>
        )}{" "}
        {data?.fundingHistory &&
          data?.fundingHistory?.history &&
          showDetailedFundingHistory && (
            <>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <Text> {data?.fundingHistory?.history?.founded}</Text>
                </TableCell>
              </TableRow>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <Text>{data?.fundingHistory?.history?.keyInvestors}</Text>
                </TableCell>
              </TableRow>
              <TableRow className="funding-history-table-row">
                <TableCell
                  className="table-cell funding-history-table-cell"
                  align="left"
                >
                  <Text>{data?.fundingHistory?.history?.Founders}</Text>
                </TableCell>
              </TableRow>
            </>
          )}
      </TableBody>
    </Table>
  );
}

export default TableCard;
