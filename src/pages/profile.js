import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "../components/auth-nav";
import { Row, Col ,Layout } from "antd";

const { Content } = Layout;



const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated === false) {
    return (
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
    );
  }

 

  return (
    isAuthenticated && (
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{user.name}</h2>
            <p className="lead text-muted">{user.email}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
