import React from "react";
import "../styles/home.css";
import { Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/subtitle";
const Home = () => {
  return (
    <>
      {/*Hero section start*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*Hero section end*/}
    </>
  );
};

export default Home;
