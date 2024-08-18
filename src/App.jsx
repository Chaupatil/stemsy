import React from "react";
import ProjectRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ProjectRoutes />
    </Router>
  );
}

export default App;
