import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:minhkhoitran99@gmail.com" className={styles.linkWrapper}>
            <img 
              src={getImageUrl("contact/emailIcon.png")} 
              alt="Email icon" 
            />
            <span>minhkhoitran99@gmail.com</span>
          </a>
        </li>
        <li className={styles.link}>
          <a 
            href="https://www.linkedin.com/in/khoi-tran-406a3a265" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkWrapper}
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <span>linkedin.com/in/khoi-tran</span>
          </a>
        </li>
        <li className={styles.link}>
          <a 
            href="https://www.github.com/khoitran999" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkWrapper}
          >
            <img 
              src={getImageUrl("contact/githubIcon.png")} 
              alt="Github icon" 
            />
            <span>github.com/khoitran999</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};