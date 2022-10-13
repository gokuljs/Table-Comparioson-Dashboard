import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import React, { Dispatch } from "react";
import { DummyDatasetProps } from "../../../Pages/Dashboard/types";
import CircularProgressBar from "./components/circularProgessBar";
import { Table } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from "./styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { DummyDataDeleteProps } from "./types";

function TableCard({
  data,
  setDummyDataSet,
  dummyDataSet,
  setShowDetailedFundingHistory,
  showDetailedFundingHistory,
}: {
  data: DummyDatasetProps;
  dummyDataSet: DummyDatasetProps[];
  setShowDetailedFundingHistory: Dispatch<boolean>;
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
  showDetailedFundingHistory: boolean;
}) {
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
    <div>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell className="table-cell" align="center">
              <Grid item lg={12}>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  align-item="center"
                >
                  <CloseIcon
                    className="closeIcon"
                    onClick={() => deleteCompanyCard(data)}
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <img alt="company-logo" className="logo" src={data?.image} />
                  <Grid className="title">{data?.title}</Grid>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table-cell progress-bar" align="center">
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgressBar value={data?.overallScore} />
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
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.PRODUCT_DESCRIPTION)
                      }
                      className="close-icon-red"
                    />
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
                  <Grid>{data?.fundingHistory?.funding}</Grid>
                  <Grid>
                    <CancelRoundedIcon
                      onClick={() =>
                        deleteData(DummyDataDeleteProps.FUNDING_HISTORY)
                      }
                      className="close-icon-red"
                    />
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
    </div>
  );
}

export default TableCard;
