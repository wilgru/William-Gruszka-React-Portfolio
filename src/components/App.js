import {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import DynamicTitle from './DynamicTitle';
import Footer from './Footer';

function App(props) {

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    // 👇️ use document.getElementById()
    const cardList = document.getElementsByClassName('card');

    // 👇️ (better) use a ref
    // const el2 = ref.current;
    // console.log(el2);

    document.addEventListener('scroll', function(e) {
      let closestVal = Math.abs(cardList[0].getBoundingClientRect().top);
      let closestIndex = 0;

      for (var i = 0; i < cardList.length; i++) {
        if (Math.abs(cardList[i].getBoundingClientRect().top) < closestVal ) {
          closestVal = Math.abs(cardList[i].getBoundingClientRect().top);
          closestIndex = i;
        }
      }

      console.log(closestIndex);
      setTitleIndex(closestIndex);
    });

  }, []);

  return (
    <div className="App">
      <Header/>
      <DynamicTitle titleIndex={titleIndex}/>
      <div className="page-stream">
        <div className="card hero-card">
        </div>
        <div className="card who-am-i-card">
          <p>
            Friendly and aspiring full-stack web developer motivated by a semantic and UX-conscious approach to web development and responsive web design, with interests in Progressive Web Apps and emerging technologies. Comes from a background in fast-paced optical retail, developing skills in communication, teamwork and attention to detail. Currently studying a certificate in web development through USYD’s Coding Bootcamp, developing skills with industry leading technologies like MERN Stack, PWA tooling including Webpack and Workbox, CSS libraries including Bootstrap, MVC and ORM/ODM.<br/>
            <br/>
            Looking for opportunities to utilise skills developed from prior experiences and current studies to build well designed and high quality web applications but also to leverage interests in problem solving, collaboration and innovation.
          </p>
        </div>
        <div className="card work-card">
          <p>
            View some of my works here:
          </p>
        </div>
        <div className="card touch-base-card">
          <p>
            Hey how about you contact me huh?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
