import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Container from "../components/Container";
import Footer from "../components/Footer";
import "./Home.css";

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
