import AddMovieForm from "./Component/AddMovieForm";
import Cards from "./Component/Cards";
import DetailPage from "./Component/DetailPage";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { createContext, useState } from "react";
import "./App.css"

const Appstate=createContext();
function App() {
  const [login,Setlogin]=useState(false);
  const [Search_query,Set_Search_query]=useState("");
  // console.log(Search_query+"its my search query");
  return (
    <Appstate.Provider value={{login, Setlogin,Search_query,Set_Search_query}}>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/addmovie" element={<AddMovieForm/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
