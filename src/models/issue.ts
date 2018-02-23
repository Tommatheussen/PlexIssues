export class Issue {
  id: number;
  type: string;
  item: {
    key: string;
    name: string;
    type: string;
  };
  description: string;
  status: string;
  openDate: Date;
}
