import React from "react";

import Layout, { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";


const Home = () => {
    return (
    <>
        <header className="masthead">
            <div className="container px-5">
                <div className="align-items-center">
                    <div className="text-center text-lg-start">
                         <h1 className="display-1">Welcome to EventMe.</h1>
                           <p className="lead fw-normal text-muted mb-5">The easiest way to create,manage and invite people to your event.</p>
                    </div>
                </div>
            </div>
        </header>
        <aside className="text-center bg-gradient-primary-to-secondary">
            <div className="container px-5">
                 <div className="row gx-5 justify-content-center">
                    <div className="row align-items-center">
                        <h3 className="h2 fs-1 text-white mb-4">Your next event is a few clicks away.</h3>
                        <button className="btn btn-primary btn-lg rounded-pill"> Start here</button>
                    </div>
                </div>
            </div>
        </aside>
    </>
    );
}

export default Home;