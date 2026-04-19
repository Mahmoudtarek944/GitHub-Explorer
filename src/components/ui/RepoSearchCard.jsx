import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { UserNameRepoContext } from "../../context/UserNameRepoContext";
import { AllReposUserName } from "./AllReposUserName";

export const RepoSearchCard = ({ repoSearch }) => {
  const navigateHome = useNavigate();
  if (!repoSearch) {
    return null;
  }
  return (
    <>
      <div className=" container">
        <div className="d-flex justify-content-center my-4">
          <Card
            style={{
              //   width: "12rem",
              backgroundColor: "transparent",
            }}
            className="flex-fill repo-card"
          >
            <header className="d-flex justify-content-start">
              <button
                className="btn w-100 fw-bold fs-6 btn-back "
                style={{ backgroundColor: "transparent" }}
                onClick={() => {
                  navigateHome("/");
                }}
              >
                ← Back to results
              </button>
            </header>
            <div className="d-flex gap-5 p-3 mt-1">
              <Card.Img
                variant="top"
                src={repoSearch.avatar_url}
                style={{ width: "100px", borderRadius: "50%" }}
              />
              <div className="d-flex flex-column gap-1 text-light ">
                <h3>{repoSearch.login}</h3>
                <h6>{repoSearch.email}</h6>
                <h6>{repoSearch.bio}</h6>
                <div className="d-flex gap-3">
                  <div className="d-felx flex-column gap-1">
                    <h6> {repoSearch.public_repos}</h6>
                    <h6>Repos</h6>
                  </div>
                  <div className="d-felx flex-column gap-1">
                    <h6>{repoSearch.followers}</h6>
                    <h6>Followers</h6>
                  </div>
                  <div className="d-felx flex-column gap-1">
                    <h6>{repoSearch.following}</h6>
                    <h6>Following</h6>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <h6>{repoSearch.company}</h6>
                  <h6>{repoSearch.location}</h6>
                </div>
                <button className="btn btn-git-hub d-flex gap-2">
                  <i className="bi bi-github"></i>
                  View on GitHub
                </button>
              </div>
            </div>
            <hr className="text-light" />
            <AllReposUserName />
          </Card>
        </div>
      </div>
    </>
  );
};
