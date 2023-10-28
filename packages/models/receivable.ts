export interface IReceivableDTO {
  Id: number;
  UniqueReference: string;
  CurrencyCode: string;
  IssueDate: Date;
  OpeningValue: number;
  RemainingBalance: number;
  DueDate: Date;
  ClosedDate: Date | null;
  Cancelled: boolean;
}
