import React from "react";
import { styled, Grid } from "@mui/material";
import Dashboard from "./Pages/Dashboard";

const MainContainer = styled(Grid)`
  padding: 0.5rem;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <Dashboard />
    </MainContainer>
  );
}

export default App;
