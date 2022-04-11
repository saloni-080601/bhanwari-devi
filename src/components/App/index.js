import React, { useEffect } from "react";
import Routing from "../../routing";
import Header from "../Header";
import Footer from "../Footer";
// import "./styles/styles.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import { useHistory } from "react-router-dom";
import { Grid, Box, Container, List, Typography, Divider } from "@mui/material";

import "./styles.scss";

export const matchPath = (pathConstant, path) =>
  new RegExp(pathConstant.replace(/:(\w*)/g, "(\\w*)")).test(path);

function App() {
  const HIDE_FOOTER_PATHS = ["PATHWAY_COURSE_CONTENT", "LOGIN", "PROFILE"];

  const history = useHistory();
  const [showFooter, setShowFooter] = React.useState(true);
  // showFooter = true;
  history.listen((location) => {
    setShowFooter(
      !HIDE_FOOTER_PATHS.some((pathToHide) =>
        matchPath(pathToHide, location.pathname)
      )
    );
    console.log(
      "show",
      !HIDE_FOOTER_PATHS.some((pathToHide) =>
        matchPath(pathToHide, location.pathname)
      )
    );
  });

  console.log(
    "window.location.pathname",
    window.location.pathname.split("/")[1]
  );

  console.log("params");

  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <Header />
        <div className="content">
          {" "}
          <Routing />{" "}
        </div>
        <Box sx={{ display: showFooter ? "inherit" : "none" }}>
          <Footer />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
