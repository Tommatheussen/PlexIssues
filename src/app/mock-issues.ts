import { Issue } from './issue';

export const ISSUES: Issue[] = [
  { id: 1, item: "Angry Birds", type: "Subtitles", description: "Wrong subtitles", open: true, date: new Date("2017-03-21 10:33") },
  { id: 3, item: "Alive", type: "Language", description: "Italian language????", open: false, date: new Date("2017-04-01 16:21") },
  { id: 2, item: "Zootopia", type: "General", description: "Doesn't play", open: true, date: new Date("2017-04-11 09:57") },
  { id: 2, item: "Aladdin", type: "Language", description: "No dutch", open: true, date: new Date("2017-04-10 13:45") },
  { id: 2, item: "Million Dollar Baby", type: "General", description: "Doesn't play 2", open: true, date: new Date() },
  { id: 2, item: "The Abandoned", type: "General", description: "Doesn't play 3", open: true, date: new Date() },
  { id: 2, item: "13 Cameras", type: "General", description: "Doesn't play 4", open: true, date: new Date() }
]