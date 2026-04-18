import { useContext, useRef } from "react";
import { RepoContext } from "../../context/RepoContext";

export const SearchRepo = () => {
  const { dispatch } = useContext(RepoContext);
  const refInput = useRef(null);
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
            let valueInput = refInput.current.value.trim() > 0;
            if (!valueInput) return;
            dispatch({
              type: "SEARCH_NAME",
            });
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
