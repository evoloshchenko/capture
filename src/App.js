//Global Style
import GlobalStyle from "./component/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./component/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
