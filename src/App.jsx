import React, { useCallback, useEffect } from 'react';
import './app.scss';
import { debounce, smoothScroll, throttle } from './helpers/helper';
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
    let scrollingUp = checkScrollDirectionIsUp(event);
    if (scrollingUp) {
      if (currIndex === 0) {
        return;
      }
      elementName = arr[currIndex - 1];
    } else {
      if (currIndex === arr.length - 1 || scrollingUp === undefined) {
        return;
      }
      elementName = arr[currIndex + 1];
    }
    setCurrentElement(elementName);
    element = document.getElementById(elementName);
    smoothScroll(element.offsetTop);
  }

  function checkScrollDirectionIsUp(event) {
    if (event.type === 'keydown') {
      if (event.key === 'ArrowUp') {
        return true;
      } else if (event.key === 'ArrowDown') {
        return false;
      }
      return undefined;
    }
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  const manageScroll = throttle((event) => scroll(event));
  const manageKeyScroll = debounce((event) => scroll(event));

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      manageScroll(e);
    },
    [manageScroll]
  );

  const handleKeyScroll = useCallback(
    (e) => {
      e.preventDefault();
      manageKeyScroll(e);
    },
    [manageKeyScroll]
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

    window.addEventListener('keydown', handleKeyScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyScroll);
    };
  }, [currentElement, handleKeyScroll, handleScroll]);

  return (
    <div className="app">
      <HomePage currentElement={currentElement} setCurrentElement={setCurrentElement} />
    </div>
  );
}

export default App;
