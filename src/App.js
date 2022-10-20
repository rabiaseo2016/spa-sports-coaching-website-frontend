import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Form from "./Form/Form";
import FormContainer from "./FormContainer/FormContainer";
import Courses from "./Courses/Courses";
import Footer from "./Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
  color: "black",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Slider />
        <Courses />
        <FormContainer />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
