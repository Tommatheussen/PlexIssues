export interface Issue {
  readonly id: string;
  readonly type: string;
  readonly item: {
    type: string;
    title: string;
    key: string;
  };
  readonly description: string;
  readonly status: 'new' | 'confirmed' | 'rejected' | 'pending' | 'done';
  readonly openDate: Date;
}
