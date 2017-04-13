export class Issue {
  id: number;
  type: string;
  item: string;
  description: string;
  status: string;
  opendate: Date = new Date();
}
