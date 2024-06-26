import React from "react";
import "./styles.css";
import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="loader-wrapper">
      <CircularProgress />
    </div>
  );
}

export default Loader;
