import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeInWhenVisible } from "../../animations/FadeInWhenVisible";

export const Home = () => {
  const title = "Hi, I'm Julia-Lotta Tinglöf";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 6,
        staggerChildren: 0.09,
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
    <div className='homeContainer'>
      <motion.h3
        className='title'
        variants={sentence}
        initial='hidden'
        animate='visible'
      >
        {title.split("").map((char, i) => {
          return (
            <motion.span key={char + i} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h3>
      <div className='imgContainer'>
        <div>
          <FadeInWhenVisible>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src='cv/JL.png'
              alt='placeholder'
            />
          </FadeInWhenVisible>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Photo:
            <a href='https://www.instagram.com/robinzeijlon/'> Robin Zeilon</a>
          </motion.p>
        </div>
      </div>

      <p className='description'>
        <FadeInWhenVisible>
          Hej, Hello & Salut! <br />
          I'm an aspiring Front End Developer currently studying at
          Medieinstitutet in Stockholm, Sweden. <br />
          Prior to my studies I worked as a marketing & project manager at the
          music company Jubel. Along with my studies I'm consulting for Academic
          Work, developing a fun game app in React Native for a client of
          theirs. <br />
          <br />
          Check out some of my <Link to='/projects'> projects</Link> and read
          more <Link to='/about'>about me</Link>.
        </FadeInWhenVisible>
      </p>
    </div>
  );
};
