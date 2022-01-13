import React from "react";
import { Layout, Spin } from "antd";

const { Content } = Layout;

const Loading = () => (
  //use () instead of {} because is a statlets component
    <Layout style={{height:"100vh"}}>
      <Content>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
        <Spin tip="loading" size="large" />
        </div>
      </Content>
    </Layout>
);

export default Loading;
