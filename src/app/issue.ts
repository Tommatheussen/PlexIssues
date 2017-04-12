export class Issue {
  id: number;
  type: string;
  item: string;
  description: string;
  open: boolean = true;
  date: Date = new Date();
}
