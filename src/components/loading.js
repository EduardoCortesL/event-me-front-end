import React from "react";
import { Layout, Spin } from "antd";

const { Content } = Layout;

const Loading = () => (
  //use () instead of {} because is a statlets component
    <Layout>
      <Content>
        <Spin tip="loading" size="large" />
      </Content>
    </Layout>
);

export default Loading;
