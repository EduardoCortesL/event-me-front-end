import React from "react";
import { Layout,Row,Col } from "antd";
import AuthNav from "../components/auth-nav";


const { Content } = Layout;

const LoginPrompt = () => (
    <div>
    <Layout>
      <Content>
        <h1 className="display-3"> Please Log In To See Your Profile.</h1>
        <Row>
            <Col span={4} offset={10}>
            <AuthNav></AuthNav>
            </Col>
        </Row>
      </Content>
    </Layout>
  </div>
)

export default LoginPrompt;