export type DummyDatasetProps = {
  id?: number;
  image: string;
  title: string;
  overallScore: number;
  productDescription: string;
  fundingHistory: fundingHistoryProps[];
};

type fundingHistoryProps = {
  founded?: number;
  keyInvestors?: string;
  Founders?: string;
};
