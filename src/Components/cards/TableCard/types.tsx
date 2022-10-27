import { Dispatch } from "react";
import {
  CriteriaStatusTypes,
  CriteriaType,
  DummyDatasetProps,
} from "../../../Pages/Dashboard/types";

export enum DummyDataDeleteProps {
  PRODUCT_DESCRIPTION,
  FUNDING_HISTORY,
  COMPANY_INFO,
  FEATURES,
  CUSTOMER_CASE_STUDIES,
}

export type TableCardProps = {
  data: DummyDatasetProps;
  dummyDataSet: DummyDatasetProps[];
  setShowDetailedFundingHistory: Dispatch<boolean>;
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
  showDetailedFundingHistory: boolean;
  chooseCriteria: CriteriaType;
  setChooseCriteria: Dispatch<CriteriaType>;
  index: number;
  setNewVendor: Dispatch<boolean>;
  criteriaStatus: CriteriaStatusTypes;
};
