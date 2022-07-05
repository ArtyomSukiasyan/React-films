import { ReactElement } from "react";
import Header from "./components/Header/Header";
import Films from "./components/Films/Films";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/LogIn/Login";
import ErrorPage from "./components/404/404";
import { emptyString } from "./constants/ValidationMessages";

function App(): ReactElement {
  const currentUser = localStorage.getItem("currentUser") || emptyString;

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Films />}></Route>

          {currentUser ? (
            <Route path="/favourites" element={<Films />}></Route>
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
