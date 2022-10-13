export type DummyDatasetProps = {
  id: number;
  image: string;
  title: string;
  overallScore?: number;
  productDescription?: string;
  fundingHistory?: Funding;
};

type Funding = {
  funding?: string;
  history?: fundingHistoryProps;
};

type fundingHistoryProps = {
  founded?: string;
  keyInvestors?: string;
  Founders?: string;
};
