import { useEffect, useReducer } from "react";
import { Loading } from "./Loading";
import { BookMarksList } from "../components/ui/BookMarksList";
import { EmptyLocalStorage } from "./EmptyLocalStorage";
import { SavedRepoContext } from "../context/SavedRepoContext";

export const BookMark = () => {
  const initialState = {
    dataLocalStorage: [],
    isLoading: false,
    isEmpty: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIRST_FETCH_LOCAL_STORAGE":
        return {
          ...state,
          isLoading: true,
          isEmpty: false,
        };
      case "SECCESS_FETCH_LOCAL_STORTAG":
        return {
          ...state,
          dataLocalStorage: action.payload,
          isLoading: false,
          isEmpty: false,
        };
      case "EMPTY_LOCAL_STORAGE":
        return {
          ...state,
          isLoading: false,
          isEmpty: true,
        };
      case "DELETE_SAVED_REPO":
        return {
          ...state,
          dataLocalStorage: state.dataLocalStorage.filter(
            (o) => o.id !== action.objDelete.id,
          ),
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let isMount = true;
    dispatch({ type: "FIRST_FETCH_LOCAL_STORAGE" });

    const res = localStorage.getItem("savedRepo");
    const currReposSaved = res ? JSON.parse(res) : [];
    if (currReposSaved.length) {
      if (isMount) {
        dispatch({
          type: "SECCESS_FETCH_LOCAL_STORTAG",
          payload: currReposSaved,
        });
      }
    } else {
      dispatch({ type: "EMPTY_LOCAL_STORAGE" });
    }
  }, []);
  if (state.isLoading) {
    return <Loading />;
  }
  if (state.isEmpty) {
    return <EmptyLocalStorage />;
  }
  return (
    <SavedRepoContext.Provider
      value={{ dispatch, state: state.dataLocalStorage }}
    >
      <BookMarksList values={state.dataLocalStorage} />
    </SavedRepoContext.Provider>
  );
};
