import React from "react";
import { Row, Col, Form, DatePicker, Input, Button } from "antd";

import "antd/dist/antd.css";

/*
            <Form.Item label="Event Name" name="eventName" rules={[{required: true, message: 'Please input the name of the Event'}]}>
            <Form.Item label="Event Date" name="eventDate">
            <Form.Item label="Event End" name="eventEnd">
            <Form.Item label="Event Creator" name="eventCreator">
            <Form.Item label="Event Guests" name="eventGuest">
*/

const EventForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1 className="display-3"> Please fill up the form below</h1>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Form.Item
            label="Event Name"
            name="eventName"
            rules={[
              { required: true, message: "Please input the name of the Event" },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
        <Row>
          <Form.Item
            label="Event Creator"
            name="eventCreator"
            rules={[
              {
                required: true,
                message: "Please input the name of the Event creator",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            label="Event Guests"
            name="eventGuest"
            rules={[
              {
                required: true,
                message: "Please input the name of the Event guests",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="btn btn-primary btn-lg rounded-pill" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EventForm;
