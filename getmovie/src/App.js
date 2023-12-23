import AddMovieForm from "./Component/AddMovieForm";
import Cards from "./Component/Cards";
import DetailPage from "./Component/DetailPage";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { createContext, useState } from "react";

const Appstate=createContext();
function App() {
  const [login,Setlogin]=useState(false);

  return (
    <Appstate.Provider value={{login, Setlogin}}>
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
