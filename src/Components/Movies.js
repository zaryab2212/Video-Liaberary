import React, { useState } from "react";
import { GlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie , Loading} = GlobalContext();
  console.log(Loading)
  
  if(Loading){
    return(<>
     <div className="movie-section">

<div className="loading"> Loading...</div>


</div>
    </>)
  }else{

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col movies-responsive">
          {movie.map((e , i) => {
            const { Title, imdbID, Poster } = e;
            const  movieName = Title.substring(0, 15);
            
            
            return (
              <div key={imdbID} className="card">
                <div className="card-info">
                
               

                  <NavLink to={`movie/ ${imdbID}`}>
                  
                    

                   <h2> {movieName.length > 11 ? `${movieName} ...` : movieName }</h2>
                   <img src={Poster} alt={imdbID} />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );}
};

export default Movies;

// <>
// {/*
//      */}

//       {/* {movie.map((e) => {
//          const {imdbID, Poster, Title} = e;
//          console.log(e) */}
//         //    return (

//         // //     <div>

//         // //       <NavLink to={'movies/${imdbID}'}>

//         // //        <div className="card">
//         // //         <div className="card-info">

//         // //            <h2>
//         // //             {Title}
//         // //           </h2>

//         // //              <img src={Poster} alt={imdbID}/>

//         // //   </div>

//         // //   </div>

//         // // </NavLink>
//         // // </div>

//         //    )
//       }

//     }

// //    </div>
// //  </section>

// </>
