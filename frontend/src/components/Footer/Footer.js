import React from "react";

import "./Footer.css";

import { ReactComponent as PostGresIcon } from "../../svg/postgres.svg";
import { ReactComponent as ExpressIcon } from "../../svg/express.svg";
import { ReactComponent as ReactIcon } from "../../svg/react.svg";
import { ReactComponent as JSIcon } from "../../svg/javascript.svg";
import { ReactComponent as GithubIcon } from "../../svg/github.svg";
import { ReactComponent as LinkedinIcon } from "../../svg/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div className="footerleft">
        <div>Jesus Elizalde</div>
        <a href="https://github.com/Jesus-Elizalde/exotals">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/jesus-elizalde-83282118b/">
          <LinkedinIcon />
        </a>
      </div>
      <div className="footerright">
        <ReactIcon />
        <JSIcon />
        <ExpressIcon />
        <PostGresIcon />
      </div>
    </footer>
  );
}

export default Footer;
