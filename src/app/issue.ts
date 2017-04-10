export class Issue {
  id: number;
  category: number;
  movie: number;
  description: string;
  open: boolean = true;
  date: Date = new Date();
}
