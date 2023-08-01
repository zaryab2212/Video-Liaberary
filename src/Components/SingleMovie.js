import { useState, useEffect } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";


import { Api } from "../context";

const SingleMovie = () => {
  const [movie, setmovie] = useState('');
  const [Loading, setLoading] = useState(true);
  const {id} = useParams();
 
  // console.log(querry)

  const moviedata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setLoading(false);
        setmovie(data);
      
        // console.log(setmovie);
      } else {
        <div>kdkkd</div>
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      // console.log(moviedata);
      moviedata(`${Api}&i=${id}`);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (Loading) {
    return(
      <div className="movie-section">

        <div className="loading"> Loading...</div>


      </div>

    )


  }

  return <section className="movie-section">

  <div className="movie-card">

    <figure>
    <img src={movie.Poster}/>

    </figure>
    <div className="card-content">
    <p className="title">{movie.Title}</p>
    <p className="card-text">{movie.Released }</p>
    <p className="card-text">{movie.Genre}</p>
    <p className="card-text">{movie.imdbRating}/ 10</p>
    <p className="card-text">{movie.Country}</p>
<NavLink  className="back-btn"  to = {'/'}>
  Go Back
      
</NavLink>
    </div>


  </div>




  </section>
  
  
  
  
  
  
  
  
};
export default SingleMovie;
