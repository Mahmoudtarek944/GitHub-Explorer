export const AllReposCard = ({ reposData }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-1">
          {reposData.map((repo) => (
            <div className="p-3 d-flex justify-content-between ">
              <div className="d-flex flex-column gap-1">
                <h6>{repo.owner.login}</h6>
                <h6>{repo.description}</h6>
              </div>
              <div>
                <h6>{repo.language}</h6>
                <div className="my-1 d-flex gap-2 text-light">
                  <i className="bi bi-star-fill text-warning"></i>
                  <h6 className="mt-1">{repo.stargazers_count}</h6>
                </div>
                <button className="btn btn-outline-light btn-book-mark ">
                  <i className="bi bi-bookmark-star-fill"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
