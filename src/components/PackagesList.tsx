import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchPackages } = useActions();
  const { data, error, loading } = useTypedSelector(state => state.packages);
  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchPackages(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default PackagesList;
