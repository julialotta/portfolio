import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../../animations/FadeInWhenVisible";

export const About = () => {
  const title = "About";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 6,
        staggerChildren: 0.25,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 400 },
    visible: {
      opacity: 1,
      y: 50,
    },
  };

  return (
    <div className='aboutContainer'>
      <motion.h3
        className='title'
        variants={sentence}
        initial='hidden'
        animate='visible'
      >
        {title.split("").map((char, i) => {
          return (
            <motion.span key={char + "+" + i} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h3>
      <div className='textContainer'>
        <FadeInWhenVisible>
          <p>
            <p className='newsPaper'>W</p>ith experience in marketing, project
            management and start-ups and with curiosity as my biggest driving
            force, I can contribute with disciplined energy going forward. Give
            me wifi, some time and a cup of coffee and I’ll solve anything!
          </p>
        </FadeInWhenVisible>
      </div>
      <div className='imgContainer'>
        <FadeInWhenVisible>
          <div>
            <img src='cv/JLChair.png' alt='placeholder' />
            <p>
              Photo:
              <a href='https://www.instagram.com/johannapetterssons/'>
                {" "}
                Johanna Pettersson
              </a>
            </p>
          </div>
        </FadeInWhenVisible>
        <div>
          <FadeInWhenVisible>
            <h4>Experience</h4>
            <img src='cv/cvtree.png' alt='placeholder' />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className='textContainer'>
        <FadeInWhenVisible>
          <p>
            <p className='newsPaper'>I</p>n addition to my studies, I’m
            consulting for Academic Work, developing an app from scratch using
            React Native while learning the framework simultaneously. The app
            will include features such as registration, login, in app purchases,
            location triggered events, stored high score etc. In addition to
            React Native I’m using Expo, Firebase and Sass to mention a few.
          </p>
        </FadeInWhenVisible>
      </div>
      <div className='textContainer'>
        <FadeInWhenVisible>
          <p>
            <p className='newsPaper'>A</p>s a Project & Marketin Manager at
            Jubel I did PR and marketing for artists and their music releases,
            with a focus on the digital presence. My days consisted of planning
            and executing social media strategies, digital marketing strategies,
            doing DSP production, traditional PR, developing concepts for the
            artists visual content and on top of this being the artists right
            hand and project manager. My last year at Jubel I was in charge of
            the digital presence of the company itself, including a relaunch of
            the website. That, and the fact that my unofficial title was ”The
            IT-support” is what eventually led me into programming.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className='textContainer'>
        <h4>
          <p className='newsPaper'>W</p>eb Development Skills
        </h4>
        <div className='skillsContainer'>
          <p>∙ HTML5</p>
          <p>∙ CSS3</p>
          <p>∙ Sass</p>
          <p>∙ JavaScript</p>
          <p>∙ TypeScript</p>
          <p>∙ React</p>
          <p>∙ React Native</p>
          <p>∙ Node.js</p>
          <p>∙ Express.js</p>
          <p>∙ Firebase</p>
          <p>∙ SQL</p>
          <p>∙ MongoDB</p>
          <p>∙ Mongoose</p>
          <p>∙ Cypress</p>
          <p>∙ Git</p>
          <p>∙ Adobe / Pr / xD / Ai / Ps</p>
          <p>∙ Figma</p>
        </div>
      </div>
      <div className='textContainer'>
        <h4>
          <p className='newsPaper'>S</p>ome other skills
        </h4>
        <div className='skillsContainer'>
          <p>∙ Excel</p>
          <p>∙ Project Management</p>
          <p>∙ Mailchimp</p>
          <p>∙ Google Ads</p>
          <p>∙ Facebook Ads Managaer</p>
          <p>∙ Jira</p>
        </div>
      </div>

      <div className='imgContainer'>
        <FadeInWhenVisible>
          <div>
            <h4>In my spare time you’ll find me...</h4>
            <img src='cv/funtree.png' alt='placeholder' />
          </div>
        </FadeInWhenVisible>
        <div>
          <FadeInWhenVisible>
            <img src='cv/JLbeer.png' alt='placeholder' />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p>
              Photo:
              <a href='https://iawik.se/'> Ia Wik</a>
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};
