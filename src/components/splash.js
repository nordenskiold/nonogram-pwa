import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Nonogram PWA</h1>
        <h2 className="subtitle">A PWA implementation of the nonogram game</h2>
        <Link to="/play" className="button">
          Play Now!
        </Link>
      </div>
    </div>
  </section>
);
