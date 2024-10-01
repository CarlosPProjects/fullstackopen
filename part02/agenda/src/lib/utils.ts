import { TAgenda } from "../types/types";

export const isNameRepeated = (name: string, arr: TAgenda[]) => {
  return arr.find((agenda) => agenda.name === name);
};

export const getFilteredAgenda = (value: string, arr: TAgenda[]) => {
  const lowerCaseValue = value.toLowerCase();
  return arr.filter((item) => item.name.toLowerCase().includes(lowerCaseValue));
};


