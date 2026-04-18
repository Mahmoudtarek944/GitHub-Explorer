export const Error = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="alert alert-danger bg-dark text-danger border-danger">
        <h4>Ops! Something went wrong</h4>
        <p>Could not fetch data from GitHub. Please check your connection.</p>
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
