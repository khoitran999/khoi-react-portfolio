import React from "react";
import AnimatedLetters from '../AnimatedLetters'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useEffect, useState } from 'react';

export const Hero = () => {
  const[letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    },4000)
    return () => {
        clearTimeout(timeoutId)
    }
}, [])
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
              <AnimatedLetters letterClass={letterClass}
                strArray={['H', 'i',',', ' ', 'I',"'m"]}
                idx = {8}
                />
{/* 
                <img className={styles.logoK}src={getImageUrl("hero/figmaK.png")} alt = "developer" /> */}

                <AnimatedLetters letterClass={letterClass}
                strArray={[' ','K','h', 'o', 'i']}
                idx = {15}
                />
          </h1>
        <p className={styles.description}>
          I'm a junior CS student interested in Fullstack and Mobile Development. 
          Reach out if you'd like to learn more!
        </p>
        <div className={styles.contactcontain}>
        <a href="https://drive.google.com/file/d/1N6uVWM3flwZ3AeqPRCYClK2FS0iLDR6x/view?usp=sharing" className={styles.contactBtn}>
          My Resume
        </a>
        <a href="mailto:minhkhoitran99@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/khoi.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
