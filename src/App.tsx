import { ReactElement } from "react";
import Header from "./components/Header/Header";
import Films from "./components/Films/Films";
import "./App.scss";

function App(): ReactElement {
  return (
    <>
      <Header />
      <Films />
    </>
  );
}

export default App;
