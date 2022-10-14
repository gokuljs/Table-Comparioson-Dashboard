import { Dispatch } from "react";
import { DummyDatasetProps } from "../../../Pages/Dashboard/types";

export enum DummyDataDeleteProps {
  PRODUCT_DESCRIPTION,
  FUNDING_HISTORY,
}

export type TableCardProps = {
  data: DummyDatasetProps;
  dummyDataSet: DummyDatasetProps[];
  setShowDetailedFundingHistory: Dispatch<boolean>;
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
  showDetailedFundingHistory: boolean;
};
