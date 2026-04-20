import { useContext } from "react";
import { BookMarksCards } from "./BookMarksCards";
import { SavedRepoContext } from "../../context/SavedRepoContext";

export const BookMarksList = () => {
  const { state } = useContext(SavedRepoContext);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {state.map((val) => (
            <BookMarksCards key={val.id} obj={val} />
          ))}
        </div>
      </div>
    </>
  );
};
