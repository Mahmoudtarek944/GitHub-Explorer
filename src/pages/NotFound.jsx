import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-dark text-white text-center"
      style={{ height: "89vh" }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#0d6efd" }}>
        404
      </h1>
      <h2>Oops! Page Not Found</h2>
      <p className="text-secondary w-50">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-info mt-3 px-4 py-2 fw-bold">
        Back to Home
      </Link>
    </div>
  );
};
