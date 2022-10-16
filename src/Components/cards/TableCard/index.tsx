import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CriteriaType,
  DummyDatasetProps,
} from "../../../Pages/Dashboard/types";
import CircularProgressBar from "./components/circularProgessBar";
import { Table, Title } from "./styles";
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
}: TableCardProps) {
  const [addingDummyData, setAddingDummyData] = useState<DummyDatasetProps>({
    id: 1,
    image:
      "data:image/png;base64,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",
    title: "google",
    overallScore: Math.floor(Math.random() * 10 + 1),
    productDescription: "google cloud",
    fundingHistory: {
      funding: "raised 3 million from alphabet",
      history: {
        founded: "1956",
        keyInvestors: "IndexVentures",
        Founders: "cred",
      },
    },
  });

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
        delete addingDummyData?.productDescription;
      } else if (
        deleteAttribute === DummyDataDeleteProps.FUNDING_HISTORY &&
        value?.fundingHistory
      ) {
        delete value?.fundingHistory;
        delete addingDummyData?.fundingHistory;
      }
    });
    setAddingDummyData({ ...addingDummyData });
    setDummyDataSet([...tempArray]);
  };

  const addVendor = (id?: Number) => {
    if (id === 0) {
      dummyDataSet.push(addingDummyData);
      setDummyDataSet([...dummyDataSet]);
    } else {
      return;
    }
  };

  const onSubmit = (value: any, selectedData: any) => {
    const index = dummyDataSet.findIndex(
      (data) => data.id === selectedData?.id
    );
    if (index !== -1 && chooseCriteria) {
      const tempArray = [...dummyDataSet];
      tempArray[index] = {
        ...selectedData,
        [chooseCriteria]: value[chooseCriteria],
      };
      setDummyDataSet([...tempArray]);
    }
  };

  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell className="table-cell-header" align="center">
            <Grid item lg={12}>
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
                    <Title
                      onClick={() => {
                        addVendor(data?.id);
                      }}
                      isVendor={data?.id === 0}
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
                <>Overall Score</>
              )}
            </Grid>
          </TableCell>
        </TableRow>
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
        {(data.companyInfo || chooseCriteria === CriteriaType.COMPANY_INFO) && (
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
        {(data.features || chooseCriteria === CriteriaType.FEATURES) && (
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
          chooseCriteria === CriteriaType.CUSTOMER_CASE_STUDIES) && (
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
