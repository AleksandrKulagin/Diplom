import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <AppRoutes />
      </Router>
    </NextUIProvider>
  );
}

export default App;
