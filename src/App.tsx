//react
import { FC } from "react";
//pages
import Home from "./pages/home";
//components
import { NavBar } from "./components/private/shared/navbar";

const App: FC = () => (
  <>
    <NavBar />
    <Home />
  </>
);

export default App;
