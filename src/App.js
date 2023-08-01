import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./Components/SingleMovie";
import  Error from "./Components/Error";
import Home from "./Components/Home";
import "./App.css"



function App() {
  return (
    <>
      

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="movie/:id" element={<SingleMovie />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes >
        
     
    </>
  );
}

export default App;
