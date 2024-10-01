import { FC } from "react";
import Input from "./Input";

interface FilterProps {
  setNewSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ setNewSearch }) => {
  return (
    <Input
      name="search"
      label="Filter"
      onChange={(e) => setNewSearch(e.target.value)}
    />
  );
};

export default Filter;
