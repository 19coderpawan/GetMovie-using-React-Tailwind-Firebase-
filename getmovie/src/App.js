import AddMovieForm from "./Component/AddMovieForm";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/addmovie" element={<AddMovieForm/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
