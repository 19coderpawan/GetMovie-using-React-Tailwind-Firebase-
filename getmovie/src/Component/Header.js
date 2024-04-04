import React, { useContext ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Appstate } from "../App";
import swal from "sweetalert";
import { signOut } from "firebase/auth";
import { Auth } from "../Firebase";
// import "./App.css"

const Header = () => {
  const Appstateuse = useContext(Appstate);
  const navigation = useNavigate();
  const [Search_input, Set_search_input] = useState("");
  const { Setlogin,Set_Search_query } = useContext(Appstate);
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(Auth);
      swal({
        title: "Come back Soon?",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
      Setlogin(false);
      navigation("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    Set_Search_query(Search_input);
    Set_search_input("");
  };
  return (
    <>
      <div className="text-3xl  font-bold p-3 border-b-2 border-white-500 flex justify-between items-center">
        <Link to={"/"}>
          {" "}
          <span>
            Get <span className="text-red-500">Movies</span>
          </span>
        </Link>
        <div className="search_section">
          <input
            name="search"
            value={Search_input}
            onChange={(e) => Set_search_input(e.target.value)}
            type="text"
            placeholder="Search here...."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {Appstateuse.login ? (
          <div>
            <Link to={"/addmovie"}>
              <button
                className="text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2"
              >
                Add Movies <i class="fa-solid fa-plus"></i>
              </button>
            </Link>
            <button
              className="text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2"
              onClick={handleLogOut}
            >
              Logout{" "}
            </button>
          </div>
        ) : (
          <Link to={"/Login"}>
            <button
              className="text-lg hover:text-blue-400 hover:border-red-400
        hover:border-2 p-2"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
