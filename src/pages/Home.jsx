import { useEffect, useReducer } from "react";
import { getData } from "../utils/api";
import { SearchRepo } from "../components/ui/SearchRepo";
import { ReposList } from "../components/ui/ReposList";
import { RepoContext } from "../context/RepoContext";
function Home() {
  const initialState = {
    repos: [],
    currentPage: 1,
    isLoading: false,
    isError: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIRST_FETCH":
        return { ...state, isLoading: true, isError: false };
      case "SUCCESS_FETCH":
        return {
          ...state,
          repos: action.payload,
          isLoading: false,
          isError: false,
        };
      case "ERROR_FETCH":
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      case "SEARCH_NAME":
        return {
          ...state,
        };
      case "PAGINATION":
        return {
          ...state,
          currentPage: action.nowIndex,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMount = true;
    async function getAPIData() {
      dispatch({ type: "FIRST_FETCH" });
      try {
        const res = await getData("react", 1);
        console.log(res);
        if (isMount) {
          dispatch({ type: "SUCCESS_FETCH", payload: res });
        }
      } catch {
        if (isMount) {
          dispatch({ type: "ERROR_FETCH" });
        }
      }
    }
    getAPIData();
    return () => {
      isMount = false;
    };
  }, []);
  const itemsPerPage = 12;
  const indexOfLastRepo = state.currentPage * itemsPerPage;
  const indexOfFirstRepo = indexOfLastRepo - itemsPerPage;
  const currentRepos = state.repos.slice(indexOfFirstRepo, indexOfLastRepo); // slice 12 card from all state.repo this array that we need to show in ui no all state.repo
  // rather than pass all recived array , I pass only 12 from the start index the current page to end index of current page
  const totalPages = Math.ceil(state.repos.length / itemsPerPage); // to define number of buttons in pagination
  return (
    <div>
      <header className="d-flex flex-column align-items-center gap-1 text-white mt-4 mb-2 fw-medium">
        <h3>Explore GitHub repositories</h3>
        <h6 className="text-secondary">
          Search by username or repository name
        </h6>
      </header>
      <div>
        <RepoContext.Provider value={{ dispatch, state: currentRepos }}>
          <SearchRepo />
          <ReposList />
        </RepoContext.Provider>
      </div>
      <nav>
        <ul className="pagination d-flex justify-content-center">
          {[...Array(totalPages)].map(
            (
              _,
              index, // [1 , 2 ,3 , ...... , 9] by index [ 0 , 1 , .... 8]
            ) => (
              <li
                key={index}
                className={`page-item ${state.currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  onClick={
                    () => dispatch({ type: "PAGINATION", nowIndex: index + 1 }) // refer to the number of page now then recalculation the currentRepos
                  }
                  className="btn btn-outline-light btn-pagination"
                >
                  {index + 1}
                </button>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
