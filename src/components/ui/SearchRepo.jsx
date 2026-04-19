import { useRef, useState } from "react";
import { RepoContext } from "../../context/RepoContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export const SearchRepo = () => {
  const { dispatch } = useContext(RepoContext);
  const refInput = useRef(null);
  const navigateUserRepoName = useNavigate();
  const [searchType, setSearchType] = useState("user");

  const handleSearch = () => {
    const val = refInput.current.value.trim();
    if (!val) return;
    if (searchType === "user") {
      navigateUserRepoName(`/username/${val}`);
      // to redirect to userRepoName page
    } else {
      dispatch({ type: "QUERY_CODE", payload: val });
    }
  };

  return (
    <div className="d-flex flex-column gap-3 align-items-center text-center">
      <div className="d-flex gap-2">
        <button
          className={`btn ${searchType === "user" ? "btn-light" : "btn-outline-secondary"}`}
          onClick={() => setSearchType("user")}
        >
          User Search
        </button>
        <button
          className={`btn ${searchType === "tool" ? "btn-light" : "btn-outline-secondary"}`}
          onClick={() => setSearchType("tool")}
        >
          Tool Search
        </button>
      </div>

      <div className="d-flex gap-3">
        <input
          type="text"
          className="fw-medium bg-dark text-light border-0 rounded-2 p-2 fs-6"
          ref={refInput}
          placeholder={
            searchType === "user"
              ? "Enter username..."
              : "Enter tool (e.g. React)"
          }
        />
        <button className="btn btnSearch" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="d-flex gap-1 justify-content-center flex-wrap">
        {["All", "React", "JavaScript", "Python"].map((tool) => (
          <button
            key={tool}
            className="btn btnSearch btn-sm"
            onClick={() => dispatch({ type: "QUERY_CODE", payload: tool })}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
};
