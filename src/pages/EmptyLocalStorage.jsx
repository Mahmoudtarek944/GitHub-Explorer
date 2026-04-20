import { useNavigate } from "react-router-dom";

export const EmptyLocalStorage = () => {
  const naviage = useNavigate("/");
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="alert alert-dark bg-dark text-danger border-danger">
          <h4>Ops! Something went wrong</h4>
          <p>Could not saved repos GitHub</p>
          <button
            className="btn btn-outline-danger mt-2"
            onClick={() => naviage("/")}
          >
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
};
