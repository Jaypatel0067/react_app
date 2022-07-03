import React from "react";
import Skill from "../skills/skill.css";
import { DiStreamline } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaNetworkWired } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaCouch } from "react-icons/fa";
import { DiCisco } from "react-icons/di";

import { FaBlenderPhone } from "react-icons/fa";

import { IoThunderstormSharp } from "react-icons/io5";

export default function skill() {
  return (
    <section id="Skill">
      <h5>What Skills I have</h5>
      <h1>My specialization</h1>

      <div className="container">
        <div className="card skill_card">
          <div className="row skill_card_row">
            <DiStreamline className="ico" />
            <h1>Database</h1>
            <hr />
            <ul className="skillul">
              <li className="skill_li">
                <DiMysql /> MySql
              </li>
              <li className="skill_li">
                <DiMongodb /> Mongodb
              </li>
              <li className="skill_li">
                <FaCouch /> CouchDb
              </li>
            </ul>
          </div>
          <div className="row skill_card_row activee">
            <DiReact className="ico" />
            <h1>Web Designing</h1>
            <hr />
            <div className="card webskill">
              <div className="row">
                <ul className="skillul">
                  <h3>Frontend</h3>
                  <li className="skill_li">
                    <DiHtml5 /> HTML
                  </li>
                  <li className="skill_li">
                    <DiCss3 /> Css
                  </li>
                  <li className="skill_li">
                    <DiJavascript1 /> Javascript
                  </li>
                  <li className="skill_li">
                    <DiReact /> React.Js
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul className="skillul">
                  <h3>Backend</h3>
                  <li className="skill_li">
                    <DiNodejsSmall /> Node.Js
                  </li>
                  <li className="skill_li">
                    <DiPhp /> PHP
                  </li>
                  <li className="skill_li">
                    <DiJava /> Java
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row skill_card_row">
            <FaNetworkWired className="ico" />
            <h1>Networking</h1>
            <hr />
            <ul className="skillul">
              <li className="skill_li">
                <IoThunderstormSharp /> Internet of Things (IoT)
              </li>
              <li className="skill_li">
                <DiCisco /> Cisco Technologies
              </li>
              <li className="skill_li">
                <FaBlenderPhone /> Counfiguration DHCP or IPV Phone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
