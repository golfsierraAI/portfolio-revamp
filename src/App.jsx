import React, { useCallback, useEffect } from 'react';
import './app.scss';
import { smoothScroll, throttle } from './helpers/helper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/home';

function App() {
  const [currentElement, setCurrentElement] = React.useState('home');

  const [arr] = React.useState(['home', 'desc', 'experience', 'projects', 'contact', 'footer']);

  function scroll(event) {
    const currIndex = arr.indexOf(currentElement);
    let element = null;
    let elementName = '';
    if (checkScrollDirectionIsUp(event)) {
      if (currIndex === 0) {
        return;
      }
      elementName = arr[currIndex - 1];
    } else {
      if (currIndex === arr.length - 1) {
        return;
      }
      elementName = arr[currIndex + 1];
    }

    setCurrentElement(elementName);
    element = document.getElementById(elementName);
    smoothScroll(element.offsetTop);
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  const manageScroll = throttle((event) => scroll(event));

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      manageScroll(e);
    },
    [manageScroll]
  );

  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    if (window.innerWidth <= 900) {
      window.removeEventListener('wheel', handleScroll);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 900) {
        window.removeEventListener('wheel', handleScroll);
      } else {
        window.addEventListener('wheel', handleScroll, { passive: false });
      }
    });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentElement, handleScroll]);

  return (
    <div className="app">
      <HomePage currentElement={currentElement} setCurrentElement={setCurrentElement} />
    </div>
  );
}

export default App;
