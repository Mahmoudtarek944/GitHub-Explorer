import Swal from "sweetalert2";
import { sweetalertError, sweetalertSuccess } from "../../utils/sweetalert2";
import { useState } from "react";
export const AllReposCard = ({ reposData }) => {
  const adding = 4;
  // const [firstIndexSlice, setFirstIndexSlice] = useState(0);
  const [lastIndexSlice, setLastIndexSlice] = useState(adding);

  if (!reposData || reposData.length === 0) {
    return (
      <div className="text-center text-muted my-5 p-5 border border-secondary rounded-3">
        <i className="bi bi-folder-x fs-1 d-block mb-2"></i>
        No public repositories found.
      </div>
    );
  }

  return (
    <div className="container pb-5">
      <h4 className="text-white mb-4 fw-bold d-flex align-items-center gap-2">
        <i className="bi bi-journal-bookmark-fill text-secondary"></i>
        Repositories
        <span className="badge bg-secondary fs-6">{reposData.length}</span>
      </h4>
      <div className="d-flex flex-column gap-3">
        {reposData.slice(0, lastIndexSlice).map((repo) => (
          <div
            className="alert-all-repos-user shadow-sm p-3 d-flex align-items-center justify-content-between"
            key={repo.id}
          >
            <div className="d-flex flex-column gap-1 flex-grow-1 pe-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <h6 className="fw-bold text-info m-0 repo-link">{repo.name}</h6>
              </a>
              {repo.description && (
                <p
                  className="m-0 text-secondary small"
                  style={{ opacity: 0.8 }}
                >
                  {repo.description}
                </p>
              )}
            </div>
            <div className="d-flex align-items-center gap-4">
              {repo.language && (
                <div className="d-flex align-items-center gap-2">
                  <span className="text-secondary small fw-medium">
                    {repo.language}
                  </span>
                </div>
              )}
              <div className="d-flex align-items-center gap-1 text-warning">
                <i className="bi bi-star"></i>
                <span className="small text-white">
                  {repo.stargazers_count}
                </span>
              </div>
              <button
                className="btn btn-book-mark border-0 p-1 text-secondary"
                title="Add to bookmarks"
                onClick={() => {
                  const savedData = localStorage.getItem("savedRepo");
                  let currentList = savedData ? JSON.parse(savedData) : [];
                  const isExist = currentList.find(
                    (item) => item.id === repo.id,
                  );

                  if (!isExist) {
                    const newList = [...currentList, repo];
                    localStorage.setItem("savedRepo", JSON.stringify(newList));
                    sweetalertSuccess();
                  } else {
                    sweetalertError();
                  }
                }}
              >
                <i className="bi bi-bookmark-plus fs-5"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-back fw-bold fs-6 d-flex align-items-center gap-2"
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={() => {
          setLastIndexSlice((prev) => prev + adding);
        }}
      >
        Show More
      </button>
    </div>
  );
};
