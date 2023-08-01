import React from "react";
import { GlobalContext } from "../context";

function Search() {
  const { querry, setquerry , error } = GlobalContext();
  // console.log(querry)

  return (
    <>
      \
      <section className="search-section">
        <h2> Input Your Seach here</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Seach Here"
              onChange={(e) => setquerry(e.target.value)}
              name="typed"
              value={querry}
            ></input>
          </div>
        </form>
        <div className="card-error">

          <p>{Error.show && Error.msg}</p>


        </div>
      </section>
    </>
  );
}

export default Search;
