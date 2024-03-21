import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { NavBar } from "../components/private/shared/navbar";

const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
