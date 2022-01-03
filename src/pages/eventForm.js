import React from "react";
import { Formik, Field, useFormik } from "formik";
//import Layout, { Content } from "antd/lib/layout/layout";
import * as Yup from "yup";
import { Row, Col, Form, DatePicker, Input } from "antd";

const EventForm = () => {
  return (
    <div>
      <Row>
        <Col span="12">
          <div className="event-form-card">
            <h1 level="3">Create your event</h1>
            <p type="secondary">
              Complete the Event Form below to create your event.
            </p>
            <Formik
              initialValues={{
                eventName: "",
                eventDate: "",
                eventEnd: "",
                eventLocation: "",
                eventCreator: "",
                eventGuests: "",
              }}
              validationSchema={Yup.object({
                eventName: Yup.string().required("Required"),
                eventDate: Yup.date(),
                eventEnd: Yup.date(),
                eventLocation: Yup.string().required("Required"),
                eveentCreator: Yup.string().required("Required"),
                eventGuests: Yup.array(),
              })}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {(formik) => (
                <Form>
                  <Row>
                    <p>Hi Please fill up the form below</p>
                  </Row>
                  <Row>
                    <Col span="12" className="half-field">
                      <Form.Item label="Event Name" name="eventName">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="12" className="half-field">
                      <Form.Item label="Event Date" name="eventDate">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="12" className="half-field">
                      <Form.Item label="Event End" name="eventEnd">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                      <Col span="12" className="half-field">
                          <Form.Item label="Event Creator" name="eventCreator">
                              <Input />
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row>
                      <Col span="12" className="half-field">
                          <Form.Item label="Event Guests" name="eventGuest">
                              <Input />
                          </Form.Item>
                      </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EventForm;
