import {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import DynamicTitle from './DynamicTitle';
import Footer from './Footer';
import headshot from '../headshot.jpg';

import Project from './Project';
import project1image from '../project_1.png';
import project2image from '../project_2.png';
import project3image from '../project_3.png';

function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const cardList = document.getElementsByClassName('card');

    document.addEventListener('scroll', function(e) {
      let closestVal = Math.abs(cardList[0].getBoundingClientRect().top);
      let closestIndex = 0;

      for (var i = 0; i < cardList.length; i++) {
        if (Math.abs(cardList[i].getBoundingClientRect().top) < closestVal ) {
          closestVal = Math.abs(cardList[i].getBoundingClientRect().top);
          closestIndex = i;
        }
      }
      // console.log(closestIndex);
      setTitleIndex(closestIndex);
      
      if (closestIndex > 0) {
        setDisplay(true);
      } else {
        setDisplay(false);
      };
    });

  }, []);

  return (
    <div className="App">
      <Header display={display}/>
      <DynamicTitle titleIndex={titleIndex}/>
      <div className="page-stream">
        <div className="card hero-card card-bottom-buffer">
          <section>
            <h1>William Gruszka</h1>
            <h2>Junior Web Developer</h2>
          </section>
        </div>
        <div className="card who-am-i-card card-bottom-buffer">
          <p>
            Friendly and aspiring full-stack web developer motivated by a semantic and UX-conscious approach to web development and responsive web design, with interests in Progressive Web Apps and emerging technologies. Comes from a background in fast-paced optical retail, developing skills in communication, teamwork and attention to detail. Currently studying a certificate in web development through USYD’s Coding Bootcamp, developing skills with industry leading technologies like MERN Stack, PWA tooling including Webpack and Workbox, CSS libraries including Bootstrap, MVC and ORM/ODM.<br/>
            <br/>
            Looking for opportunities to utilise skills developed from prior experiences and current studies to build well designed and high quality web applications but also to leverage interests in problem solving, collaboration and innovation.
          </p>
          <img className='shadow' src={headshot}></img>
        </div>
        <div className="card work-card card-bottom-buffer">
          <Project image={project1image} title={"Giphy Guessing Game"} tags={['GiphyAPI', 'WordsAPI']}/>
          <Project image={project2image} title={"Generic Weather App"} tags={['OpenWeatherAPI', 'Bootstrap']}/>
          <Project image={project3image} title={"ProjectHub"} tags={['Node.js', 'Express.js', 'Sequelize', 'Bootstrap']}/>
        </div>
        <div className="card touch-base-card">
        <form autoComplete="false">
          <input type="email" name="name" placeholder='Your email here...'/>
          <textarea placeholder='Your message here...'></textarea>
          <input className="plaque plaque-btn" type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
