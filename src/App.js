import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Services from "./Components/Services";
import Testinomials from "./Components/Testinomials";
import Timeline from "./Components/Timeline";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <Work></Work>
      <Timeline></Timeline>
      <Services></Services>
      <Testinomials></Testinomials>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
}

export default App;
