import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Lana from "../../assets/lana.png";
import "./profile.css";

function Profile() {
  return (
    <Container className="container mx-sm-auto px-3 text-center">
      <div className="links mt-5">
        <span className="title">Lana H., BSN, RN-BC, OCN</span>
      </div>
      <Row className="mains">
        <Col className="profileimage">
          <Image className="lana" src={Lana} />
        </Col>
        <Col className="text">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-9">
              <article className="tile is-child box">
                <div className="content">
                  <ul className="about-text">
                    <li className="li">
                      Registered Nurse with 5+ years of professional experience
                      as a traveling & staff nurse in inpatient and outpatient
                      oncology settings.
                    </li>
                    <li className="li">
                      Leadership experience working as a charge nurse & nursing
                      preceptor.
                    </li>
                    <li className="li">
                      Member of Oncology Nursing Society & nursing committee for
                      policy development.
                    </li>
                    <li className="li">
                      B.S. degree in Nursing from Chamberlain University.
                    </li>
                    <li className="li">
                      Post-bacc pre-med & certificate in full stack web
                      development from Columbia University.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
