import { FC } from "react";

interface FilterProps {
  setNewSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ setNewSearch }) => {
  return (
    <div>
      <p>
        filter shown with:{" "}
        <input onChange={(e) => setNewSearch(e.target.value)} />
      </p>
    </div>
  );
};

export default Filter;
