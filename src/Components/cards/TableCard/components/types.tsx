import { Dispatch } from "react";
import {
  CriteriaType,
  DummyDatasetProps,
} from "../../../../Pages/Dashboard/types";
import { DummyDataDeleteProps } from "../types";

export type InputFieldTableProps = {
  id: string;
  value: any;
  dummyDataSet: DummyDatasetProps[];
  data: DummyDatasetProps;
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
  chooseCriteria: CriteriaType;
  setChooseCriteria: Dispatch<CriteriaType>;
  deleteAttribute: DummyDataDeleteProps;
};

export type CircularProgressBarProps = {
  value: number;
};
