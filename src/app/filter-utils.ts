import {TabelleMannschaft} from "./data/types";

export const matchFilter = (filter?: string) => (mannschaft: TabelleMannschaft) =>  {
  return !filter || mannschaft.TeamName.includes(filter)
};
