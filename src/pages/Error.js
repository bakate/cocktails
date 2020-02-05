import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <section className="error-page section">
    <div className="error-container">
      <h1>Hey, it's a dead zone papi</h1>
      <Link className="btn" to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  </section>
);

export default Error;
