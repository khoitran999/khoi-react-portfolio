import React from "react";

import styles from "./Experience.module.css";
import "./cube.scss";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.cubeContainer}>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={getImageUrl("skills/python.png")} alt="Python" />
            </div>
            <div className="face2">
              <img src={getImageUrl("skills/java.png")} alt="Python" />
            </div>
            <div className="face3">
              <img src={getImageUrl("skills/react.png")} alt="Python" />
            </div>
            <div className="face4">
              <img src={getImageUrl("skills/node.png")} alt="Python" />
            </div>
            <div className="face5">
              <img src={getImageUrl("skills/swiftui.png")} alt="Python" />
            </div>
            <div className="face6">
              <img src={getImageUrl("skills/c.png")} alt="Python" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
