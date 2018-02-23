export interface NewIssue {
  type: string;
  plexitem: {
    title: string;
    key: string;
    type: string;
  };
  description: string;
}
