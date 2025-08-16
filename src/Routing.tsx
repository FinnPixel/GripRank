import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import SkillTrees from "./pages/SkillTrees/index";
import Header from "./components/Header";
import { useEffect } from "react";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import { Box } from "@mui/material";
import About from "./pages/About";

function Routing() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box position={"absolute"}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill_trees" element={<SkillTrees />} />
        <Route path="/nopage" element={<NoPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default Routing;
