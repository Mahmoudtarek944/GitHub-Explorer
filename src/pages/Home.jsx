import { useEffect, useReducer } from "react";
import { getData } from "../utils/api";
import { SearchRepo } from "../components/ui/SearchRepo";
import { ReposList } from "../components/ui/ReposList";
import { RepoContext } from "../context/RepoContext";
function Home() {
  const initialState = {
    repos: [],
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
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getAPIData() {
      let isMount = true;
      dispatch({ type: "FIRST_FETCH" });
      try {
        const res = await getData(1);
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
  }, []);
  return (
    <div>
      <header className="d-flex flex-column align-items-center gap-1 text-white mt-4 mb-2 fw-medium">
        <h3>Explore GitHub repositories</h3>
        <h6 className="text-secondary">
          Search by username or repository name
        </h6>
      </header>
      <div>
        <RepoContext.Provider value={{ dispatch, state: state.repos }}>
          <SearchRepo />
          <ReposList />
        </RepoContext.Provider>
      </div>
    </div>
  );
}

export default Home;
