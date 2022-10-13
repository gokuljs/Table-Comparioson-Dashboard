export type DummyDatasetProps = {
  image: String;
  title: String;
  overallScore: Number;
  productDescription: String;
  fundingHistory: fundingHistoryProps[];
};

type fundingHistoryProps = {
  founded?: Number;
  keyInvestors?: String;
  Founders?: String;
};
