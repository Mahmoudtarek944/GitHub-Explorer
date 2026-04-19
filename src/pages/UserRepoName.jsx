import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/api";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { RepoSearchCard } from "../components/ui/RepoSearchCard";

export const UserRepoName = () => {
  const initialState = {
    repoNameSearched: {},
    isLoading: false,
    isError: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIRST_FETCH":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "SUCCESS_FETCH":
        return {
          ...state,
          repoNameSearched: action.payload,
          isLoading: false,
          isError: false,
        };
      case "ERROR_FETCH":
        return { ...state, isError: true, isLoading: false };
    }
  };

  const { username } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let isMount = true;

    async function getUserData() {
      dispatch({ type: "FIRST_FETCH" });
      try {
        const res = await getUser(username);
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
    getUserData();
    return () => {
      isMount = false;
    };
  }, [username]);
  if (state.isLoading) {
    return <Loading />;
  }
  if (state.isError) {
    return <Error />;
  }

  return <RepoSearchCard repoSearch={state.repoNameSearched} />;
};
