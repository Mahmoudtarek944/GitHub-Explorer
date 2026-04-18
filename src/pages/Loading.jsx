export const Loading = () => {
  return (
    <div
      className="loading-style d-flex flex-column justify-content-center align-items-center "
      style={{ height: "89vh" }}
    >
      <div className="text-light d-flex flex-column gap-2">
        <div
          className="spinner-border text-light ms-2"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
        <span className="fw-bold">Loading...</span>
      </div>
    </div>
  );
};
