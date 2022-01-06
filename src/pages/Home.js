import React from "react";
import AuthNav from "../components/auth-nav";
import { Row, Col } from "antd";


const Home = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-5">
          <div className="align-items-center">
            <div className="col align-self-center">
              <h1 className="display-1">Welcome to EventMe.</h1>
              <p className="lead fw-normal text-muted mb-5">
                The easiest way to create,manage and invite people to your
                event.
              </p>
            </div>
            <Row>
                <Col span={4} offset={10}>
                <AuthNav></AuthNav>
                </Col>
            </Row>
          </div>
        </div>
      </header>
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="row align-items-center">
              <h3 className="h1 fs-1 text-white mb-1">
                Your next event is a few clicks away.
              </h3>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Home;
