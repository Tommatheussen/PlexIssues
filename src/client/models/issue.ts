export class Issue {
  id: number;
  type: string;
  item?: {
    key: string;
    title: string;
    type: string;
  };
  itemKey: string;
  description: string;
  status: string;
  openDate: Date;
}
