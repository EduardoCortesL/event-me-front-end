import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "../components/auth-nav";
import { Row, Col, Layout,Spin } from "antd";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import Cardp from "../components/card";

const { Content } = Layout;

const MyEvents = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [userEvents, setUserEvents] = useState();

  //API call to get all events
  /*
  useEffect(() => {
    axios.get("http://localhost:4000/events/eduardocortes@bitoverflow.org") //Figure out how to not have this hardcoded 
      .then(response => setUserEvents(response.data))
  }, []); */

  //This prevents the hook to re-render muliple times
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/events/eduardocortes@bitoverflow.org")
      .then((response) => {
        setUserEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (isLoading) {
    return <div>
      <Spin tip="loading"></Spin>
    </div>;
  }

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
    <>
      {loading ? (
        <div>...Data Loading</div>
      ) : (
        <Layout>
          <Content>
            <h1 className="display-4">
              Hey! {user.given_name} below are your events.
            </h1>
            <Row>
              {userEvents.map((event) => (
                <Cardp data={event} key={event.name} />
              ))}
            </Row>
          </Content>
        </Layout>
      )}
    </>
  );

  /*
  return ( //figure out beterr way of getting data, also need to parse or something to get rid of "" marks 
    isAuthenticated && (
      <>
        <div className="site-card-wrapper">
          <Layout>
            <Content>
            <h1 className="display-4">Hey! {user.given_name} below are your events.</h1>
          <Row gutter={16}>
            <Col span={6} offset={3}>
              <Card title={JSON.stringify(userEvents[0].name)} bordered={false}>
                <p className="lead fw-normal text-muted mb-5"> Start date:{JSON.stringify(userEvents[0].date)}</p>
                <p className="lead fw-normal text-muted mb-5"> End Date:{JSON.stringify(userEvents[0].end)}</p>
                <p className="lead fw-normal text-muted mb-5"> Location:{JSON.stringify(userEvents[0].location)}</p>
              </Card>
            </Col>
            <Col span={6}>
            <Card title={JSON.stringify(userEvents[1].name)} bordered={false}>
                <p className="lead fw-normal text-muted mb-5"> Start date:{JSON.stringify(userEvents[1].date)}</p>
                <p className="lead fw-normal text-muted mb-5"> End Date:{JSON.stringify(userEvents[1].end)}</p>
                <p className="lead fw-normal text-muted mb-5"> Location:{JSON.stringify(userEvents[1].location)}</p>
              </Card>
            </Col>
            <Col span={6}>
            <Card title={JSON.stringify(userEvents[2].name)} bordered={false}>
                <p className="lead fw-normal text-muted mb-5"> Start date:{JSON.stringify(userEvents[2].date)}</p>
                <p className="lead fw-normal text-muted mb-5"> End Date:{JSON.stringify(userEvents[2].end)}</p>
                <p className="lead fw-normal text-muted mb-5"> Location:{JSON.stringify(userEvents[2].location)}</p>
              </Card>
            </Col>
          </Row>
          </Content>
          </Layout>
        </div>
      </>
    )
  );*/
};

export default MyEvents;
