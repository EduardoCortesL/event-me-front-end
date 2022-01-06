import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "../components/auth-nav";
import { Row, Col, Layout } from "antd";

const { Content } = Layout;

const MyEvents = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated === false) {
    return (
      <div>
        <Layout>
          <Content>
            <h1 className="display-3"> Please Log In To See Your Events.</h1>
            <Row>
              <Col span={4} offset={10}>
                <AuthNav></AuthNav>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <>
        <h1>Hellow im protected so fuuuuuuck it</h1>
      </>
    )
  );
};

export default MyEvents;
