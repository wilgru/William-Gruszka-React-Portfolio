import {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import DynamicTitle from './DynamicTitle';
import Footer from './Footer';
import headshot from '../headshot.jpg';

import Project from './Project';
import projectData from '../projectsData';

function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [display, setDisplay] = useState(false);

  // useEffect to udpate heading whhenever user scrolls
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

  // function to compile all projects using a loop 
  const projectLoop = (projectObject) => {
    let els = [];
    for (let i = 0; i < projectObject.length; i++) {
      els.push(
        <Project image={projectObject[i].image} title={projectObject[i].title} githubLink={projectObject[i].githubLink} deployedLink={projectObject[i].deployedLink} tags={projectObject[i].tags}/>
      )
    }
    return els
  }

  // return React App component
  return (
    <div className="App">
      <Header display={display}/>
      <div id='main-stream'>
        <div id='title-and-card-stream'>
          <DynamicTitle titleIndex={titleIndex}/>
          <div id="card-stream">
            <div id='hero-card' className="card card-bottom-buffer">
              <section>
                <h1>William Gruszka</h1>
                <h2>Junior Web Developer</h2>
              </section>
            </div>
            <div id='who-am-i-card' className="card card-bottom-buffer">
              <p>
              Aspiring full-stack web developer motivated by a semantic and UX-conscious approach to web development and responsive web design, with an interest in Progressive Web Apps and learning emerging technologies. Comes from a background in fast-paced optical retail, developing skills in communication, teamwork and attention to detail. Completed a certificate in web development through USYD’s Coding Bootcamp, developing skills with industry leading technologies including MERN Stack, PWA tools like Webpack and Workbox, CSS libraries including Bootstrap and Ant Design, and paradigms like MVC and ORM/ODM.<br/>
                <br/>
                Looking for opportunities to utilise skills developed from prior experiences and current studies to build well designed and high quality web applications but also to leverage interests in problem solving, collaboration and innovation.
              </p>
              <img className='shadow' src={headshot}></img>
            </div>
            <div id='work-card' className="card card-bottom-buffer">
              {projectLoop(projectData)}
            </div>
            <div id='touch-base-card' className="card">
              <h1>Email me at:</h1>
              <a style={{padding: 0, margin: 0, fontSize: "24px"}} href='mailto: william.gruszka@gmail.com'>william.gruszka@gmail.com</a>
              <h1>GitHub:</h1>
              <a style={{padding: 0, margin: 0, fontSize: "24px"}} href='https://github.com/wilgru/william-gruszka-react-portfolio'>https://github.com/wilgru/william-gruszka-react-portfolio</a>
              <h1>LinkedIn:</h1>
              <a style={{padding: 0, margin: 0, fontSize: "24px"}} href='https://www.linkedin.com/in/william-gruszka-a03373227/'>https://www.linkedin.com/in/william-gruszka-a03373227/</a>
              {/* <form autoComplete="false">
                <input type="email" name="name" placeholder='Your email here...'/>
                <textarea placeholder='Your message here...'></textarea>
                <input className="plaque plaque-btn" type="submit" value="Submit"/>
              </form> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
