import React from "react";
import { Row, Col, Form, DatePicker, Input, Layout } from "antd";
import "antd/dist/antd.min.css";


const { Content } = Layout;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 6 },
};


const EventForm = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Layout>
        <Content>
          <h1 className="display-3"> Please Fill Up The Form Below</h1>
          <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Row>
              <Col span={8} offset={8}>
                <Form.Item
                  label="Event Name"
                  name="eventName"
                  rules={[
                    {
                      required: true,
                      message: "Please input the name of the Event",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={8}>
                <Form.Item
                  label="Event Date"
                  name="eventDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input the start date of the Event",
                    },
                  ]}
                >
                  <DatePicker showTime format="YYYY-MM-DD HH:mm" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={8}>
                <Form.Item
                  label="Event End"
                  name="eventEnd"
                  rules={[
                    {
                      required: true,
                      message: "Please input the end date of the Event",
                    },
                  ]}
                >
                  <DatePicker showTime format="YYYY-MM-DD HH:mm" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={8}>
                <Form.Item
                  label="Event Location"
                  name="eventLocation"
                  rules={[
                    {
                      required: true,
                      message: "Please input the name of the Event location",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <button
                className="btn btn-primary btn-lg rounded-pill"
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  );
};

export default EventForm;
