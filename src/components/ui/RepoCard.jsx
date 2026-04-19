import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const RepoCard = ({ s }) => {
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
              src={s.owner.avatar_url}
              style={{ width: "20%" }}
            />
            <div className="d-flex gap-1 text-light ">
              <button
                className="btn btn-outline-light btn-book-mark "
                onClick={() => {
                  console.log(localStorage);
                  // console.log(s);
                  const savedData = localStorage.getItem("savedRepo");
                  let currentList = savedData ? JSON.parse(savedData) : [];
                  const isExist = currentList.find((item) => item.id === s.id);

                  if (!isExist) {
                    const newList = [...currentList, s];
                    localStorage.setItem("savedRepo", JSON.stringify(newList));
                    Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                      background: "rgb(94, 123, 77)",
                      color: "#e0e0e0",
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      },
                    }).fire({
                      icon: "success",
                      title: "Saved Successfully!",
                    });
                  } else {
                    Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      background: "rgb(120, 62, 62)",
                      color: "#ebeaea",
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      },
                    }).fire({
                      icon: "error",
                      title: "Already Saved!",
                    });
                  }
                  console.log(localStorage);
                }}
              >
                <i className="bi bi-bookmark-star-fill"></i>
              </button>
            </div>
          </div>

          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-light d-flex gap-2">
              {s.name}
              <button
                style={{ backgroundColor: "rgb(147, 146, 146)" }}
                className="border-0 rounded-2 p-1 fs-6"
              >
                {s.language}
              </button>
            </Card.Title>
            <Card.Text
              className="fw-medium fs-6 description flex-grow-1"
              style={{ color: "rgb(192, 192, 192)" }}
            >
              {s.description}
            </Card.Text>
            <div className="my-1 d-flex gap-2 text-light">
              <i className="bi bi-star-fill text-warning"></i>
              <h6 className="mt-1">{s.stargazers_count}</h6>
            </div>
            <Button
              variant="btn btn-dark"
              onClick={() => {
                console.log(s.owner.login);
                naviage(`/username/${s.owner.login}`);
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
