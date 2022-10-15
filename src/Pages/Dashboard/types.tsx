export type DummyDatasetProps = {
  id: number;
  image: string;
  title: string;
  overallScore?: number;
  productDescription?: string;
  fundingHistory?: Funding;
  companyInfo?: string;
  features?: string;
  customerCaseStudies?: string;
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

export enum CriteriaType {
  COMPANY_INFO = "companyInfo",
  FEATURES = "features",
  CUSTOMER_CASE_STUDIES = "customerCaseStudies",
  DEFAULT = "",
}
