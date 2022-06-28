//Global Style
import GlobalStyle from "./component/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
