import { ReactElement, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Films from "./components/Films/Films";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/LogIn/Login";
import ErrorPage from "./components/404/404";
import { emptyString } from "./constants/ValidationMessages";
import { IFilm } from "./models/Film";
import { API_URL } from "./constants/apiUrl";

function App(): ReactElement {
  const [favourites, setFavourites] = useState<IFilm[]>([]);
  const [filmsData, setFilmsData] = useState<IFilm[]>([]);

  const currentUser = localStorage.getItem("currentUser") || emptyString;

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(API_URL);
      const movies = await response.json();
      const res: IFilm[] = movies.results;
      setFilmsData(res);
    }
    fetchApi();
  }, []);

  const addFavorite = (id: number): void => {
    const newFavorite: IFilm | undefined = filmsData.find(
      (item: IFilm) => item.id === id
    );

    setFavourites((prevfavourites: IFilm[]): any => [
      ...prevfavourites,
      newFavorite,
    ]);
  };

  const removeFavorite = (id: number) => {
    const index = favourites.findIndex((item: IFilm) => item.id === id);

    const newfavourites = favourites
      .slice(0, index)
      .concat(favourites.slice(index + 1));

    setFavourites(newfavourites);
  };

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Films
                filmsData={filmsData}
                favourites={favourites}
                handleLike={addFavorite}
                handleUnlike={removeFavorite}
              />
            }
          ></Route>

          {currentUser ? (
            <Route
              path="/favourites"
              element={
                <Films
                  favourites={favourites}
                  filmsData={filmsData}
                  handleLike={addFavorite}
                  handleUnlike={removeFavorite}
                  favouritesPage={true}
                />
              }
            ></Route>
          ) : (
            <Route
              path="/favourites"
              element={<Navigate to="/login" replace />}
            />
          )}

          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
