export interface NewIssue {
  type: string;
  plexitem: {
    title: string;
    ratingKey: string;
    type: string;
  };
  description: string;
}
