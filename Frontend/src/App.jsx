import { Outlet } from "react-router-dom";
import "./App.css";
import FooterSection from "./Components/FooterSection";
import NavBar from "./Components/NavBar";
import CardContextProvider from "./Context/CardContextProvider";

function App() {
  return (
    <>
      <CardContextProvider>
        <NavBar></NavBar>
        <Outlet />
        <FooterSection></FooterSection>
      </CardContextProvider>
    </>
  );
}

export default App;
