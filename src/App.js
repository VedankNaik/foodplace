import "./App.css";
import { Navbar } from "./components";
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
    </div>
  );
}

export default App;
