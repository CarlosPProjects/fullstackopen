import { TAgenda } from "../types/types";

export const isNameRepeated = (name: string, arr: TAgenda[]) => {
  return arr.find((agenda) => agenda.name === name);
};
