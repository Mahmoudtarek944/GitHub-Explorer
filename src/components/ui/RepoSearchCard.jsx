import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const RepoSearchCard = ({ repoSearch }) => {
  if (!repoSearch || Object.keys(repoSearch).length === 0) {
    return null;
  }
  return (
    <>
      <div className="col-10 mb-3 d-flex">
        <Card
          style={{
            width: "18rem",
            backgroundColor: "transparent",
          }}
          className="flex-fill repo-card"
        >
          <div className="d-flex justify-content-between p-3 mt-1">
            <Card.Img
              variant="top"
              src={repoSearch.avatar_url}
              style={{ width: "20%" }}
            />
            <div className="d-flex gap-1 text-light ">
              <button className="btn btn-outline-light btn-book-mark ">
                <i className="bi bi-bookmark-star-fill"></i>
              </button>
            </div>
          </div>

          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-light d-flex gap-2">
              {repoSearch.name}
              <button
                style={{ backgroundColor: "rgb(147, 146, 146)" }}
                className="border-0 rounded-2 p-1 fs-6"
              >
                {repoSearch.language}
              </button>
            </Card.Title>
            <Card.Text
              className="fw-medium fs-6 description flex-grow-1"
              style={{ color: "rgb(192, 192, 192)" }}
            >
              {repoSearch.description}
            </Card.Text>
            <div className="my-1 d-flex gap-2 text-light">
              <i className="bi bi-star-fill text-warning"></i>
              <h6 className="mt-1">{repoSearch.stargazers_count}</h6>
            </div>
            <Button variant="btn btn-dark">Show Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
