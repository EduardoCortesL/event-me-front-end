import React from "react";
import {  Card, Col,Row,Modal, Button } from "antd";
import { useState } from "react/cjs/react.development";


const Cardp = (props) => {
  const data = props.data;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>  
    <Row>
      <Col offset={2}>
        <Card title={data.name} bordered={true}>
          <p className="lead fw-normal text-muted mb-5">
            Stard date: {data.date}
          </p>
          <p className="lead fw-normal text-muted mb-5">
            End Date: {data.end}
          </p>
          <p className="lead fw-normal text-muted mb-5">
            Location: {data.location}
          </p>
          <p className="lead fw-normal text-muted mb-5">
            Guests: {data.guests}
            <br></br>
          <Button type="primary" onClick={showModal}>
        Invite Guests
      </Button>
      <Modal title="Invite Guests" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
      </Modal>
      </p>
        </Card>
      </Col>
      </Row>
    </div>
  );
};

export default Cardp;

