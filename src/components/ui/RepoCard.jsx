import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const RepoCard = ({ s }) => {
  return (
    <>
      <div className="col-10 col-md-5 col-lg-4 mb-3 ">
        <Card
          style={{
            width: "18rem",
            backgroundColor: "transparent",
            border: "solid gray 0.1em",
          }}
        >
          <div className="d-flex justify-content-between p-3 mt-1">
            <Card.Img variant="top" src={s.owner.avatar_url} className="w-25" />
            <div className="d-flex gap-1 text-light ">
              <button className="btn btn-outline-light ">
                <i className="bi bi-bookmark-star-fill"></i>
              </button>
            </div>
          </div>

          <Card.Body>
            <Card.Title className="text-light">{s.name}</Card.Title>
            <Card.Text className="text-light fw-medium ">
              {s.description}
            </Card.Text>
            <Button variant="btn btn-dark">Show Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
