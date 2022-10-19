import "./App.css";
import { Navbar } from "./components";
import { Header, AboutUs, SpecialMenu, Chef } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
