import React, { Component, useState } from "react";
import { Row, Col, Form, DatePicker, Input, Layout } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import { useAuth0, User } from "@auth0/auth0-react";
import AuthNav from "../components/auth-nav";

const { Content } = Layout;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 6 },
};

const EventForm = () => {

  const { user,isAuthenticated, isLoading} = useAuth0();

  const [creatorId, setCreator] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    console.log(creatorId);
    console.log(name);
    console.log(date);
    console.log(end);
    console.log(location);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }
/*
  if (isAuthenticated === false) {
    return (
      <div>
        <Layout>
          <Content>
            <h1 className="display-3"> Please Log In To Create Event.</h1>
            <Row>
              <Col span={4} offset={10}>
                <AuthNav></AuthNav>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }*/
  return (
    //isAuthenticated && (
    <div>
      <Layout>
        <Content>
          <h1 className="display-3"> Please Fill Up The Form Below</h1>
          <Form {...layout}  onFinish={handleSubmit}>
          <Row>
              <Col span={8} offset={8}>
                <Form.Item
                  label="Event Creator"
                  name="eventCreator"
                >
                  <Input
                    disabled
                    placeholder={user.name}
                    onChange={event => setCreator(event.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
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
                  <Input
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
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
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    value={date}
                    onChange={date => setDate(date._d)}
                  />
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
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    value={end}
                    onChange={end => setEnd(end._d)}
                  /> 
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
                  <Input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                  />
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
                type="submit"
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
   // )
  );
};

export default EventForm;

/* ---------------- Working but not using hooks
 class EventForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);

    this.state = {
      name: "",
      date: new Date(),
      end: new Date(),
      location: "",
      guest: [],
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeEnd(date) {
    this.setState({
      end: date,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onSubmit(e) {
    const event = {
      name: this.state.name,
      date: this.state.date,
      end: this.state.end,
      location: this.state.location,
      guest: this.state.guest,
    };

    console.log(event);

    axios
      .post("http://localhost:4000/events/add", event)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <Layout>
          <Content>
            <h1 className="display-3"> Please Fill Up The Form Below</h1>
            <Form {...layout} onFinish={this.onSubmit}>
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
                    <Input
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
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
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                    />
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
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm"
                      value={this.state.end}
                      onChange={this.onChangeEnd}
                    />
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
                    <Input
                      value={this.state.location}
                      onChange={this.onChangeLocation}
                    />
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
                  type="submit"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default EventForm;

-------------------- This is working but not using hooks */

/*
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

*/
