export interface Issue {
  readonly type: string;
  readonly item: string;
  readonly description: string;
  readonly status: 'new' | 'confirmed' | 'rejected' | 'pending' | 'done';
  readonly openDate: Date;
}
