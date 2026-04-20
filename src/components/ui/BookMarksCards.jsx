import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { sweetalertEmpty } from "../../utils/sweetalert2";
import { useContext } from "react";
import { SavedRepoContext } from "../../context/SavedRepoContext";
import { EmptyLocalStorage } from "../../pages/EmptyLocalStorage";
export const BookMarksCards = ({ obj }) => {
  const { dispatch } = useContext(SavedRepoContext);
  const naviage = useNavigate();
  return (
    <>
      <div className="col-10 col-md-5 col-lg-4 mb-3 d-flex">
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
              src={obj.owner.avatar_url}
              style={{ width: "20%" }}
            />
            <div className="d-flex gap-1 text-light ">
              <button
                className="btn btn-outline-light btn-book-mark "
                onClick={() => {
                  const keyRepo = obj.id;
                  const dataLocalStorage =
                    JSON.parse(localStorage.getItem("savedRepo")) || [];
                  const remidDataLocalStorage = dataLocalStorage.filter(
                    (o) => o.id !== keyRepo,
                  );
                  localStorage.setItem(
                    "savedRepo",
                    JSON.stringify(remidDataLocalStorage),
                  );

                  sweetalertEmpty();

                  dispatch({ type: "DELETE_SAVED_REPO", objDelete: obj });

                  console.log(dataLocalStorage.length);
                  if (remidDataLocalStorage.length === 0) {
                    dispatch({ type: "EMPTY_LOCAL_STORAGE" });
                  }
                }}
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
          </div>

          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-light d-flex gap-2">
              {obj.name}
              <button
                style={{ backgroundColor: "rgb(147, 146, 146)" }}
                className="border-0 rounded-2 p-1 fs-6"
              >
                {obj.language}
              </button>
            </Card.Title>
            <Card.Text
              className="fw-medium fs-6 description flex-grow-1"
              style={{ color: "rgb(192, 192, 192)" }}
            >
              {obj.description}
            </Card.Text>
            <div className="my-1 d-flex gap-2 text-light">
              <i className="bi bi-star-fill text-warning"></i>
              <h6 className="mt-1">{obj.stargazers_count}</h6>
            </div>
            <Button
              variant="btn btn-dark"
              onClick={() => {
                console.log(obj.owner.login);
                naviage(`/username/${obj.owner.login}`);
              }}
            >
              Show Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
