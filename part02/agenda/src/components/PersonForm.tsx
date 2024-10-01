import { FC } from "react";
import Input from "./Input";
import Button from "./Button";

interface PersonFormProps {
  setNewName: React.Dispatch<React.SetStateAction<string>>;
  setNewNumber: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PersonForm: FC<PersonFormProps> = ({
  setNewName,
  setNewNumber,
  handleSubmit,
}) => {
  return (
    <form>
      <Input
        name="name"
        label="Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <Input
        name="number"
        label="Number"
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <Button type="submit" onClick={handleSubmit}>
        <span>Add</span>
      </Button>
    </form>
  );
};

export default PersonForm;
