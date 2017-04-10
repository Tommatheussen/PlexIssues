import { Issue } from './issue';

export const ISSUES: Issue[] = [
  { id: 1, movie: 1, category: 1, description: "Wrong subtitles", open: true, date: new Date() },
  { id: 3, movie: 2, category: 2, description: "Italian language????", open: false, date: new Date() },
  { id: 2, movie: 3, category: 3, description: "Doesn't play", open: true, date: new Date() },
  { id: 2, movie: 4, category: 3, description: "Doesn't play 1", open: true, date: new Date() },
  { id: 2, movie: 2, category: 3, description: "Doesn't play 2", open: true, date: new Date() },
  { id: 2, movie: 5, category: 3, description: "Doesn't play 3", open: true, date: new Date() },
  { id: 2, movie: 6, category: 3, description: "Doesn't play 4", open: true, date: new Date() }
]