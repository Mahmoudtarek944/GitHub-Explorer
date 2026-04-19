import { useRef } from "react";
import { RepoContext } from "../../context/RepoContext";
import { useNavigate } from "react-router-dom";

export const SearchRepo = () => {
  // const { dispatch } = useContext(RepoContext);
  const refInput = useRef(null);
  const navigateUserRepoName = useNavigate();
  return (
    <div className="d-flex flex-column gap-3 align-items-center text-center">
      <div className="d-flex gap-3 ">
        <input
          type="text"
          className="fw-medium bg-dark text-light border-0 rounded-2 p-2 fs-6 "
          ref={refInput}
          placeholder="react"
        />
        <button
          className="btn btnSearch"
          onClick={() => {
            const val = refInput.current.value.trim();
            if (val) {
              navigateUserRepoName(`/username/${val}`);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="d-flex gap-1 justify-content-center flex-wrap">
        <button className="btn btnSearch ">All</button>
        <button className="btn btnSearch">JavaScript</button>
        <button className="btn btnSearch">Python</button>
        <button className="btn btnSearch">TypeScript</button>
        <button className="btn btnSearch">Go</button>
      </div>
    </div>
  );
};
