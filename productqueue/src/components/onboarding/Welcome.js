
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
      <div>
        <h2>Welcome to Product Queue</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta necessitatibus praesentium? Obcaecati sint soluta assumenda sunt culpa atque, saepe enim libero dignissimos porro modi, non iure, error impedit deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi numquam eius esse? Perspiciatis culpa porro voluptate ipsa illum magni qui vitae quis, asperiores odio veritatis atque. Modi iusto quam delectus.
        </p>
        <Link to="/new-user/setup">
          <button>Continue</button>
        </Link>
      </div>
    );
  };

export default Welcome;