import { useContext } from "react";
import { RepoCard } from "./RepoCard";
import { RepoContext } from "../../context/RepoContext";

export const ReposList = () => {
  const { state } = useContext(RepoContext);
  return (
    <>
      <div className="container mt-4 me-5">
        <div className="row justify-content-center">
          {state.map((s) => (
            <RepoCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </>
  );
};
