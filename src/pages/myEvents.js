import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Row, Col, Layout } from "antd";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import Cardp from "../components/card";
import Loading from "../components/loading";
import LoginPrompt from "../components/privateAccess";

const url = "http://localhost:4000/events/";

const { Content } = Layout;

const MyEvents = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [userEvents, setUserEvents] = useState();

  //const user_info = user;

  const fetchData = () => {
    setLoading(true);
    axios
    //.get(url_user)
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

  // ISSUE, ATUH0 USER NEEDS TO BE AUTHENTICATED, IN ORDER TO ACCESS IT, BUT API CALL NEEDS TO BE ON THE TOP. HOW CAN I DO IT? 
  //const url_user = url + user.email;
  //console.log(url_user);

  //This prevents the hook to re-render muliple times
  useEffect(() => {
    fetchData();
  }, []);







  if (isLoading) {
    return (
      <div>
      <Loading></Loading>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return <div>
      <LoginPrompt></LoginPrompt>
    </div>
  }

  return (
    <>
      {loading ? (
        <div>
          <Loading></Loading>
        </div>
      ) : (
        <Layout>
          <Content>
            <h1 className="display-4">
              Hey! {user.given_name} below are your events.
            </h1>
            <Row>
              {userEvents.map((event) => (
                <Cardp data={event} key={event._id} />
              ))}
            </Row>
          </Content>
        </Layout>
      )}
    </>
  );
};

export default MyEvents;
