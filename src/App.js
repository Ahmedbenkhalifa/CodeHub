import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./assets/theme";
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainHome/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
