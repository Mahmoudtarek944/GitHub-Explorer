import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const RepoSearchCard = ({ repoSearch }) => {
  const navigateHome = useNavigate();
  if (!repoSearch) return null;

  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <Card
          style={{ backgroundColor: "transparent" }}
          className="flex-fill repo-card-username p-3"
        >
          <header className="d-flex justify-content-start mb-3">
            <button
              className="btn btn-back fw-bold fs-6 d-flex align-items-center gap-2"
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={() => navigateHome("/")}
            >
              <i className="bi bi-arrow-left"></i> Back to results
            </button>
          </header>
          <div className="d-flex flex-column flex-md-row gap-4 align-items-center align-items-md-start px-2">
            <div className="flex-shrink-0">
              <Card.Img
                src={repoSearch.avatar_url}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #444",
                }}
                className="shadow-sm"
              />
            </div>
            <div className="d-flex flex-column gap-2 text-light flex-grow-1">
              <h2 className="fw-bold mb-0">{repoSearch.login}</h2>
              <div className="mb-1">
                {repoSearch.email && (
                  <h6 className="text-secondary mb-1">
                    <i className="bi bi-envelope me-2"></i>
                    {repoSearch.email}
                  </h6>
                )}
                {repoSearch.bio && (
                  <p
                    className="small text-secondary mb-0"
                    style={{ maxWidth: "500px" }}
                  >
                    {repoSearch.bio}
                  </p>
                )}
              </div>
              <div className="d-flex gap-4 my-2">
                <div className="text-center">
                  <h6 className="fw-bold mb-0">{repoSearch.public_repos}</h6>
                  <small className="text-secondary">Repos</small>
                </div>
                <div className="text-center">
                  <h6 className="fw-bold mb-0">{repoSearch.followers}</h6>
                  <small className="text-secondary">Followers</small>
                </div>
                <div className="text-center">
                  <h6 className="fw-bold mb-0">{repoSearch.following}</h6>
                  <small className="text-secondary">Following</small>
                </div>
              </div>
              <div className="d-flex gap-3 text-secondary small mb-2">
                {repoSearch.company && (
                  <span>
                    <i className="bi bi-building me-1"></i>
                    {repoSearch.company}
                  </span>
                )}
                {repoSearch.location && (
                  <span>
                    <i className="bi bi-geo-alt me-1"></i>
                    {repoSearch.location}
                  </span>
                )}
              </div>
              <a
                href={repoSearch.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-git-hub d-flex align-items-center gap-2 justify-content-center"
                style={{ width: "fit-content" }}
              >
                <i className="bi bi-github"></i>
                View on GitHub
              </a>
            </div>
          </div>
          <hr className="text-secondary mt-4" />
        </Card>
      </div>
    </div>
  );
};
