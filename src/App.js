import "./App.css";
import { Navbar } from "./components";
import { Header, AboutUs, SpecialMenu, Chef, Intro } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
