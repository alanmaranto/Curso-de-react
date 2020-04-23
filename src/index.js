import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Badge from "./components/Badge";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Alan"
    lastName="Maranto"
    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
    jobTitle="Full Stack Engineer"
    twitter="alanmaranto"
  />,
  container
);
