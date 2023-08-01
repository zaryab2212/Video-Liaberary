import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const Api = "https://www.omdbapi.com/?apikey=8454e25e";

const AppProvider = ({ children }) => {
  const [movie, setmovie] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, seterror] = useState({ show: false, msg: "" });
  const [querry, setquerry] = useState("titanic");
  // console.log(querry)

  const moviedata = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setLoading(false);
        setmovie(data.Search);
        seterror({ show: false, msg: "" });
        // console.log(setmovie);
      } else {
        seterror({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      // console.log(moviedata);
      moviedata(`${Api}&s=${querry}`);
    }, 800);

    return () => clearTimeout(timer);
  }, [querry]);

  return (
    <AppContext.Provider value={{ movie, error, Loading, querry, setquerry }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContext };
